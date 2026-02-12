import https from 'https';
import fs from 'fs';

const brands = [
    { url: '/2026/01/27/es-wird-bunt/', name: 'Happy Socks' },
    { url: '/2026/01/27/meyer-hosen/', name: 'Meyer Hosen' },
    { url: '/2026/01/27/object/', name: 'Object' },
    { url: '/2025/02/12/mags/', name: 'MAGS' },
    { url: '/2025/02/11/a-beautiful-story/', name: 'A Beautiful Story' },
    { url: '/2024/09/24/kunstwerkstatt/', name: 'Kunstwerkstatt' },
    // { url: '/2024/09/24/taschen-geldbeutel-mehr/', name: 'Taschen' }, // Skipping generic category for now unless requested
    { url: '/2024/09/24/duft-kerzen/', name: 'Cereria Molla' },
    { url: '/2024/08/01/servietten/', name: 'PPD' },
    { url: '/2024/04/24/rohstoff-bio-saefte/', name: 'Rohstoff' },
    { url: '/2024/04/15/kknekki/', name: 'KKNEKKI' },
    { url: '/2024/02/07/losboxen/', name: 'Herzmeister' },
    { url: '/2024/01/16/ammann/', name: 'Ammann' },
    { url: '/2023/01/23/kruut/', name: 'Kruut' },
    { url: '/2023/01/15/hopery/', name: 'Hopery' },
    { url: '/2022/03/02/waeschepflege/', name: 'Lavepur' },
    { url: '/2025/02/11/b-young/', name: 'B.Young' }, // Guessed URL, usually follows pattern. Checking live_brands.json.. wait B.Young wasn't in live_brands.json!
    { url: '/2025/02/11/blend/', name: 'Blend' }, // Checking...
    { url: '/2025/02/11/desoto/', name: 'Desoto' },
    { url: '/2025/02/11/lindenmann/', name: 'Lindenmann' },
    { url: '/2025/02/11/vila/', name: 'Vila' },
    { url: '/2025/02/11/casual-friday/', name: 'Casual Friday' }
];

// Re-check live_brands.json for the missing ones.
// detailed check needed.
// Actually, let's fetch modewelt page 1 again to get the EXACT URLs for B.Young, Blend, Desoto, Lindenmann, Vila, Casual Friday.
// They might be on page 1 or 2.

const baseUrl = 'https://www.n13.store';

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(baseUrl + url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        }).on('error', reject);
    });
}

function extractContent(html) {
    // Attempt to find content. 
    // If it is a standard WP theme, look for .entry-content or article
    let content = '';

    // Simple heuristic: Text between </h1> and <div class="sharedaddy... or footer
    // Or look for <div class="entry-content">
    const entryContentMatch = /class="entry-content"[^>]*>([\s\S]*?)<div class="sharedaddy/i.exec(html) ||
        /class="entry-content"[^>]*>([\s\S]*?)<\/article>/i.exec(html) ||
        /class="entry-content"[^>]*>([\s\S]*?)<footer/i.exec(html);

    if (entryContentMatch) {
        content = entryContentMatch[1];
    } else {
        // Fallback: try to find the body text generally
        content = html;
    }

    // Clean tags
    const text = content.replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    // Extract First Image in content
    const imgMatch = /<img[^>]+src="([^">]+)"/i.exec(content);
    const image = imgMatch ? imgMatch[1] : null;

    return { text, image };
}

async function main() {
    // Update the list with the missing brands if possible
    // Fetching page 1 again to get the recent ones which I might have missed in previous limited output
    const page1 = await fetchUrl('/modewelt/');
    const postMockRegex = /href="https:\/\/www\.n13\.store\/(\d{4}\/\d{2}\/\d{2}\/[^"]+)"/g;
    let match;
    const additionalLinks = new Set();
    while ((match = postMockRegex.exec(page1)) !== null) {
        additionalLinks.add('/' + match[1]);
    }

    // Merge found links
    const foundUrls = Array.from(additionalLinks);
    // console.log('Found URLs:', foundUrls);

    // Filter brands list to include only those I have URLs for, OR try to find them in the scraped list
    // Basically, I'll just scrape ALL found URLs from page 1 + the known ones from my manual list.

    const allUrlsToScrape = new Set([...brands.map(b => b.url), ...foundUrls]);

    const results = [];

    for (const url of allUrlsToScrape) {
        // Skip some known non-brands if necessary
        if (url.includes('waeschepflege') && !brands.find(b => b.url.includes('waeschepflege'))) { /* keep it */ }

        console.log(`Scraping ${url}...`);
        try {
            const html = await fetchUrl(url);
            const { text, image } = extractContent(html);

            // Try to extract title
            const titleMatch = /<h1[^>]*>([^<]+)<\/h1>/i.exec(html);
            const title = titleMatch ? titleMatch[1].trim() : 'Unknown';

            results.push({
                url,
                title,
                text,
                image
            });
        } catch (e) {
            console.error(`Error scraping ${url}:`, e);
        }
    }

    fs.writeFileSync('refined_brands.json', JSON.stringify(results, null, 2));
    console.log('Done.');
}

main();
