import https from 'https';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://www.n13.store';
const startUrl = '/modewelt/';
const outputFile = 'live_brands.json';

// Helper to fetch URL content
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

// Helper to scrape unique links from a listing page
function scrapeLinks(html) {
    // Regex to find links to brand posts (presumed to be under /YYYY/MM/DD/slug/ or similar structure from previous observations)
    // Actually, looking at previous output, links looked like: https://www.n13.store/2025/08/27/desoto-hemden/
    // We want to capture all links that look like blog posts inside the main content area.
    // A simple approach is to look for <a href="..."> that are NOT category/tag links.
    // However, the "Latest posts" section might pollute this.
    // Better: Look for article titles or "read more" links if standard WordPress.

    // Let's try to find all links that match the pattern /YYYY/MM/DD/
    const postMockRegex = /href="https:\/\/www\.n13\.store\/(\d{4}\/\d{2}\/\d{2}\/[^"]+)"/g;
    const links = new Set();
    let match;
    while ((match = postMockRegex.exec(html)) !== null) {
        links.add('/' + match[1]);
    }
    return Array.from(links);
}

// Helper to scrape content from a brand page
function scrapeBrandPage(html) {
    // Extract Title
    const titleMatch = /<h1[^>]*>([^<]+)<\/h1>/i.exec(html);
    const title = titleMatch ? titleMatch[1].trim() : 'Unknown';

    // Extract Description
    // We want the text content of the article.
    // Usually inside <div class="entry-content"> or similar.
    // Since we don't have a DOM parser, we'll strip tags.
    // But first, let's try to isolate the content area.
    // Based on previous `read_url_content`, the content is reasonably structured.
    // We'll capture paragraphs <p>...</p> inside the main body.

    // Simplification: Just capture the whole raw HTML of the body for manual review if needed, 
    // or try to extract the first few paragraphs.

    // Extract Image
    // Look for the main featured image or the first large image in the post.
    // <img ... src="..." ...>
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let imgMatch;
    let highResImage = null;

    // We want the largest image, often the first one in the content or one with "large" in the name/class?
    // Let's just grab all images and I'll pick the best one in the script output.
    const images = [];
    while ((imgMatch = imgRegex.exec(html)) !== null) {
        if (!imgMatch[1].includes('gravatar') && !imgMatch[1].includes('logo') && !imgMatch[1].includes('icon')) {
            images.push(imgMatch[1]);
        }
    }

    // Extract Categories (if easy)
    // Often in rel="category tag"

    return {
        title,
        images: images.slice(0, 3), // Top 3 images
        // We will output raw content snippet to help identify description
        contentSnippet: html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 1000)
    };
}

async function main() {
    console.log('Fetching main page...');
    const page1Html = await fetchUrl(startUrl);
    let allLinks = new Set(scrapeLinks(page1Html));

    // Try page 2 and 3 just in case
    try {
        console.log('Fetching page 2...');
        const page2Html = await fetchUrl('/page/2/');
        scrapeLinks(page2Html).forEach(l => allLinks.add(l));

        console.log('Fetching page 3...');
        const page3Html = await fetchUrl('/page/3/');
        scrapeLinks(page3Html).forEach(l => allLinks.add(l));
    } catch (e) {
        // Ignore if page doesn't exist
    }

    console.log(`Found ${allLinks.size} potential brand pages.`);

    const brandsData = [];

    for (const link of allLinks) {
        console.log(`Processing ${link}...`);
        try {
            const html = await fetchUrl(link);
            const data = scrapeBrandPage(html);
            brandsData.push({
                url: link,
                ...data
            });
        } catch (e) {
            console.error(`Failed to fetch ${link}: ${e.message}`);
        }
    }

    fs.writeFileSync(outputFile, JSON.stringify(brandsData, null, 2));
    console.log(`Saved data to ${outputFile}`);
}

main();
