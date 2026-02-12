import { useState, useEffect } from 'react';
import { Cookie, X, Shield } from 'lucide-react';

interface CookieConsent {
    necessary: boolean;
    analytics: boolean;
    external: boolean; // For Map, Instagram, YouTube etc.
    timestamp: string;
}

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    // Cookie State
    const [preferences, setPreferences] = useState<CookieConsent>({
        necessary: true,
        analytics: false,
        external: false,
        timestamp: ''
    });

    useEffect(() => {
        const stored = localStorage.getItem('n13-cookie-consent');
        if (!stored) {
            // Show banner if no consent stored
            const timer = setTimeout(() => setVisible(true), 1000);
            return () => clearTimeout(timer);
        } else {
            // Load stored preferences
            try {
                setPreferences(JSON.parse(stored));
            } catch (e) {
                console.error("Error parsing cookie consent", e);
            }
        }
    }, []);

    const saveConsent = (settings: CookieConsent) => {
        const finalSettings = {
            ...settings,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('n13-cookie-consent', JSON.stringify(finalSettings));
        setPreferences(finalSettings);
        setVisible(false);

        // Dispatch Custom Event for other components
        window.dispatchEvent(new CustomEvent('n13-consent-update', { detail: finalSettings }));
    };

    const acceptAll = () => {
        saveConsent({
            necessary: true,
            analytics: true,
            external: true,
            timestamp: ''
        });
    };

    const acceptNecessary = () => {
        saveConsent({
            necessary: true,
            analytics: false,
            external: false,
            timestamp: ''
        });
    };

    const saveSelection = () => {
        saveConsent(preferences);
    };

    const togglePreference = (key: keyof CookieConsent) => {
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    if (!visible) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 z-[90] transition-opacity duration-300 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                aria-hidden="true"
            />

            {/* Banner */}
            <div
                className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
                role="dialog"
                aria-modal="true"
                aria-label="Cookie-Einstellungen"
            >
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-border-light p-6 md:p-8 animate-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-bg-warm rounded-full flex items-center justify-center">
                                <Cookie size={20} className="text-accent" />
                            </div>
                            <h2 className="font-heading text-lg font-semibold text-dark">
                                Privatsphäre-Einstellungen
                            </h2>
                        </div>
                    </div>

                    <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                        Wir nutzen Cookies und externe Dienste (Map, Instagram), um Ihnen das bestmögliche Erlebnis zu bieten.
                        Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten.
                    </p>

                    {showDetails && (
                        <div className="mb-6 space-y-3 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                            {/* Necessary */}
                            <div className="p-4 bg-bg-warm rounded-lg border border-border/50">
                                <div className="flex items-center gap-2 mb-1">
                                    <Shield size={14} className="text-success" />
                                    <span className="text-sm font-medium text-dark">Technisch notwendig</span>
                                    <span className="text-xs px-2 py-0.5 bg-success/10 text-success rounded-full ml-auto">
                                        Immer aktiv
                                    </span>
                                </div>
                                <p className="text-xs text-text-muted">
                                    Essenzielle Funktionen wie diese Cookie-Einstellungen.
                                </p>
                            </div>

                            {/* Analytics */}
                            <div className="p-4 bg-white rounded-lg border border-border cursor-pointer hover:border-accent/50 transition-colors" onClick={() => togglePreference('analytics')}>
                                <div className="flex items-center gap-2 mb-1">
                                    <input
                                        type="checkbox"
                                        checked={preferences.analytics}
                                        onChange={() => togglePreference('analytics')}
                                        className="w-4 h-4 text-accent rounded border-gray-300 focus:ring-accent"
                                    />
                                    <span className="text-sm font-medium text-dark">Analyse & Statistik</span>
                                </div>
                                <p className="text-xs text-text-muted pl-6">
                                    Hilft uns zu verstehen, wie die Website genutzt wird (anonymisiert).
                                </p>
                            </div>

                            {/* External Media */}
                            <div className="p-4 bg-white rounded-lg border border-border cursor-pointer hover:border-accent/50 transition-colors" onClick={() => togglePreference('external')}>
                                <div className="flex items-center gap-2 mb-1">
                                    <input
                                        type="checkbox"
                                        checked={preferences.external}
                                        onChange={() => togglePreference('external')}
                                        className="w-4 h-4 text-accent rounded border-gray-300 focus:ring-accent"
                                    />
                                    <span className="text-sm font-medium text-dark">Externe Medien</span>
                                </div>
                                <p className="text-xs text-text-muted pl-6">
                                    Ermöglicht das Laden von Karten (OpenStreetMap) und Instagram-Feeds.
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={acceptAll}
                                className="flex-1 px-5 py-3 text-sm font-bold uppercase tracking-wider text-white bg-dark rounded-sm hover:bg-accent transition-colors duration-300 shadow-lg"
                            >
                                Alle akzeptieren
                            </button>
                            <button
                                onClick={acceptNecessary}
                                className="flex-1 px-5 py-3 text-sm font-medium text-text border border-border/50 bg-bg-warm rounded-sm hover:bg-gray-200 transition-colors duration-300"
                            >
                                Nur Notwendige
                            </button>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="text-xs text-text-secondary hover:text-dark underline underline-offset-2 transition-colors"
                            >
                                {showDetails ? 'Einstellungen verbergen' : 'Einstellungen anpassen'}
                            </button>

                            {showDetails && (
                                <button
                                    onClick={saveSelection}
                                    className="px-4 py-2 text-xs font-bold uppercase text-white bg-accent rounded-sm hover:bg-accent/90 transition-colors"
                                >
                                    Auswahl speichern
                                </button>
                            )}
                        </div>
                    </div>

                    <p className="mt-4 text-[10px] text-text-muted text-center">
                        Links: <a href="/datenschutzerklaerung" className="underline hover:text-dark">Datenschutzerklärung</a> | <a href="/impressum" className="underline hover:text-dark">Impressum</a>
                    </p>
                </div>
            </div>
        </>
    );
}
