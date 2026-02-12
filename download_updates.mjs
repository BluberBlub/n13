import https from 'https';
import fs from 'fs';
import path from 'path';

const images = [
    { name: 'brand-kknekki-update.webp', url: 'https://www.n13.store/wp-content/uploads/2023/08/WhatsApp_Image_2022-07-14_at_22.32.11_900x.webp' },
    { name: 'brand-hopery-update.jpg', url: 'https://www.n13.store/wp-content/uploads/2022/03/P2A0652_angestreckt_1920x1920.jpg' }
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
