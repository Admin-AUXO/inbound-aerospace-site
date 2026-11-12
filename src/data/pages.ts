export const canonical =
  'Inbound Aerospace is a Chennai-based, IIT Madras-incubated space company building an uncrewed, reusable, wingless lifting-body spacecraft that gives research payloads weeks of microgravity in low Earth orbit and returns them by runway landing.';

export const careersForm = 'https://forms.gle/jwTrrydYvEZSZQQe9';

export type PageMeta = { path: string; label: string; title: string; description: string; noindex?: boolean };

export const pages: Record<string, PageMeta> = {
  home: { path: '/', label: 'Home', title: 'Inbound Aerospace | Reusable spacecraft for microgravity', description: 'An uncrewed, reusable lifting-body spacecraft from Chennai: weeks of microgravity in low Earth orbit and a runway landing. Incubated at IIT Madras.' },
  spacecraft: { path: '/spacecraft/', label: 'Spacecraft', title: 'Reusable lifting-body spacecraft | Inbound Aerospace', description: 'An uncrewed, wingless lifting-body spacecraft: weeks in low Earth orbit at 350 to 450 km, re-entry at up to 2 g and a runway landing.' },
  payloads: { path: '/payloads/', label: 'Payloads', title: 'Fly a payload in microgravity | Inbound Aerospace', description: 'Fly pharmaceutical, semiconductor and physical-science experiments for weeks of microgravity, and recover them from a runway.' },
  science: { path: '/science/', label: 'Science', title: 'Microgravity science: what, why and why now | Inbound Aerospace', description: 'What microgravity is, why it changes crystal growth and fluid behaviour, and why demand is rising as the International Space Station nears retirement.' },
  pads: { path: '/pads/', label: 'PADS', title: 'Inbound PADS, precision aerial delivery | Inbound Aerospace', description: 'Inbound PADS is a steerable parachute system for precise aerial delivery in defence and emergency supply, developed alongside the spacecraft.' },
  about: { path: '/about/', label: 'About', title: 'About Inbound Aerospace | IIT Madras space company', description: 'Founded in 2025 in Chennai and incubated at IIT Madras. The founders, advisors and backers building a reusable spacecraft for microgravity research.' },
  news: { path: '/news/', label: 'News', title: 'News and press | Inbound Aerospace', description: 'Funding, test milestones, events and press coverage of Inbound Aerospace.' },
  careers: { path: '/careers/', label: 'Careers', title: 'Careers in Chennai | Inbound Aerospace', description: 'Join the Chennai team building a reusable spacecraft. Open roles, starting with avionics, and a general application.' },
  contact: { path: '/contact/', label: 'Contact', title: 'Contact Inbound Aerospace', description: 'Payload, partnership, PADS, investment and press enquiries. IITM Research Park, Chennai.' },
  privacy: { path: '/privacy-policy/', label: 'Privacy policy', title: 'Privacy policy | Inbound Aerospace', description: 'Privacy policy of Inbound Aerospace.', noindex: true },
  terms: { path: '/terms-of-service/', label: 'Terms of service', title: 'Terms of service | Inbound Aerospace', description: 'Terms of service of Inbound Aerospace.', noindex: true }
};

export const mainNav = [pages.spacecraft, pages.payloads, pages.science, pages.pads, pages.about, pages.news, pages.careers];

export const spacecraft = {
  lede: 'A smaller, uncrewed and reusable successor to the Space Shuttle concept, designed around the experiments it carries rather than a crew.',
  qa: [
    { q: 'What is a lifting body?', a: 'A lifting body is a vehicle whose fuselage generates lift, without separate wings. It lets the spacecraft glide through the atmosphere on re-entry instead of falling ballistically like a capsule.' },
    { q: 'Why does that matter for experiments?', a: 'Gliding spreads deceleration over a longer descent. Inbound’s design targets peak loads at or below 2 g, where capsules typically see 5 g or more, which protects delicate crystals, cells and materials.' },
    { q: 'Where does it fly?', a: 'In low Earth orbit at 350 to 450 km, the altitude band of the International Space Station, for weeks at a time.' },
    { q: 'How does it land?', a: 'On a runway. The payload is recovered immediately, without searching for a capsule at sea.' },
    { q: 'Why no wings?', a: 'A wingless body fits within a commercial launch vehicle’s fairing and uses that volume for payload rather than wings.' },
    { q: 'Is it crewed?', a: 'No. The spacecraft is fully autonomous, so there is no crew activity to disturb the microgravity environment.' }
  ]
};

export const process = [
  { name: 'Enquiry', text: 'Tell us about the experiment, its duration and your timeline.' },
  { name: 'Feasibility', text: 'A call with the founding team to check fit and constraints.' },
  { name: 'Payload brief', text: 'Interface details shared with qualified teams under NDA.' },
  { name: 'Agreement', text: 'A letter of intent, then a service agreement.' },
  { name: 'Integration', text: 'Payload integration and pre-flight testing under defined safety protocols.' },
  { name: 'Flight and return', text: 'Weeks in orbit, a gentle re-entry and handover on the runway.' }
];

export const science = {
  lede: 'Why research and manufacturing in orbit produce results that cannot be reproduced on the ground.',
  sections: [
    { id: 'what', q: 'What is microgravity?', a: ['Microgravity is the condition of weightlessness experienced in orbit. It is sometimes called zero gravity, which is misleading: at the altitude where Inbound operates, around 350 to 450 km, gravity is still about 90% as strong as on the surface. A spacecraft in free fall around the Earth falls with everything inside it, so the acceleration left over is only about one-millionth of what we feel on the ground. This is the same altitude band as the International Space Station.'] },
    { id: 'why', q: 'Why microgravity?', a: ['Some experiments and products can only be studied, tested or made in microgravity. Removing gravity removes convection, sedimentation and buoyancy, all of which disturb physical and chemical processes on Earth. Even a candle flame changes: without buoyancy it burns as a slow, near-spherical shell instead of a teardrop.', 'Research on the International Space Station and on orbiting capsules has shown that microgravity can support the development of next-generation materials in medicine, communications and space technology.'] },
    { id: 'now', q: 'Why now?', a: ['The International Space Station is scheduled for retirement around 2030, which creates a need for commercial platforms that provide long-duration microgravity. Commercial space stations are planned, but a free-flying spacecraft offers more flexibility over launch and return.', 'Launch costs have also fallen sharply over the past decade as launch vehicles have become reusable, and platforms like Inbound’s are designed to benefit from that.'] }
  ],
  faq: [
    { q: 'Can microgravity be reproduced on Earth?', a: 'Only briefly. Drop towers and parabolic flights provide a few seconds to a few minutes. The research Inbound supports needs hours to weeks.' },
    { q: 'Why a spaceplane rather than a capsule?', a: 'A lifting-body spaceplane generates its own lift, so it glides through the atmosphere more smoothly than a capsule. That brings sensitive payloads back at lower g-loads than a ballistic capsule.' },
    { q: 'What can be made in space and brought back?', a: 'Candidates include pharmaceutical crystals, semiconductor materials, optical fibres and synthetic diamonds.' },
    { q: 'How long can an experiment stay in microgravity?', a: 'Weeks. Missions are planned around several weeks of uninterrupted microgravity in low Earth orbit.' }
  ]
};

export const about = {
  lede: 'Founded in 2025 in Chennai and incubated at IIT Madras, Inbound Aerospace is building an autonomous, reusable spacecraft for long-duration microgravity research in low Earth orbit.',
  mission: 'Inbound’s spacecraft is designed to address the limits of today’s microgravity platforms: long waits for a flight, disturbance from crew activity, high g-loads during re-entry and imprecise recovery. With launch costs falling and India’s space ambitions growing, the company aims to make this environment accessible to researchers and industries worldwide.',
  origin: 'The idea began with drop-tower experiments during Aravind I B’s doctoral research on fluid behaviour in microgravity at IIT Madras.',
  incubation: 'Pre-incubated at Nirmaan, IIT Madras, and now based at the IIT Madras Incubation Cell in IITM Research Park, Chennai.'
};

export const investors = [
  { name: 'Speciale Invest', url: 'https://www.specialeinvest.com/', logo: 'speciale' },
  { name: 'Piper Serica', url: 'https://www.piperserica.com/', logo: 'piper' }
];

export const news = [
  { date: '2026-10', label: 'October 2026', title: 'Inbound PADS shown at Swavlamban 2026, New Delhi', text: 'The precision aerial delivery system was exhibited at the Indian Navy’s innovation event, with a preview of the Air Droppable Container, a naval variant in development.', source: 'IDRW', href: 'https://idrw.org/air-droppable-container-pads-developer-targets-naval-delivery-requirements' },
  { date: '2025-07-23', label: '23 July 2025', title: 'Pre-seed round led by Speciale Invest', text: 'Inbound Aerospace raised a pre-seed round led by Speciale Invest, with participation from Piper Serica, to fund research and development and subsystem validation.', source: 'Speciale Invest', href: 'https://www.specialeinvest.com/post/our-investment-in-inbound-aerospace' },
  { date: '2025', label: '2025', title: 'Only Indian finalist at S-Booster 2025', text: 'Inbound was the only Indian finalist in S-Booster 2025, the space business competition run by Japan’s Cabinet Office.', source: 'Outlook Business', href: 'https://www.outlookbusiness.com/start-up/investors/iit-madras-incubated-start-up-inbound-aerospace-bags-1-mn-from-speciale-invest' },
  { date: '2024-09-27', label: '27 September 2024', title: 'Runner-up at the Nirmaan Demo Day Pitch Fest', text: 'At the Nirmaan Demo Day at IIT Madras’s Sudha and Shankar Innovation Hub, Inbound was named Pitch Fest runner-up.', source: '', href: '' }
];

export const roles = [{ title: 'Senior Avionics Engineer', team: 'Avionics', type: 'Full-time', location: 'IITM Research Park, Chennai' }];
