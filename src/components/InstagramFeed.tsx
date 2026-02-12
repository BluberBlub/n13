import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

interface InstagramPost {
    id: string;
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    media_url: string;
    permalink: string;
    thumbnail_url?: string;
    caption?: string;
}

interface InstagramFeedProps {
    accessToken?: string;
}

export default function InstagramFeed({ accessToken }: InstagramFeedProps) {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [consent, setConsent] = useState(false);

    useEffect(() => {
        const storedConsent = localStorage.getItem('n13-instagram-consent');
        if (storedConsent === 'true') {
            setConsent(true);
        }
    }, []);

    // Number of posts to show: 4 on mobile (2x2), 8 on desktop (4x2)
    // We fetch 8 to cover both cases.
    const DISPLAY_COUNT_DESKTOP = 8;
    const DISPLAY_COUNT_MOBILE = 4;

    useEffect(() => {
        if (!consent) return;

        async function fetchPosts() {
            try {
                const token = import.meta.env.PUBLIC_INSTAGRAM_TOKEN;
                if (!token) throw new Error('No token');

                const response = await fetch(
                    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}`
                );

                if (!response.ok) throw new Error('Fetch failed');

                const data = await response.json();
                if (data.data) {
                    setPosts(data.data.slice(0, DISPLAY_COUNT_DESKTOP));
                } else {
                    throw new Error('No data');
                }
            } catch (err) {
                console.warn('Instagram fetch failed, using fallback:', err);
                // Fallback Mock Data
                setPosts([
                    { id: '1', media_url: '/images/brands/object.jpg', permalink: 'https://instagram.com', caption: 'New Collection', media_type: 'IMAGE' },
                    { id: '2', media_url: '/images/brands/happy-socks.jpg', permalink: 'https://instagram.com', caption: 'Socks Love', media_type: 'IMAGE' },
                    { id: '3', media_url: '/images/brands/vila.jpg', permalink: 'https://instagram.com', caption: 'Summer Vibes', media_type: 'IMAGE' },
                    { id: '4', media_url: '/images/brands/blend.jpg', permalink: 'https://instagram.com', caption: 'Denim Days', media_type: 'IMAGE' },
                    { id: '5', media_url: '/images/brands/b-young.jpg', permalink: 'https://instagram.com', caption: 'Style Inspo', media_type: 'IMAGE' },
                    { id: '6', media_url: '/images/hero-bg.jpg', permalink: 'https://instagram.com', caption: 'Store Atmosphere', media_type: 'IMAGE' },
                    { id: '7', media_url: '/images/brands/desoto.jpg', permalink: 'https://instagram.com', caption: 'Details', media_type: 'IMAGE' },
                    { id: '8', media_url: '/images/brands/mags.jpg', permalink: 'https://instagram.com', caption: 'Fashion', media_type: 'IMAGE' },
                ] as InstagramPost[]);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, [consent]);

    const handleConsent = () => {
        setConsent(true);
        localStorage.setItem('n13-instagram-consent', 'true');
    };

    if (!consent) {
        return (
            <div className="py-20 bg-stone-50 text-center">
                <div className="max-w-md mx-auto p-8 bg-white border border-border shadow-sm rounded-lg">
                    <Instagram size={40} className="mx-auto mb-4 text-dark" />
                    <h3 className="font-heading text-xl text-dark mb-3">Instagram Inhalte laden?</h3>
                    <p className="text-text-secondary text-sm mb-6">
                        Hier wird Inhalt von Instagram geladen. Dabei werden personenbezogene Daten (z.B. IP-Adresse) an Meta übermittelt.
                    </p>
                    <button
                        onClick={handleConsent}
                        className="px-6 py-3 bg-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-md"
                    >
                        Inhalte anzeigen
                    </button>
                </div>
            </div>
        );
    }

    // Fallback content if no posts (error or no token) and loading is done
    if (!loading && (error || posts.length === 0)) {
        return (
            <div className="text-center p-12 border-2 border-dashed border-dark/20 relative group overflow-hidden">
                <div className="relative z-10">
                    <p className="font-heading text-2xl text-dark mb-4 uppercase">
                        Folge dem Vibe
                    </p>
                    <a
                        href="https://www.instagram.com/n13store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-dark text-white font-bold tracking-widest uppercase hover:bg-accent transition-colors"
                    >
                        @n13store
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12 md:py-20 relative min-h-[400px]">
            {/* Content Grid - Always rendered to prevent CLS, specific classes control visibility */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 transition-opacity duration-500`}>
                {/* On Mobile: Show first 4. On Desktop: Show all 8. */}
                {(loading ? Array.from({ length: 8 }) : posts).map((post: any, index) => {
                    // Hide items 5-8 on mobile to keep 2 rows (2x2)
                    const isMobileHidden = index >= 4 ? "hidden md:block" : "";

                    if (loading) {
                        return (
                            <div key={index} className={`aspect-square bg-gray-200 animate-pulse ${isMobileHidden} relative`}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                    <Instagram size={24} className="text-gray-400" />
                                </div>
                            </div>
                        );
                    }

                    return (
                        <a
                            key={post.id}
                            href={post.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative aspect-square overflow-hidden bg-gray-100 block ${isMobileHidden}`}
                        >
                            <img
                                src={post.media_type === 'VIDEO' ? post.thumbnail_url || post.media_url : post.media_url}
                                alt={post.caption?.slice(0, 100) || 'Instagram Post'}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-110" size={32} />
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* View All Link */}
            {!loading && (
                <div className="mt-12 text-center">
                    <a
                        href="https://www.instagram.com/n13store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-dark border border-dark/30 px-8 py-4 uppercase tracking-widest text-sm hover:bg-dark hover:text-white transition-all duration-300"
                    >
                        <Instagram size={20} />
                        Alle Beiträge auf Instagram ansehen
                    </a>
                </div>
            )}
        </div>
    );
}
