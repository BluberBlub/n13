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
    limit?: number;
}

export default function InstagramFeed({ accessToken, limit = 4 }: InstagramFeedProps) {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
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
                    setPosts(data.data.slice(0, 9));
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
                    { id: '6', media_url: '/images/hero-bg.jpg', permalink: 'https://instagram.com', caption: 'Store Atmosphere', media_type: 'IMAGE' }
                ] as InstagramPost[]);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    // Fallback content if no posts (error or no token)
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
        <div className="py-12 md:py-20">
            {loading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
                    {Array.from({ length: limit }).map((_, i) => (
                        <div key={i} className="aspect-square bg-gray-200 animate-pulse"></div>
                    ))}
                </div>
            ) : (
                <>
                    {/* Posts Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
                        {posts.map((post) => (
                            <a
                                key={post.id}
                                href={post.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative aspect-square overflow-hidden bg-gray-100 block"
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
                        ))}
                    </div>

                    {/* View All Link */}
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
                </>
            )}
        </div>
    );
}
