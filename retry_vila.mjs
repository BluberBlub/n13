import https from 'https';
import fs from 'fs';
import path from 'path';

// The URL had trailing underscores and might have been truncated or malformed consistently.
// Original fail: https://www.n13.store/wp-content/uploads/2025/02/VILA_fall_winter_2025_medium_14103460_VIADDISON_JACKET_JULY_14096999_VIOSTRIA_KNIT_SEP_.jpg
// Let's try to find it or just use a placeholder if it really fails.
// Actually, I'll try to just LIST the uploads directory year/month if possible? No.
// Let's try without the trailing underscore first.
const images = [
    { name: 'brand-vila.jpg', url: 'https://www.n13.store/wp-content/uploads/2025/02/VILA_fall_winter_2025_medium_14103460_VIADDISON_JACKET_JULY_14096999_VIOSTRIA_KNIT_SEP.jpg' }
];

const outDir = 'src/assets/images/brands';
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join(outDir, filename));
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                file.close();
                fs.unlink(path.join(outDir, filename), () => { });
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(path.join(outDir, filename), () => { });
            reject(err);
        });
    });
}

async function main() {
    for (const img of images) {
        try {
            await downloadImage(img.url, img.name);
        } catch (e) {
            console.error(e.message);
        }
    }
}

main();
