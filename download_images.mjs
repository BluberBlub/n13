import fs from 'fs';
import https from 'https';
import path from 'path';

const brands = {
    'happy-socks': 'https://www.n13.store/wp-content/uploads/2025/08/Happy-Socks_spring_summer_2026_large_P004605_M_2.jpg',
    'meyer-hosen': 'https://www.n13.store/wp-content/uploads/2025/08/MEYER_spring_summer_2026_original_M5_SS26_move_6196_06_move_6196_07_262.jpg',
    'object': 'https://www.n13.store/wp-content/uploads/2025/08/OBJECT_spring_summer_2026_original_2025.11.05_PS-CAMP_08_2248.jpg',
    'b-young': 'https://www.n13.store/wp-content/uploads/2025/08/byoung_spring_summer_2026_original_BYOUNG_OFFICE_31.03.25_1832.jpg',
    'blend': 'https://www.n13.store/wp-content/uploads/2025/08/Blend_spring_summer_2026_original_BLEND_MS26_33290.jpg',
    'desoto': 'https://www.n13.store/wp-content/uploads/2023/01/DESOTO_spring_summer_2025_medium_DESOTO_FS25_CASUAL_12_3er_JUMP_FINAL.jpg',
    'lindenmann': 'https://www.n13.store/wp-content/uploads/2025/02/LINDENMANN_spring_summer_2025_medium_Lindenmann-Promo-02.jpg',
    'vila': 'https://www.n13.store/wp-content/uploads/2025/02/VILA_fall_winter_2025_medium_14103460_VIADDISON_JACKET_JULY_14096999_VIOSTRIA_KNIT_SEP_-001.jpg',
    'casual-friday': 'https://www.n13.store/wp-content/uploads/2025/02/20505321_50813_600.jpg',
    'ammann': 'https://www.n13.store/wp-content/uploads/2024/08/1332833_gr_1920x1920.jpg',
    'rohstoff': 'https://www.n13.store/wp-content/uploads/2024/02/rohstoff_product-image_kurkumaLogo.jpg',
    'a-beautiful-story': 'https://www.n13.store/wp-content/uploads/2022/03/pexels-karolina-grabowska-4040640.jpg',
    'kknekki': 'https://www.n13.store/wp-content/uploads/2024/07/20240118_102144.jpg',
    'cereria-molla': 'https://www.n13.store/wp-content/uploads/2024/04/Screenshot-2024-09-24-115624.jpg',
    'kunstwerkstatt': 'https://www.n13.store/wp-content/uploads/2024/09/Screenshot-2024-09-24-115235.jpg',
    'kruut': 'https://www.n13.store/wp-content/uploads/2024/02/Screenshot-2024-02-07-152746.jpg',
    'hopery': 'https://www.n13.store/wp-content/uploads/2023/08/WhatsApp_Image_2022-07-14_at_22.32.11_900x.webp',
    'mags': 'https://www.n13.store/wp-content/uploads/2025/02/Screenshot-2025-02-12-112433.jpg'
};

const outputDir = 'temp_brands';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const promises = [];

for (const [slug, url] of Object.entries(brands)) {
    promises.push(new Promise((resolve, reject) => {
        const ext = path.extname(url);
        // Normalize extension to lowercase
        const filename = `brand-${slug}${ext.toLowerCase()}`;
        const filepath = path.join(outputDir, filename);

        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                file.close();
                fs.unlink(filepath, () => { }); // delete empty file
                console.error(`Failed to download ${slug}: Status ${response.statusCode}`);
                resolve(); // resolve anyway to continue
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            console.error(`Error downloading ${slug}: ${err.message}`);
            resolve();
        });
    }));
}

Promise.all(promises).then(() => {
    console.log('All downloads processed.');
});
