<?php
header('Content-Type: application/json');

// Allow CORS if needed (for development mostly, but safe to allow from same origin)
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Bitte füllen Sie alle Felder aus."]);
        exit;
    }

    $name = strip_tags(trim($data['name']));
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($data['message'])); // Simple stripping, maybe allow some tags? No, safer to strip.

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Ungültige E-Mail-Adresse."]);
        exit;
    }

    // Email Configuration
    $to = "office@n13.store"; // Replace with actual recipient
    $subject = "Neue Kontaktanfrage von $name via N13 Website";

    // HTML Email Template
    $email_content = "
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
            .header { background-color: #ffffff; padding: 30px; text-align: center; border-bottom: 2px solid #f1f1f1; }
            .header img { max-width: 150px; height: auto; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
            .value { font-size: 16px; margin-top: 5px; color: #333; }
            .footer { background-color: #f1f1f1; padding: 20px; text-align: center; font-size: 12px; color: #888; }
            .footer a { color: #888; text-decoration: none; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <img src='https://www.n13.store/logo-n13.png' alt='N13 Logo' style='max-width: 150px;'>
            </div>
            <div class='content'>
                <h2 style='margin-top: 0; color: #1a1a1a;'>Neue Nachricht</h2>
                
                <div class='field'>
                    <div class='label'>Name</div>
                    <div class='value'>$name</div>
                </div>
                
                <div class='field'>
                    <div class='label'>E-Mail</div>
                    <div class='value'><a href='mailto:$email'>$email</a></div>
                </div>
                
                <div class='field'>
                    <div class='label'>Nachricht</div>
                    <div class='value' style='white-space: pre-wrap;'>$message</div>
                </div>
            </div>
            <div class='footer'>
                <p>&copy; " . date("Y") . " N13. Alle Rechte vorbehalten.</p>
                <p>Diese E-Mail wurde über das Kontaktformular auf <a href='https://www.n13.store'>www.n13.store</a> gesendet.</p>
                <p><a href='https://www.n13.store/datenschutzerklaerung'>Datenschutzerklärung</a> | <a href='https://www.n13.store/impressum'>Impressum</a></p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: N13 Website <noreply@n13.store>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Send
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Nachricht erfolgreich gesendet."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Beim Senden der Nachricht ist ein Fehler aufgetreten."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed"]);
}
?>