import sharp from 'sharp';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const src = path.join(root, 'raw/current-site/logo.png');
const out = path.join(root, 'src/assets/brand');
const pub = path.join(root, 'public');

const isArc = (r, g, b) => r > 170 && b < 110 && r - g > 30;

const tint = async (hex, file) => {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  for (let i = 0; i < data.length; i += 4) {
    if (isArc(data[i], data[i + 1], data[i + 2])) continue;
    data[i] = r;
    data[i + 1] = g;
    data[i + 2] = b;
  }
  await sharp(data, { raw: info }).trim({ threshold: 1 }).png({ compressionLevel: 9 }).toFile(path.join(out, file));
};

await tint('#eceae4', 'logo-on-dark.png');
await tint('#121314', 'logo-on-light.png');

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  if (!isArc(data[i], data[i + 1], data[i + 2])) data[i + 3] = 0;
}
const arc = await sharp(data, { raw: info }).trim({ threshold: 1 }).resize(400, 400, { fit: 'inside' }).png().toBuffer();
const badge = (size, file) =>
  sharp({ create: { width: 512, height: 512, channels: 4, background: '#121314' } })
    .composite([{ input: arc, gravity: 'center' }])
    .png()
    .toBuffer()
    .then((b) => sharp(b).resize(size, size).png().toFile(path.join(pub, file)));
await badge(32, 'favicon-32.png');
await badge(64, 'favicon-64.png');
await badge(180, 'apple-touch-icon.png');
await badge(192, 'icon-192.png');
await badge(512, 'icon-512.png');
console.log('done');
