import type { APIRoute } from 'astro';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(input: string): string {
    return input.replace(/[<>]/g, '').trim();
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = (await request.json()) as ContactFormData;

        // Validate
        if (!data.name?.trim()) {
            return new Response(JSON.stringify({ error: 'Name ist erforderlich.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (!data.email?.trim() || !validateEmail(data.email)) {
            return new Response(
                JSON.stringify({ error: 'Gültige E-Mail-Adresse ist erforderlich.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        if (!data.message?.trim() || data.message.trim().length < 10) {
            return new Response(
                JSON.stringify({ error: 'Nachricht muss mindestens 10 Zeichen lang sein.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const name = sanitize(data.name);
        const email = sanitize(data.email);
        const message = sanitize(data.message);

        // Try to send via SMTP if credentials are available
        const smtpHost = import.meta.env.SMTP_HOST;
        const smtpPort = import.meta.env.SMTP_PORT;
        const smtpUser = import.meta.env.SMTP_USER;
        const smtpPass = import.meta.env.SMTP_PASS;
        const smtpFrom = import.meta.env.SMTP_FROM || 'office@n13.store';
        const smtpTo = import.meta.env.SMTP_TO || 'office@n13.store';

        if (smtpHost && smtpUser && smtpPass) {
            const nodemailer = await import('nodemailer');
            const transporter = nodemailer.default.createTransport({
                host: smtpHost,
                port: parseInt(smtpPort || '587'),
                secure: false,
                auth: {
                    user: smtpUser,
                    pass: smtpPass,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });

            await transporter.sendMail({
                from: `"N13 Kontaktformular" <${smtpFrom}>`,
                to: smtpTo,
                replyTo: email,
                subject: `Neue Kontaktanfrage von ${name}`,
                text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
                html: `
          <h2>Neue Kontaktanfrage über n13.store</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
            });
        } else {
            // Log to console if SMTP is not configured
            console.log('=== Neue Kontaktanfrage (SMTP nicht konfiguriert) ===');
            console.log(`Name: ${name}`);
            console.log(`E-Mail: ${email}`);
            console.log(`Nachricht: ${message}`);
            console.log('===================================================');
        }

        return new Response(
            JSON.stringify({ success: true, message: 'Nachricht erfolgreich gesendet.' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return new Response(
            JSON.stringify({ error: 'Interner Serverfehler. Bitte versuchen Sie es später erneut.' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
