import { useState, useEffect } from 'react';

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
        async function fetchInstagramPosts() {
            // If no token, we can't fetch. 
            // In production, you might want a server-side proxy to hide the token,
            // but for client-side Basic Display API, the token is exposed anyway.
            if (!accessToken) {
                setLoading(false);
                return;
            }

            try {
                const fields = 'id,media_type,media_url,permalink,thumbnail_url,caption';
                const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}&limit=${limit}`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch Instagram posts');
                }

                const data = await response.json();
                setPosts(data.data || []);
            } catch (err) {
                console.error('Instagram fetch error:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchInstagramPosts();
    }, [accessToken, limit]);

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-4">
            {loading
                ? Array.from({ length: limit }).map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-200 animate-pulse"></div>
                ))
                : posts.map((post, index) => (
                    <a
                        key={post.id}
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative block aspect-square overflow-hidden bg-bg-warm transition-transform duration-500 hover:z-10 hover:scale-105 border-2 border-white shadow-lg ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                            } hover:rotate-0`}
                        style={{
                            transform: `rotate(${Math.random() * 4 - 2}deg)`
                        }}
                    >
                        <img
                            src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                            alt={post.caption ? post.caption.slice(0, 100) : 'Instagram Post'}
                            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="font-heading text-white text-xl uppercase tracking-widest font-bold border-2 border-white px-4 py-2">
                                View Post
                            </span>
                        </div>
                    </a>
                ))}
        </div>
    );
}
