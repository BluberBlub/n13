import https from 'https';
import fs from 'fs';
import path from 'path';

const images = [
    { name: 'brand-b-young.jpg', url: 'https://www.n13.store/wp-content/uploads/2025/08/byoung_spring_summer_2026_original_BYOUNG_OFFICE_31.03.25_1832.jpg' },
    { name: 'brand-blend.jpg', url: 'https://www.n13.store/wp-content/uploads/2025/08/Blend_spring_summer_2026_original_BLEND_MS26_33290.jpg' },
    { name: 'brand-desoto.jpg', url: 'https://www.n13.store/wp-content/uploads/2023/01/DESOTO_spring_summer_2025_medium_DESOTO_FS25_CASUAL_12_3er_JUMP_FINAL.jpg' },
    { name: 'brand-lindenmann.jpg', url: 'https://www.n13.store/wp-content/uploads/2025/02/LINDENMANN_spring_summer_2025_medium_Lindenmann-Promo-02.jpg' },
    { name: 'brand-vila.jpg', url: 'https://www.n13.store/wp-content/uploads/2025/02/VILA_fall_winter_2025_medium_14103460_VIADDISON_JACKET_JULY_14096999_VIOSTRIA_KNIT_SEP_.jpg' },
    { name: 'brand-casual-friday.jpg', url: 'https://www.n13.store/wp-content/uploads/2025/02/20505321_50813_600.jpg' }
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
