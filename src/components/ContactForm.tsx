import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

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

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<FormStatus>('idle');
    const [consent, setConsent] = useState(false);

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

        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setConsent(false);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
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

    if (status === 'success') {
        return (
            <div className="text-center py-12 px-6">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-success" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-dark mb-3">
                    Nachricht gesendet!
                </h3>
                <p className="text-text-secondary max-w-md mx-auto">
                    Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-6 py-2.5 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
                >
                    Neue Nachricht senden
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-error/5 border border-error/20 rounded-lg">
                    <AlertCircle size={20} className="text-error shrink-0" />
                    <p className="text-sm text-error">
                        Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
                    </p>
                </div>
            )}

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
                    placeholder="Ihr vollständiger Name"
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
                    placeholder="ihre@email.de"
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
                    placeholder="Ihre Nachricht an uns..."
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
                    Ich stimme zu, dass meine Daten zur Bearbeitung meines Anliegens verwendet werden.
                    Weitere Informationen finden Sie in der{' '}
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
                disabled={status === 'submitting' || !consent}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-dark text-white font-medium hover:bg-dark-soft disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
                {status === 'submitting' ? (
                    <>
                        <Loader2 size={18} className="animate-spin" />
                        Wird gesendet...
                    </>
                ) : (
                    <>
                        <Send size={18} />
                        Nachricht senden
                    </>
                )}
            </button>
        </form>
    );
}
