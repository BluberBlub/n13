import https from 'https';

const urls = [
    'https://www.n13.store/',
    'https://www.n13.store/page/2/',
    'https://www.n13.store/page/3/'
];

let allImages = new Set();
let completed = 0;

urls.forEach(url => {
    https.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const regex = /https?:\/\/[^"']*\.(?:jpg|png|jpeg|webp)/gi;
            const matches = data.match(regex);

            if (matches) {
                matches.forEach(img => allImages.add(img));
            }

            completed++;
            if (completed === urls.length) {
                printResults();
            }
        });

    }).on('error', (err) => {
        console.error(`Error fetching ${url}: ${err.message}`);
        completed++;
        if (completed === urls.length) {
            printResults();
        }
    });
});

function printResults() {
    const unique = [...allImages];
    // Filter for wp-content/uploads and try to find "originals" (no dimensions) if possible
    // But mostly we just want the list to then post-process
    const uploads = unique.filter(u => u.includes('wp-content/uploads'));
    console.log(JSON.stringify(uploads, null, 2));
}
