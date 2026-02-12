import https from 'https';
import fs from 'fs';
import path from 'path';

const images = [
    { name: 'brand-taschen.jpg', url: 'https://www.n13.store/wp-content/uploads/2024/04/Screenshot-2024-09-24-115624.jpg' },
    { name: 'brand-kunstwerkstatt.jpg', url: 'https://www.n13.store/wp-content/uploads/2024/07/20240118_102144.jpg' },
    { name: 'brand-ppd.jpg', url: 'https://www.n13.store/wp-content/uploads/2024/08/1332833_gr_1920x1920.jpg' },
    { name: 'brand-herzmeister.jpg', url: 'https://www.n13.store/wp-content/uploads/2024/02/Screenshot-2024-02-07-152746.jpg' },
    { name: 'brand-kknekki.webp', url: 'https://www.n13.store/wp-content/uploads/2023/08/WhatsApp_Image_2022-07-14_at_22.32.11_900x.webp' },
    { name: 'brand-cereria-molla.jpg', url: 'https://www.n13.store/wp-content/uploads/2024/09/Screenshot-2024-09-24-115235.jpg' },
    { name: 'brand-ammann.jpg', url: 'https://www.n13.store/wp-content/uploads/2020/08/13826.jpg' },
    { name: 'brand-kruut.jpg', url: 'https://www.n13.store/wp-content/uploads/2022/03/pexels-alleksana-4113898.jpg' },
    { name: 'brand-hopery.jpg', url: 'https://www.n13.store/wp-content/uploads/2022/03/P2A0652_angestreckt_1920x1920.jpg' },
    { name: 'brand-waeschepflege.jpg', url: 'https://www.n13.store/wp-content/uploads/2020/08/pexels-gratisography-2371.jpg' }
];

const outDir = 'src/assets/images/brands';
// Ensure dir exists
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
