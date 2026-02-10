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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate() || !consent) return;

        // DSGVO-konform: mailto-Link wird geöffnet, keine Daten werden an einen Server gesendet
        const subject = encodeURIComponent(`Kontaktanfrage von ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`
        );
        window.location.href = `mailto:office@n13.store?subject=${subject}&body=${body}`;

        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setConsent(false);
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
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Name */}
            <div>
                <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-dark mb-2"
                >
                    Name <span className="text-error">*</span>
                </label>
                <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dein vollständiger Name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3 bg-bg border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-300 ${errors.name ? 'border-error' : 'border-border'
                        }`}
                />
                {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-error">
                        {errors.name}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-dark mb-2"
                >
                    E-Mail <span className="text-error">*</span>
                </label>
                <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="deine@email.de"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 bg-bg border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-300 ${errors.email ? 'border-error' : 'border-border'
                        }`}
                />
                {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-error">
                        {errors.email}
                    </p>
                )}
            </div>

            {/* Message */}
            <div>
                <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-dark mb-2"
                >
                    Nachricht <span className="text-error">*</span>
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Deine Nachricht an uns..."
                    rows={5}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 bg-bg border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-300 resize-y ${errors.message ? 'border-error' : 'border-border'
                        }`}
                />
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
                <label htmlFor="contact-consent" className="text-xs text-text-secondary leading-relaxed">
                    Ich stimme zu, dass meine Angaben zur Erstellung der E-Mail verwendet werden.
                    Es werden keine Daten auf einem Server gespeichert. Weitere Informationen finden Sie in der{' '}
                    <a
                        href="/datenschutzerklaerung"
                        className="text-accent hover:underline"
                        target="_blank"
                    >
                        Datenschutzerklärung
                    </a>.
                </label>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={!consent}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-dark text-white font-medium hover:bg-dark-soft disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
                <Send size={18} />
                Nachricht senden
            </button>
        </form>
    );
}
