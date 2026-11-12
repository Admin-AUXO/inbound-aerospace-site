import sharp from 'sharp';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'src/assets/investors');

const mono = async (file, target, { fromLuminance }) => {
  const { data, info } = await sharp(path.join(root, 'raw/investors', file)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const lum = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
    const alpha = fromLuminance ? Math.round((1 - lum) * 255) : data[i + 3];
    data[i] = 0xec;
    data[i + 1] = 0xeb;
    data[i + 2] = 0xe6;
    data[i + 3] = Math.min(data[i + 3], alpha);
  }
  await sharp(data, { raw: info }).trim({ threshold: 1 }).resize({ height: 240, withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(path.join(out, target));
};

await mono('speciale-white.png', 'speciale.png', { fromLuminance: false });
await mono('piper-serica.png', 'piper-serica.png', { fromLuminance: true });
console.log('done');
