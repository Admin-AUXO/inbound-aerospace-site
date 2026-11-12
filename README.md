# Inbound Aerospace website (spec build)

A spec site that AUXO Data Labs built to pitch Inbound Aerospace (inboundaerospace.com), an IIT Madras-incubated company building a reusable lifting-body spacecraft for microgravity research. Inbound has not asked for it or approved it. Nothing here goes to Inbound until Vignesh approves.

It follows the playbook of `Github/samikshas-nest-inn`: Astro 5, static, with a sitemap, structured data, `llms.txt` and Markdown copies of each page.

## Run

```bash
npm install
npm run dev
npm run build
```

From the workspace root, the `inbound-dev` entry in `.claude/launch.json` serves it on port 4361.

## Indexing

Every build is `noindex` with a disallow-all `robots.txt` unless `PUBLIC_INDEX=true` is set. That makes accidental indexing of a spec build impossible. Set the flag only once Inbound owns the site and it sits on their domain.

`.github/workflows/deploy.yml` publishes a preview to GitHub Pages at `/inbound-aerospace-site` when the repo is pushed. It has not been pushed.

## Pages

Each piece of content lives on one page. Pages hand off to each other through the "Next" band at the foot of each page.

| Path | Content |
|---|---|
| `/` | Earth hero, why the return matters (g-load chart), index into the programme, test programme, backers, routes |
| `/spacecraft/` | Tile-field hero, how it works (Q&A), vehicle renders, mission profile |
| `/payloads/` | Applications with sourced evidence, payload brief, enquiry form, enquiry-to-runway steps |
| `/science/` | What microgravity is, why it matters, why now, questions |
| `/pads/` | Inbound PADS and PADS enquiries |
| `/about/` | Mission, founders, advisors, backers |
| `/news/` | Dated items linking to the original sources |
| `/careers/` | Open roles and the general application form |
| `/contact/` | Address, routes and the enquiry form |
| `/privacy-policy/`, `/terms-of-service/` | Placeholders, noindex, kept at Inbound's existing URLs |

Every page has a Markdown copy (`/about.md` and so on), listed in `/llms.txt`, with all of them in `/llms-full.txt`. Structured data: Organization on every page, BreadcrumbList on inner pages, plus FAQPage, Service, Product, AboutPage, ContactPage and ItemList where they fit. When indexable, `robots.txt` names the search and AI crawlers explicitly.

## Design

The page is the vehicle's underside: a thermal-protection tile map. Black tiles and off-white ceramic panels, with heat colour (taken from the orange arc in Inbound's logo) used only where heat or g-load is the subject. The hero's heat band is computed at build time in `src/components/TileField.astro`. Each tile's heat comes from its distance to a re-entry arc. On load a pulse runs along the arc, rising fast and decaying slowly, and is skipped under reduced motion. The direction contract is in `.impeccable/surfaces/`.

Type is Archivo (variable width), self-hosted through Fontsource.

## Content

All copy lives in `src/data/site.ts`. Sources:

- Inbound's own site (read 12 Nov 2026): mission profile, 350 to 450 km, weeks in orbit, up to 2 g re-entry, runway landing, the fields, founders and advisors.
- Speciale Invest's investment note (23 Jul 2025): founder backgrounds and that pharma comes first.
- Press: the test ladder (1 km drop done; 3, 8 and 30 km planned; first mission targeted for 2028), the Speciale and Piper Serica backing, and PADS and ADC (IDRW, 8 Nov 2026).

The g-load chart is illustrative and labelled as such. Its curves are not flight data.

## To confirm with Inbound before anything goes live

- The 2 g and 5 g figures, and how they want the comparison worded.
- The test ladder and the 2028 target. These come from press, not from Inbound.
- Whether to name the investors on the site.
- PADS and ADC wording, and whether defence work belongs on this site.
- Payload brief rows they are willing to publish (mass, volume, power, thermal, late load).
- The part numbers on the tiles are decorative (`IB-` plus zone plus four digits). Check they do not clash with real drawing numbers.
- Higher-resolution vehicle renders. `raw/current-site/` holds the five images from their current site, at 500 to 1,100 px.
- Where the enquiry form should post. In the preview it only confirms on the page and sends nothing.

## Logo

`node tools/logo-svg.mjs` draws the wordmark as SVG from geometry (monoline letters, rounded-square bowls, the orange arc) and writes `src/assets/brand/*.svg`, `public/logo.svg`, `public/favicon.svg` and the PNG icons. `node tools/logo.mjs` still builds PNG versions from `raw/current-site/logo.png`. The PNG is used for the share image. Ask Inbound for their source artwork and compare.

## Home Earth

The home hero picks one renderer per visit. On desktops with WebGL2, at least 4 GB of device memory, a width of 900 px or more and no data-saver setting, `src/components/EarthAtmosphere.astro` renders a physically based atmosphere with @takram/three-atmosphere and postprocessing. It uses 4K day, night and cloud textures (`public/earth-*-4k.jpg`, about 1.8 MB) and precomputed scattering tables (`public/atmosphere/*.exr`, 4.1 MB). Everywhere else, or if loading fails, `src/components/EarthHero.astro` renders a lighter custom shader with the 2K textures. Both light the Earth with the real sun position for the visitor's current time and mark the visitor's approximate region from their time zone, without asking for location. Neither has been tested on real mobile GPUs yet.

## Images and third-party marks

- Earth: day, night-lights and bump/roughness/cloud textures from Solar System Scope (CC BY 4.0, credited in the footer), as published in the three.js examples, resized to `public/earth-*.jpg`. Rendered by a custom day/night shader in `src/components/EarthHero.astro` with three.js, loaded only when the hero is on screen.
- Candle flames on the Science page: drawn in code by a WebGL shader in `src/components/FlameCompare.astro`, modelled on NASA microgravity candle experiments. The microgravity flame integrates light along each line of sight through a thin spherical flame sheet.
- Vehicle renders: Inbound's own images from their current site.
- Investor logos: `node tools/investors.mjs` converts the public logo files in `raw/investors/` to one tone. Neither firm publishes brand guidelines. Get permission from Inbound and the investors before going live.

## To confirm with Inbound before anything goes live (additions)

- The g-load figures are worded as a design target. Confirm the wording.
- The pembrolizumab evidence line on Payloads cites Merck and the ISS National Lab (npj Microgravity, 2019). Check it against the paper.
- PADS facts beyond "steerable parachute, defence and emergency supply, naval variant in development".
- News items come from press. Confirm dates and whether each can be listed.
- The privacy policy and terms. Their current pages say "Coming soon" while the contact form collects personal data, so a DPDP-compliant privacy notice is needed before launch.
