const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public/images');

async function analyzeDirectory(dir) {
    let results = [];
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
            results = results.concat(await analyzeDirectory(fullPath));
        } else if (file.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(file.name)) {
            try {
                // Get brightness by resizing to 1x1 and converting to greyscale
                const { data } = await sharp(fullPath)
                    .resize(1, 1)
                    .greyscale()
                    .raw()
                    .toBuffer({ resolveWithObject: true });
                
                const brightness = data[0]; // 0-255

                // Create a basic 8x8 dHash
                const hashData = await sharp(fullPath)
                    .resize(9, 8, { fit: 'fill' })
                    .greyscale()
                    .raw()
                    .toBuffer();

                let hash = '';
                for (let y = 0; y < 8; y++) {
                    let byte = 0;
                    for (let x = 0; x < 8; x++) {
                        const left = hashData[y * 9 + x];
                        const right = hashData[y * 9 + x + 1];
                        if (left < right) {
                            byte |= (1 << x);
                        }
                    }
                    hash += byte.toString(16).padStart(2, '0');
                }

                results.push({ path: path.relative(__dirname, fullPath), brightness, hash });
            } catch (error) {
                console.error(`Error processing ${fullPath}`, error.message);
            }
        }
    }
    return results;
}

async function main() {
    console.log('Analyzing images...');
    const results = await analyzeDirectory(baseDir);
    
    console.log('\n--- BRIGHTNESS (Darkest first) ---');
    results.sort((a, b) => a.brightness - b.brightness);
    for (const r of results) {
        console.log(`Brightness: ${Math.round(r.brightness).toString().padStart(3, ' ')} | Hash: ${r.hash} | ${r.path}`);
    }

    console.log('\n--- POTENTIAL DUPLICATES (by dHash) ---');
    const hashes = {};
    for (const r of results) {
        if (!hashes[r.hash]) hashes[r.hash] = [];
        hashes[r.hash].push(r.path);
    }
    
    for (const [hash, files] of Object.entries(hashes)) {
        if (files.length > 1) {
            console.log(`Hash ${hash}:`);
            files.forEach(f => console.log(`  ${f}`));
        }
    }
}

main();
