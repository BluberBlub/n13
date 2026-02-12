import https from 'https';

const url = 'https://www.n13.store/modewelt/';

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const regex = /https?:\/\/[^"']*\.(?:jpg|png|jpeg|webp)/gi;
        const matches = data.match(regex);

        if (matches) {
            const unique = [...new Set(matches)];
            const uploads = unique.filter(u => u.includes('wp-content/uploads'));
            console.log(JSON.stringify(uploads, null, 2));
        }
    });

}).on('error', (err) => {
    console.error('Error: ' + err.message);
});
