import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [consent, setConsent] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Bitte geben Sie Ihren Namen ein.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Bitte geben Sie eine Nachricht ein.';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Die Nachricht muss mindestens 10 Zeichen lang sein.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate() || !consent) return;

        // Send data to PHP script
        try {
            const response = await fetch('/send_mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                setConsent(false);
            } else {
                alert(result.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
            }
        } catch (error) {
            console.error('Error sending mail:', error);
            // Fallback to mailto if fetch fails (e.g. no PHP server)
            const subject = encodeURIComponent(`Kontaktanfrage von ${formData.name}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`
            );
            window.location.href = `mailto:office@n13.store?subject=${subject}&body=${body}`;
            setSubmitted(true);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-12 px-6">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-success" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-dark mb-3">
                    E-Mail-Programm geöffnet!
                </h3>
                <p className="text-text-secondary max-w-md mx-auto">
                    Dein E-Mail-Programm wurde mit der vorbereiteten Nachricht geöffnet.
                    Bitte sende die E-Mail ab, um uns zu kontaktieren.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-2.5 text-sm font-medium text-accent border border-accent hover:bg-accent hover:text-white transition-all duration-300"
                >
                    Neue Nachricht verfassen
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* Name */}
            <div className="relative">
                <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-4 bg-white border-b-2 text-dark placeholder:text-transparent focus:outline-none focus:border-dark transition-all duration-300 peer ${errors.name ? 'border-error' : 'border-border'
                        }`}
                />
                <label
                    htmlFor="contact-name"
                    className="absolute left-4 top-4 text-text-muted text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-dark pointer-events-none"
                >
                    Vollständiger Name
                </label>
                {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-error">
                        {errors.name}
                    </p>
                )}
            </div>

            {/* Email */}
            <div className="relative">
                <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-4 bg-white border-b-2 text-dark placeholder:text-transparent focus:outline-none focus:border-dark transition-all duration-300 peer ${errors.email ? 'border-error' : 'border-border'
                        }`}
                />
                <label
                    htmlFor="contact-email"
                    className="absolute left-4 top-4 text-text-muted text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-dark pointer-events-none"
                >
                    E-Mail-Adresse
                </label>
                {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-error">
                        {errors.email}
                    </p>
                )}
            </div>

            {/* Message */}
            <div className="relative">
                <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    rows={5}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-4 bg-white border-b-2 text-dark placeholder:text-transparent focus:outline-none focus:border-dark transition-all duration-300 resize-y min-h-[120px] peer ${errors.message ? 'border-error' : 'border-border'
                        }`}
                />
                <label
                    htmlFor="contact-message"
                    className="absolute left-4 top-4 text-text-muted text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-dark pointer-events-none"
                >
                    Deine Nachricht...
                </label>
                {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-xs text-error">
                        {errors.message}
                    </p>
                )}
            </div>

            {/* DSGVO Consent */}
            <div className="flex items-start gap-3">
                <input
                    id="contact-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-accent"
                    aria-required="true"
                />
                <label htmlFor="contact-consent" className="text-xs text-text-secondary leading-relaxed cursor-pointer select-none">
                    Ich stimme zu, dass meine Angaben zur Erstellung der E-Mail verwendet werden.
                    Es werden keine Daten auf einem Server gespeichert. Weitere Informationen finden Sie in der{' '}
                    <a
                        href="/datenschutzerklaerung"
                        className="text-accent hover:underline relative z-10"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Datenschutzerklärung
                    </a>.
                </label>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={!consent}
                className="w-full relative overflow-hidden group flex items-center justify-center gap-3 px-8 py-5 bg-white border border-dark text-dark font-bold tracking-[0.2em] uppercase hover:bg-dark hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 shadow-xl"
            >
                <span className="relative z-10 flex items-center gap-2">
                    <Send size={16} />
                    Nachricht senden
                </span>
            </button>
        </form>
    );
}
