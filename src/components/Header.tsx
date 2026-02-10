import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { clsx } from 'clsx';

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: 'Home', href: '/#home' },
    { label: 'Über uns', href: '/#about' },
    { label: 'Unsere Brands', href: '/#brands' },
    { label: 'Kontakt', href: '/#contact' },
];

interface HeaderProps {
    currentPath?: string;
}

export default function Header({ currentPath = '/' }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [activeSection, setActiveSection] = useState<string>('/#home');

    const isActive = (href: string) => {
        if (currentPath === '/') {
            return activeSection === href;
        }
        return false;
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            if (currentPath === '/') {
                const sections = [
                    { id: 'home', href: '/#home' },
                    { id: 'about', href: '/#about' },
                    { id: 'brands', href: '/#brands' },
                    { id: 'contact', href: '/#contact' }
                ];

                let current = '/#home';
                for (const section of sections) {
                    const element = document.getElementById(section.id);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const viewportHeight = window.innerHeight;
                        if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
                            current = section.href;
                        }
                    }
                }
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentPath]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                scrolled
                    ? 'bg-white shadow-sm'
                    : 'bg-gradient-to-b from-dark/70 via-dark/30 to-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="/"
                        className="flex items-center gap-2 group"
                        aria-label="N13 Home"
                    >
                        <img
                            src="/images/logo-n13.png"
                            alt="N13 Logo"
                            className={clsx(
                                "h-16 w-auto transition-all duration-300 filter drop-shadow-md",
                                scrolled ? "brightness-0" : "brightness-0 invert"
                            )}
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    'text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300',
                                    item.href === '/#contact'
                                        ? (scrolled
                                            ? 'border border-dark px-6 py-2 hover:bg-dark hover:text-white text-dark'
                                            : 'border border-white/90 px-6 py-2 hover:bg-white hover:text-dark text-white')
                                        : (
                                            isActive(item.href)
                                                ? (scrolled
                                                    ? 'text-accent border-b-2 border-accent'
                                                    : 'text-white border-b-2 border-accent')
                                                : clsx(
                                                    'border-b-2 border-transparent',
                                                    scrolled
                                                        ? 'text-dark hover:text-accent'
                                                        : 'text-white/95 hover:text-white'
                                                )
                                        )
                                )}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="https://www.instagram.com/n13store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={clsx(
                                'transition-colors duration-300 hover:text-accent',
                                scrolled
                                    ? 'text-dark'
                                    : 'text-white/90'
                            )}
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={clsx(
                            'lg:hidden p-2 transition-colors duration-300',
                            scrolled ? 'text-dark' : 'text-white'
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={clsx(
                    'fixed inset-0 bg-white/95 backdrop-blur-lg transition-all duration-500 lg:hidden flex flex-col items-center justify-center z-40',
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                )}
            >
                <nav className="flex flex-col items-center gap-8" aria-label="Mobile Navigation">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                'text-2xl font-heading font-bold tracking-widest uppercase hover:text-accent transition-colors duration-300',
                                isActive(item.href) ? 'text-accent' : 'text-dark'
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="https://www.instagram.com/n13store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark hover:text-accent transition-colors duration-300 mt-4"
                        aria-label="Instagram"
                    >
                        <Instagram size={28} />
                    </a>
                </nav>
            </div>
        </header >
    );
}
