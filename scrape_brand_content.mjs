import https from 'https';
import fs from 'fs';

const brandUrls = {
    'happy-socks': 'https://www.n13.store/2026/01/27/es-wird-bunt/',
    'meyer-hosen': 'https://www.n13.store/2026/01/27/meyer-hosen/',
    'object': 'https://www.n13.store/2026/01/27/object/',
    'b-young': 'https://www.n13.store/2026/01/27/b-young/',
    'blend': 'https://www.n13.store/2026/01/27/blend/',
    'desoto': 'https://www.n13.store/2025/08/27/desoto-hemden/',
    'lindenmann': 'https://www.n13.store/2025/08/27/lindenmann/',
    'vila': 'https://www.n13.store/2025/08/27/vila/',
    'casual-friday': 'https://www.n13.store/2025/02/13/casual-friday/',
    // Add others if URLs are known or discoverable
};

const results = {};
let completed = 0;
const urls = Object.entries(brandUrls);

if (urls.length === 0) {
    console.log('No URLs to scrape.');
}

urls.forEach(([slug, url]) => {
    https.get(url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            // Very basic text extraction
            // Finding the main content div or article would be better, but regex for now
            // Looking for paragraphs inside entry-content or similar

            // This is a rough heuristic to get the body text
            const contentMatch = data.match(/<div class="entry-content">([\s\S]*?)<\/div>/);
            if (contentMatch) {
                let text = contentMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
                results[slug] = text;
            } else {
                results[slug] = 'Content not found';
            }

            completed++;
            if (completed === urls.length) {
                console.log(JSON.stringify(results, null, 2));
            }
        });
    }).on('error', (e) => {
        console.error(`Error fetching ${slug}: ${e.message}`);
        completed++;
        if (completed === urls.length) {
            console.log(JSON.stringify(results, null, 2));
        }
    });
});
