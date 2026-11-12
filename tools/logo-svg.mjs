import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const s = 17;
const h = s / 2;
const top = 12;
const xTop = 51;
const base = 102;
const R = 18;
const gap = 21;

const glyphs = {
  I: { w: s, d: (x) => `M${x + h},${top} V${base}` },
  n: {
    w: 67,
    d: (x, w) => `M${x + h},${base} V${xTop + h + R} A${R},${R} 0 0 1 ${x + h + R},${xTop + h} H${x + w - h - R} A${R},${R} 0 0 1 ${x + w - h},${xTop + h + R} V${base}`
  },
  u: {
    w: 67,
    d: (x, w) => `M${x + h},${xTop} V${base - h - R} A${R},${R} 0 0 0 ${x + h + R},${base - h} H${x + w - h - R} A${R},${R} 0 0 0 ${x + w - h},${base - h - R} V${xTop}`
  },
  o: {
    w: 71,
    d: (x, w) => `M${x + h + R},${xTop + h} H${x + w - h - R} A${R},${R} 0 0 1 ${x + w - h},${xTop + h + R} V${base - h - R} A${R},${R} 0 0 1 ${x + w - h - R},${base - h} H${x + h + R} A${R},${R} 0 0 1 ${x + h},${base - h - R} V${xTop + h + R} A${R},${R} 0 0 1 ${x + h + R},${xTop + h} Z`
  },
  b: {
    w: 69,
    d: (x, w) => `M${x + h},${top} V${base} M${x + h},${xTop + h} H${x + w - h - R} A${R},${R} 0 0 1 ${x + w - h},${xTop + h + R} V${base - h - R} A${R},${R} 0 0 1 ${x + w - h - R},${base - h} H${x + h}`
  },
  d: {
    w: 69,
    d: (x, w) => `M${x + w - h},${top} V${base} M${x + w - h},${xTop + h} H${x + h + R} A${R},${R} 0 0 0 ${x + h},${xTop + h + R} V${base - h - R} A${R},${R} 0 0 0 ${x + h + R},${base - h} H${x + w - h}`
  }
};

let x = 4;
const strokes = [];
for (const ch of 'Inbound') {
  const g = glyphs[ch];
  strokes.push(g.d(x, g.w));
  x += g.w + gap;
}
const end = x - gap;
const width = end + 30;
const arc = `M2,${base + 64} C${end * 0.5},${base + 62} ${end * 0.9},${base + 40} ${end + 10},${base + 10} C${end + 15},${base - 2} ${end + 18},${base - 20} ${end + 18},${base - 36} C${end + 22},${base - 32} ${end + 25},${base - 22} ${end + 24},${base - 12} C${end + 22},${base + 6} ${end + 16},${base + 22} ${end + 4},${base + 34} C${end * 0.9},${base + 54} ${end * 0.5},${base + 69} 2,${base + 66} Z`;
const height = base + 74;

const svg = (ink, heat = '#F89300') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Inbound Aerospace"><defs><mask id="gap" maskUnits="userSpaceOnUse" x="0" y="0" width="${width}" height="${height}"><rect width="${width}" height="${height}" fill="#fff"/><path d="${strokes.join(' ')}" fill="none" stroke="#000" stroke-width="${s + 7}" stroke-linecap="square" stroke-linejoin="round"/></mask></defs><path d="${arc}" fill="${heat}" mask="url(#gap)"/><path d="${strokes.join(' ')}" fill="none" stroke="${ink}" stroke-width="${s}" stroke-linecap="butt" stroke-linejoin="round"/></svg>\n`;

const out = path.join(root, 'src/assets/brand');
fs.writeFileSync(path.join(out, 'logo-on-dark.svg'), svg('#ECEAE4'));
fs.writeFileSync(path.join(out, 'logo-on-light.svg'), svg('#121314'));
fs.writeFileSync(path.join(root, 'public/logo.svg'), svg('#121314'));

const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#121314"/><path d="M16,14 V44" stroke="#ECEAE4" stroke-width="7" fill="none"/><path d="M24,44 V30 A8,8 0 0 1 32,22 H40 A8,8 0 0 1 48,30 V44" stroke="#ECEAE4" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M8,54 C26,54 42,52 56,40 C57,43 56,46 54,48 C42,56 26,57 8,56 Z" fill="#F89300"/></svg>\n`;
fs.writeFileSync(path.join(root, 'public/favicon.svg'), mark);
for (const [size, file] of [[32, 'favicon-32.png'], [64, 'favicon-64.png'], [180, 'apple-touch-icon.png'], [192, 'icon-192.png'], [512, 'icon-512.png']]) {
  await sharp(Buffer.from(mark)).resize(size, size).png().toFile(path.join(root, 'public', file));
}
await sharp(Buffer.from(svg('#121314'))).resize({ width: 1200 }).flatten({ background: '#ffffff' }).png().toFile(path.join(root, 'raw/logo-svg-preview.png'));
console.log(width, height);
