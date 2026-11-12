---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Home page

Mode: Persuade. Spec build by AUXO to pitch Inbound Aerospace; preview is noindex.

Audience and job: pharma and materials R&D leads deciding whether to talk about flying a payload; investors in the seed round; engineers they want to hire; defence buyers for PADS.
Primary action: "Fly a payload" opens the payload enquiry in place (experiment class, sample type, duration wanted, earliest flight). Secondary: payload brief table, careers, investor contact.
Proof on hand: company-published figures only (350 to 450 km, weeks in orbit, up to 2G re-entry, runway landing), founders and ISRO advisors, Speciale-led pre-seed and test ladder from press. No customers, no specs beyond those; everything else is "on request".
Constraints: static Astro, light pages for mid-range Android, WCAG 2.2 AA, reduced-motion safe.

## Direction contract

THESIS: The page is the vehicle's underside: a thermal-protection tile map. The return is the product, so the material that makes return survivable is the page's ground. Refuses the starfield hero with a glowing rocket render.
OWN-WORLD: Black HRSI tile field and off-white LRSI tile panels, 1px gap lines, each tile stencilled with a small part number. One heat colour only, graded black to cherry to orange to white by temperature, used only where heat or g-load is the subject (the logo's arc is that colour). Archivo: expanded heavy caps for display, normal width for text, tabular figures for every number.
STORY: Visitor learns weeks in orbit, a gentle 2G return and a runway landing; believes it because the numbers and test ladder are laid out plainly; acts by opening the payload enquiry.
FIRST VIEWPORT: Full-bleed black tile field; a band of tiles along the re-entry arc carries the heat grade. An off-white tile panel, left, holds the H1 at display scale, one line of support, and "Fly a payload" plus "Payload brief". Zone code and part numbers on surrounding tiles. Nav set as tiles along the top edge.
FORM: candidate 4 of 7 (thermal protection tile map); seed: e093f0061c7f0123
Raises: from VU meter bridge, the heat colour is the only accent and appears only past a threshold. From the ink basin, the heat pulse follows a real re-entry heating curve, not decorative easing. From the blacksmith forge, heat bands carry tabular temperature numerals. From the festival hoarding, one calm panel and one action win the viewport.
Signature interaction: the heat pulse runs once along the arc on load, rising fast and decaying slowly, then holds a dull glow; the g-load chart draws the capsule curve past 5G against Inbound's 2G.
Challenger verdicts: code cascade, festival hoarding, VU meter bridge, ink basin, forge, silk canopy all declined on audience and clarity; kept lines above.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
