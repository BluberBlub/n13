import https from 'https';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const brands = [
    { url: '/2024/08/01/servietten/', name: 'ppd' },
    { url: '/2024/02/07/losboxen/', name: 'herzmeister' },
    { url: '/2022/03/02/waeschepflege/', name: 'lavepur' }
];

const baseUrl = 'https://www.n13.store';
const outDir = 'temp_new_brands';

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

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

function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join(outDir, filename));
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filename, () => { });
            reject(err);
        });
    });
}

async function main() {
    for (const brand of brands) {
        console.log(`Processing ${brand.name}...`);
        const html = await fetchUrl(brand.url);

        // Regex to find images in content. 
        // Exclude common sidebar/footer images if possible by name, 
        // but easier to just download all unique large jpgs and filter manually.
        const imgRegex = /src="([^"]+\.(jpg|jpeg|png))"/gi;
        let match;
        const images = new Set();

        while ((match = imgRegex.exec(html)) !== null) {
            const imgUrl = match[1];
            // Filter out obvious thumbnails or layout elements
            if (!imgUrl.includes('160x160') && !imgUrl.includes('100x100') && !imgUrl.includes('logo')) {
                images.add(imgUrl);
            }
        }

        let i = 0;
        for (const imgUrl of images) {
            if (i > 3) break; // Limit to first 3 candidates
            const ext = path.extname(imgUrl);
            const filename = `${brand.name}-${i}${ext}`;
            console.log(`Downloading ${imgUrl} to ${filename}`);
            await downloadImage(imgUrl, filename);
            i++;
        }
    }
}

main();
