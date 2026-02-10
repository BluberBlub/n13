import Client from 'ssh2-sftp-client';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    host: 'access-5019484682.webspace-host.com',
    username: 'su373050',
    password: '2k26Schnitzel1!',
    remoteDir: '/n13'
};

const client = new Client();

async function main() {
    const localDir = path.join(__dirname, 'dist');

    try {
        await client.connect(config);
        console.log(`Connected to ${config.host}`);

        // Ensure remote directory exists
        const exists = await client.exists(config.remoteDir);
        if (!exists) {
            console.log(`Creating remote directory ${config.remoteDir}`);
            await client.mkdir(config.remoteDir, true);
        }

        console.log(`Uploading contents of ${localDir} to ${config.remoteDir}...`);

        // Upload directory
        await client.uploadDir(localDir, config.remoteDir, {
            useFastput: false // fallback to regular put
        });

        console.log('Upload complete!');
    } catch (err) {
        console.error('Deployment failed:', err);
    } finally {
        await client.end();
    }
}

main();
