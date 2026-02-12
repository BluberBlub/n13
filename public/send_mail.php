<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
  exit;
}

// Parse input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data || empty($data['name']) || empty($data['email']) || empty($data['message'])) {
  http_response_code(400);
  echo json_encode(['status' => 'error', 'message' => 'Bitte füllen Sie alle Felder aus.']);
  exit;
}

$name = strip_tags(trim($data['name']));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$message = strip_tags(trim($data['message']));

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['status' => 'error', 'message' => 'Ungültige E-Mail-Adresse.']);
  exit;
}

// ─── Config ──────────────────────────────────────────────
$ownerEmail = 'endres.niko@gmail.com';
$fromAddress = 'noreply@niko-endres.de';
$fromName = '=?UTF-8?B?' . base64_encode('N13 – Mode & Lifestyle') . '?=';

// ─── Design Tokens ──────────────────────────────────────
$accent = '#CBB993';
$dark = '#0C0A09';
$text = '#1C1917';
$textSec = '#44403C';
$textMuted = '#78716C';
$bg = '#FAFAF9';
$border = '#E7E5E4';
$surface = '#FFFFFF';

$safeName = htmlspecialchars($name);
$safeEmail = htmlspecialchars($email);
$safeMessage = nl2br(htmlspecialchars($message));
$date = date('d.m.Y \u\m H:i \U\h\r');
$year = date('Y');

// ─── Helper: Build multipart email ──────────────────────
function buildEmail($plainText, $htmlContent)
{
  $boundary = md5(uniqid(time()));
  $body = "--$boundary\r\n";
  $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
  $body .= $plainText . "\r\n";
  $body .= "--$boundary\r\n";
  $body .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
  $body .= $htmlContent . "\r\n";
  $body .= "--$boundary--\r\n";
  return ['boundary' => $boundary, 'body' => $body];
}

// ─── Shared email wrapper ───────────────────────────────
function emailWrapper($title, $subtitle, $contentHtml, $accent, $dark, $text, $textMuted, $bg, $border, $surface)
{
  return <<<HTML
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:0; background-color:{$bg}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:{$bg}; padding: 40px 20px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:{$surface}; border: 1px solid {$border};">

  <!-- Logo -->
  <tr>
    <td style="padding: 40px 40px 30px 40px; text-align: center; border-bottom: 2px solid {$accent};">
      <img src="https://n13.niko-endres.de/logo-n13.png" alt="N13" width="120" style="display:block; margin:0 auto; max-width:120px; height:auto;">
    </td>
  </tr>

  <!-- Title -->
  <tr>
    <td style="padding: 36px 40px 10px 40px;">
      <h1 style="margin:0; font-size:22px; font-weight:300; color:{$text}; letter-spacing:2px; text-transform:uppercase; text-align:center;">{$title}</h1>
      <p style="margin:8px 0 0 0; font-size:13px; color:{$textMuted}; text-align:center; letter-spacing:0.5px;">{$subtitle}</p>
    </td>
  </tr>

  <!-- Divider -->
  <tr>
    <td style="padding: 20px 40px;">
      <div style="height:1px; background-color:{$border};"></div>
    </td>
  </tr>

  {$contentHtml}

  <!-- Footer -->
  <tr>
    <td style="padding: 24px 40px; background-color:{$dark}; text-align:center;">
      <p style="margin:0 0 6px 0; font-size:10px; color:{$textMuted}; letter-spacing:1px; text-transform:uppercase;">N13 &mdash; Mode &amp; Lifestyle</p>
      <p style="margin:0 0 12px 0; font-size:11px; color:{$textMuted};">
        <a href="https://n13.niko-endres.de" style="color:{$accent}; text-decoration:none;">n13.niko-endres.de</a>
      </p>
      <p style="margin:0; font-size:10px; color:#57534E;">
        <a href="https://n13.niko-endres.de/datenschutzerklaerung" style="color:#57534E; text-decoration:none;">Datenschutz</a>
        &nbsp;&middot;&nbsp;
        <a href="https://n13.niko-endres.de/impressum" style="color:#57534E; text-decoration:none;">Impressum</a>
      </p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>
HTML;
}

// ─── Field block helper ─────────────────────────────────
function fieldBlock($label, $value, $accent, $text, $bg, $extraStyle = '')
{
  return <<<HTML
  <tr>
    <td style="padding: 0 40px 20px 40px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding: 20px 24px; background-color:{$bg}; {$extraStyle}">
            <p style="margin:0 0 4px 0; font-size:10px; font-weight:700; color:{$accent}; text-transform:uppercase; letter-spacing:2px;">{$label}</p>
            <p style="margin:0; font-size:15px; color:{$text}; line-height:1.7;">{$value}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
HTML;
}

// ══════════════════════════════════════════════════════════
// 1) MAIL TO OWNER — Notification about new inquiry
// ══════════════════════════════════════════════════════════
$ownerContent = '';
$ownerContent .= fieldBlock('Name', $safeName, $accent, $text, $bg);
$ownerContent .= fieldBlock('E-Mail', "<a href='mailto:{$safeEmail}' style='color:{$text}; text-decoration:none; border-bottom:1px solid {$accent};'>{$safeEmail}</a>", $accent, $text, $bg);
$ownerContent .= fieldBlock('Nachricht', $safeMessage, $accent, $textSec, $bg, "border-left: 3px solid {$accent};");

// Reply button
$ownerContent .= <<<HTML
  <tr>
    <td style="padding: 0 40px 36px 40px; text-align:center;">
      <a href="mailto:{$safeEmail}" style="display:inline-block; padding:14px 40px; background-color:{$dark}; color:{$surface}; font-size:11px; font-weight:700; text-decoration:none; text-transform:uppercase; letter-spacing:3px;">Antworten</a>
    </td>
  </tr>
HTML;

$ownerHtml = emailWrapper('Neue Nachricht', $date, $ownerContent, $accent, $dark, $text, $textMuted, $bg, $border, $surface);

$ownerPlain = "NEUE KONTAKTANFRAGE – N13\n========================\n\n";
$ownerPlain .= "Datum: $date\nName: $name\nE-Mail: $email\n\nNachricht:\n$message\n\n";
$ownerPlain .= "---\nN13 – Mode & Lifestyle | https://n13.niko-endres.de\n";

$ownerMail = buildEmail($ownerPlain, $ownerHtml);
$ownerSubject = '=?UTF-8?B?' . base64_encode("Neue Kontaktanfrage – N13") . '?=';

$ownerHeaders = "MIME-Version: 1.0\r\n";
$ownerHeaders .= "Content-Type: multipart/alternative; boundary=\"{$ownerMail['boundary']}\"\r\n";
$ownerHeaders .= "From: $fromName <$fromAddress>\r\n";
$ownerHeaders .= "Reply-To: $name <$email>\r\n";
$ownerHeaders .= "Sender: $fromAddress\r\n";
$ownerHeaders .= "Return-Path: $fromAddress\r\n";
$ownerHeaders .= "Organization: N13\r\n";
$ownerHeaders .= "X-Mailer: N13 Kontaktformular\r\n";


// ══════════════════════════════════════════════════════════
// 2) CONFIRMATION TO SENDER — Thank you email
// ══════════════════════════════════════════════════════════
$confirmContent = '';

// Greeting
$confirmContent .= <<<HTML
  <tr>
    <td style="padding: 0 40px 24px 40px;">
      <p style="margin:0; font-size:16px; color:{$text}; line-height:1.7;">
        Hallo {$safeName},<br><br>
        vielen Dank für deine Nachricht! Wir haben sie erhalten und melden uns so schnell wie möglich bei dir.
      </p>
    </td>
  </tr>
HTML;

// Show their message back
$confirmContent .= <<<HTML
  <tr>
    <td style="padding: 0 40px 30px 40px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding: 20px 24px; background-color:{$bg}; border-left: 3px solid {$accent};">
            <p style="margin:0 0 4px 0; font-size:10px; font-weight:700; color:{$accent}; text-transform:uppercase; letter-spacing:2px;">Deine Nachricht</p>
            <p style="margin:0; font-size:15px; color:{$textSec}; line-height:1.7;">{$safeMessage}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
HTML;

// Closing
$confirmContent .= <<<HTML
  <tr>
    <td style="padding: 0 40px 36px 40px;">
      <p style="margin:0; font-size:14px; color:{$textMuted}; line-height:1.6;">
        Liebe Grüße,<br>
        <strong style="color:{$text};">Dein N13 Team</strong>
      </p>
    </td>
  </tr>
HTML;

$confirmHtml = emailWrapper('Danke für deine Nachricht', $date, $confirmContent, $accent, $dark, $text, $textMuted, $bg, $border, $surface);

$confirmPlain = "DANKE FÜR DEINE NACHRICHT – N13\n================================\n\n";
$confirmPlain .= "Hallo $name,\n\nvielen Dank für deine Nachricht! Wir haben sie erhalten und melden uns so schnell wie möglich bei dir.\n\n";
$confirmPlain .= "Deine Nachricht:\n$message\n\n";
$confirmPlain .= "Liebe Grüße,\nDein N13 Team\n\n---\nN13 – Mode & Lifestyle | https://n13.niko-endres.de\n";

$confirmMail = buildEmail($confirmPlain, $confirmHtml);
$confirmSubject = '=?UTF-8?B?' . base64_encode("Danke für deine Nachricht – N13") . '?=';

$confirmHeaders = "MIME-Version: 1.0\r\n";
$confirmHeaders .= "Content-Type: multipart/alternative; boundary=\"{$confirmMail['boundary']}\"\r\n";
$confirmHeaders .= "From: $fromName <$fromAddress>\r\n";
$confirmHeaders .= "Reply-To: $fromName <$ownerEmail>\r\n";
$confirmHeaders .= "Sender: $fromAddress\r\n";
$confirmHeaders .= "Return-Path: $fromAddress\r\n";
$confirmHeaders .= "Organization: N13\r\n";
$confirmHeaders .= "X-Mailer: N13 Kontaktformular\r\n";


// ══════════════════════════════════════════════════════════
// SEND BOTH
// ══════════════════════════════════════════════════════════
$ownerSent = mail($ownerEmail, $ownerSubject, $ownerMail['body'], $ownerHeaders);
$confirmSent = mail($email, $confirmSubject, $confirmMail['body'], $confirmHeaders);

if ($ownerSent && $confirmSent) {
  echo json_encode(['status' => 'success', 'message' => 'Nachricht erfolgreich gesendet.']);
} elseif ($ownerSent) {
  echo json_encode(['status' => 'success', 'message' => 'Nachricht gesendet. Bestätigung konnte nicht zugestellt werden.']);
} else {
  $lastError = error_get_last();
  $errorMsg = $lastError ? $lastError['message'] : 'Unbekannter Fehler';
  http_response_code(500);
  echo json_encode(['status' => 'error', 'message' => 'Senden fehlgeschlagen.', 'debug' => $errorMsg]);
}
?>