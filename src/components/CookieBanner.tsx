import { useState, useEffect } from 'react';
import { Cookie, X, Shield } from 'lucide-react';

interface CookieConsent {
    necessary: boolean;
    analytics: boolean;
    timestamp: string;
}

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('n13-cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        const consent: CookieConsent = {
            necessary: true,
            analytics: true,
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem('n13-cookie-consent', JSON.stringify(consent));
        setVisible(false);
    };

    const acceptNecessary = () => {
        const consent: CookieConsent = {
            necessary: true,
            analytics: false,
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem('n13-cookie-consent', JSON.stringify(consent));
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
            role="dialog"
            aria-label="Cookie-Einstellungen"
        >
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-border-light p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-bg-warm rounded-full flex items-center justify-center">
                            <Cookie size={20} className="text-accent" />
                        </div>
                        <h2 className="font-heading text-lg font-semibold text-dark">
                            Cookie-Einstellungen
                        </h2>
                    </div>
                </div>

                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    Wir verwenden Cookies, um Ihnen das bestmögliche Erlebnis auf unserer Website zu bieten.
                    Technisch notwendige Cookies sind für die Grundfunktionen der Website erforderlich und
                    können nicht deaktiviert werden.
                </p>

                {showDetails && (
                    <div className="mb-6 space-y-3">
                        <div className="p-4 bg-bg-warm rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                                <Shield size={14} className="text-success" />
                                <span className="text-sm font-medium text-dark">Technisch notwendig</span>
                                <span className="text-xs px-2 py-0.5 bg-success/10 text-success rounded-full ml-auto">
                                    Immer aktiv
                                </span>
                            </div>
                            <p className="text-xs text-text-muted">
                                Diese Cookies sind für die Grundfunktionen der Website erforderlich (z.B. Cookie-Einstellungen speichern).
                            </p>
                        </div>
                        <div className="p-4 bg-bg-warm rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                                <Shield size={14} className="text-text-muted" />
                                <span className="text-sm font-medium text-dark">Analyse & Statistiken</span>
                                <span className="text-xs px-2 py-0.5 bg-border rounded-full ml-auto">
                                    Optional
                                </span>
                            </div>
                            <p className="text-xs text-text-muted">
                                Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen.
                            </p>
                        </div>
                    </div>
                )}

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="text-sm text-text-secondary hover:text-text underline underline-offset-2 transition-colors"
                    >
                        {showDetails ? 'Details ausblenden' : 'Details anzeigen'}
                    </button>
                    <div className="flex flex-col sm:flex-row gap-3 sm:ml-auto">
                        <button
                            onClick={acceptNecessary}
                            className="px-5 py-2.5 text-sm font-medium text-text border border-border rounded-lg hover:bg-bg-warm transition-colors duration-300"
                        >
                            Nur notwendige
                        </button>
                        <button
                            onClick={acceptAll}
                            className="px-5 py-2.5 text-sm font-medium text-white bg-dark rounded-lg hover:bg-dark-soft transition-colors duration-300"
                        >
                            Alle akzeptieren
                        </button>
                    </div>
                </div>

                <p className="mt-4 text-xs text-text-muted">
                    Weitere Informationen finden Sie in unserer{' '}
                    <a href="/datenschutzerklaerung" className="underline hover:text-accent transition-colors">
                        Datenschutzerklärung
                    </a>.
                </p>
            </div>
        </div>
    );
}
