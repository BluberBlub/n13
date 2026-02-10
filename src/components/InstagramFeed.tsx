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
            <div className="text-center p-8 bg-surface rounded-xl border border-border-light">
                <p className="text-text-secondary mb-4">
                    Folge uns auf Instagram für die neuesten Updates!
                </p>
                <a
                    href="https://www.instagram.com/n13store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-dark transition-colors"
                >
                    @n13store ansehen →
                </a>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {loading
                ? Array.from({ length: limit }).map((_, i) => (
                    <div key={i} className="aspect-square bg-bg-warm animate-pulse rounded-lg"></div>
                ))
                : posts.map((post) => (
                    <a
                        key={post.id}
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block aspect-square overflow-hidden rounded-lg bg-bg-warm"
                    >
                        <img
                            src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                            alt={post.caption ? post.caption.slice(0, 100) : 'Instagram Post'}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </div>
                    </a>
                ))}
        </div>
    );
}
