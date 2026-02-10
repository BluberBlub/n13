import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { clsx } from 'clsx';

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Über uns', href: '#about' },
    { label: 'Unsere Brands', href: '#brands' },
    { label: 'Kontakt', href: '#contact' },
];

interface HeaderProps {
    currentPath?: string;
}

export default function Header({ currentPath = '/' }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Helper to check active state
    const isActive = (href: string) => {
        // If we represent a homepage section and we are currently "spying" it
        if (currentPath === '/' && activeSection === href) return true;

        // Standard checks
        if (href === '/' && currentPath === '/' && activeSection === '/') return true;
        if (href !== '/' && currentPath.startsWith(href)) return true;

        return false;
    };

    const [activeSection, setActiveSection] = useState(currentPath);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // ScrollSpy logic only on homepage
            if (currentPath === '/') {
                const sections = [
                    { id: 'home', href: '#home' },
                    { id: 'about', href: '#about' },
                    { id: 'brands', href: '#brands' },
                    { id: 'contact', href: '#contact' }
                ];

                // Find the section that occupies the most viewport or is at the top
                let current = '/';

                for (const section of sections) {
                    const element = document.getElementById(section.id);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const viewportHeight = window.innerHeight;
                        // Check if the section crosses the middle of the viewport
                        if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
                            current = section.href;
                        }
                    }
                }
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
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
                    ? 'bg-white/95 backdrop-blur-md shadow-sm'
                    : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
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
                                "h-12 w-auto transition-all duration-300",
                                scrolled ? "brightness-0" : "brightness-0 invert"
                            )}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                        <span className={clsx(
                            'hidden font-heading text-3xl font-bold tracking-wider transition-colors duration-300 drop-shadow-md',
                            scrolled ? 'text-dark' : 'text-white'
                        )}>
                            N13
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    'text-sm font-bold tracking-widest uppercase transition-colors duration-300 hover:text-accent border-b-2',
                                    isActive(item.href) ? 'border-accent text-accent' : 'border-transparent',
                                    !isActive(item.href) && (scrolled ? 'text-dark' : 'text-white/90')
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
                                scrolled ? 'text-dark' : 'text-white/90'
                            )}
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={clsx(
                            'md:hidden p-2 transition-colors duration-300',
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
                    'fixed inset-0 bg-dark/95 backdrop-blur-lg transition-all duration-500 md:hidden flex flex-col items-center justify-center',
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
                                isActive(item.href) ? 'text-accent' : 'text-white'
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
                        className="text-white hover:text-accent transition-colors duration-300 mt-4"
                        aria-label="Instagram"
                    >
                        <Instagram size={28} />
                    </a>
                </nav>
            </div>
        </header>
    );
}
