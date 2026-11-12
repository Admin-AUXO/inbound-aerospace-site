import { site, headline, returnSection, returnFacts, phases, fieldsSection, fields, briefSection, brief, testsSection, tests, founders, advisors, pads } from '../data/site';
import { canonical, pages, spacecraft, process, science, about, investors, news, roles, careersForm } from '../data/pages';
import { abs } from './url';

const address = `${site.address.street}, ${site.address.locality}, ${site.address.city} ${site.address.postcode}, India`;
const list = (items: string[]) => items.map((i) => `- ${i}`).join('\n');
const qa = (items: { q: string; a: string }[]) => items.map((x) => `### ${x.q}\n\n${x.a}`).join('\n\n');
const people = () =>
  `## Founders\n\n${list(founders.map((f) => `${f.name}, ${f.role}. ${f.text}`))}\n\n## Advisors\n\n${list(advisors.map((a) => `${a.name}, ${a.role}`))}\n\n## Backed by\n\n${list(investors.map((i) => `${i.name} (${i.url})`))}`;

export const docs: Record<string, () => string> = {
  index: () => `# ${site.name}

> ${canonical}

- Founded: ${site.founded}
- Address: ${address}
- Enquiries: ${abs(pages.contact.path)}

## ${headline.title}

${headline.lede}

## ${returnSection.title}

${returnSection.text}

${list(returnFacts.map((f) => `${f.value} ${f.unit}: ${f.text}`))}

## Mission profile

${list(phases.map((p) => `${p.name} (${p.code}): ${p.text}`))}

## ${testsSection.title}

${testsSection.text}

${list(tests.map((t) => `${t.altitude}, ${t.label}: ${t.state}`))}
`,
  spacecraft: () => `# ${pages.spacecraft.label}

> ${pages.spacecraft.description}

${spacecraft.lede}

${qa(spacecraft.qa)}

## Mission profile

${list(phases.map((p) => `${p.name} (${p.code}): ${p.text}`))}
`,
  payloads: () => `# ${pages.payloads.label}

> ${pages.payloads.description}

## ${fieldsSection.title}

${fieldsSection.text}

${fields.map((f) => `### ${f.name}\n\n${f.evidence} (${f.source})\n\n${list(f.items)}`).join('\n\n')}

## ${briefSection.title}

${briefSection.text}

${list(brief.map((b) => `${b.label}: ${b.value}`))}

## From enquiry to runway

${process.map((p, i) => `${i + 1}. ${p.name}: ${p.text}`).join('\n')}

Enquire: ${abs(pages.payloads.path)}#enquire
`,
  science: () => `# ${pages.science.label}

> ${science.lede}

${science.sections.map((s) => `## ${s.q}\n\n${s.a.join('\n\n')}`).join('\n\n')}

## Questions

${qa(science.faq)}
`,
  pads: () => `# Inbound PADS

> ${pads.lede}

${pads.text}

${list(pads.facts.map((f) => `${f.label}: ${f.value}`))}

Enquire: ${abs(pages.pads.path)}#enquire
`,
  about: () => `# About ${site.name}

> ${about.lede}

${about.mission}

${about.origin}

${about.incubation}

${people()}
`,
  news: () => `# News and press

${news.map((n) => `## ${n.label}: ${n.title}\n\n${n.text}${n.href ? `\n\nSource: ${n.source}, ${n.href}` : ''}`).join('\n\n')}
`,
  careers: () => `# Careers

Inbound is building its engineering team at IITM Research Park, Chennai.

${list(roles.map((r) => `${r.title}: ${r.team}, ${r.type}, ${r.location}. Apply: ${careersForm}`))}
- General application: ${careersForm}
`,
  contact: () => `# Contact

Payload, partnership, PADS, investment and press enquiries are handled by the founding team.

- Enquiry form: ${abs(pages.contact.path)}
- Address: ${address}
- Map: ${site.mapsLink}
`
};

const linkable = ['spacecraft', 'payloads', 'science', 'pads', 'about', 'news', 'careers', 'contact'] as const;

export const llmsTxt = () => `# ${site.name}

> ${canonical}

Key facts: founded ${site.founded}; based at IITM Research Park, Chennai, India; uncrewed, autonomous, reusable, wingless lifting-body spacecraft; low Earth orbit at 350 to 450 km for weeks; re-entry at up to 2 g; runway landing; first orbital mission targeted for 2028. Also develops Inbound PADS, a precision aerial delivery system.

## Pages

- [Home](${abs('/index.md')}): Overview, the return, mission profile and test programme
${linkable.map((k) => `- [${pages[k].label}](${abs(`/${k}.md`)}): ${pages[k].description}`).join('\n')}

## Optional

- [Full content](${abs('/llms-full.txt')}): Every page in one Markdown file
`;

export const llmsFull = () => [docs.index(), ...linkable.map((k) => docs[k]())].join('\n---\n\n');
