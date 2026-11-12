export const site = {
  name: 'Inbound Aerospace',
  legalName: 'Inbound Aerospace Private Limited',
  tagline: 'From space, for Earth.',
  description:
    'Inbound Aerospace is building an autonomous, reusable lifting-body spacecraft in Chennai, India. It gives experiments weeks of undisturbed microgravity in low Earth orbit, re-enters at no more than 2 g and lands on a runway.',
  founded: '2025',
  address: {
    street: 'IIT Madras Incubation Cell, D Block, 3rd Floor, IITM Research Park',
    locality: 'Taramani',
    city: 'Chennai',
    region: 'Tamil Nadu',
    postcode: '600113',
    country: 'IN'
  },
  mapsLink: 'https://maps.google.com/?q=IITM+Research+Park,+Taramani,+Chennai+600113',
  sameAs: ['https://www.linkedin.com/in/aravindib/', 'https://www.linkedin.com/in/vishal-reddyc99/', 'https://www.linkedin.com/in/abhijit2002/']
};

export const nav = [
  { href: '/#return', label: 'The return' },
  { href: '/#mission', label: 'Mission' },
  { href: '/#brief', label: 'Payload brief' },
  { href: '/#tests', label: 'Test programme' },
  { href: '/#team', label: 'Team' }
];

export const headline = {
  title: 'Long-duration microgravity, with a gentle return',
  lines: ['Long-duration microgravity,', 'with a gentle return.'],
  lede: 'An autonomous, reusable lifting-body spacecraft in development in Chennai. It is designed to give experiments weeks of undisturbed microgravity in low Earth orbit, re-enter at no more than 2 g and land on a runway for immediate recovery.'
};

export const readout = [
  { label: 'Orbit', value: '350–450 km' },
  { label: 'Microgravity', value: 'Weeks, uncrewed' },
  { label: 'Re-entry', value: 'Up to 2 g' },
  { label: 'Landing', value: 'Runway' }
];

export const returnSection = {
  title: 'Why the return matters',
  text: 'Research in orbit is only as good as the samples that come back. Capsules re-enter ballistically, typically at 5 g or more, and are recovered under parachutes, often at sea. Inbound’s lifting body generates its own lift. It is designed to keep loads at or below 2 g and to bring the vehicle to a runway, close to the laboratory.'
};

export const returnFacts = [
  { value: 'Weeks', unit: 'of continuous microgravity', text: 'No crew on board, and no human activity to disturb the experiment.' },
  { value: '≤ 2 g', unit: 'design target, peak re-entry load', text: 'Against the 5 g and above typical of capsule returns.' },
  { value: 'Runway', unit: 'landing and recovery', text: 'Payloads are handed over on the ground, without ocean retrieval.' }
];

export const missionSection = {
  title: 'Mission profile',
  text: 'A smaller, uncrewed and reusable successor to the Space Shuttle concept, designed around the experiments it carries.'
};

export const phases = [
  { code: 'L−', name: 'Payload integration', text: 'Experiments are integrated into the spacecraft and tested before flight under defined safety protocols.' },
  { code: 'L', name: 'Launch', text: 'The wingless lifting body flies on a commercial launch vehicle, using the fairing volume for payload rather than wings.' },
  { code: 'LEO', name: 'On orbit', text: 'Weeks of autonomous flight in low Earth orbit, with the experiment undisturbed.' },
  { code: 'EI', name: 'Entry interface', text: 'The body generates lift and glides through the atmosphere, designed to hold loads at or below 2 g.' },
  { code: 'TD', name: 'Touchdown', text: 'A precision runway landing, with the payload recovered immediately.' }
];

export const fieldsSection = {
  title: 'Applications',
  text: 'Removing gravity removes convection, sedimentation and buoyancy. Processes that are disturbed on Earth can be studied, and in some cases produced, with far greater control.'
};

export const fields = [
  {
    name: 'Pharmaceuticals',
    short: 'Crystallisation and formulation',
    evidence: 'Crystals of the cancer drug pembrolizumab grown on the International Space Station formed a more uniform suspension, with lower viscosity than Earth-grown batches.',
    source: 'Merck and the ISS National Lab, npj Microgravity, 2019',
    items: ['Protein crystallisation for more uniform crystals', 'Drug discovery and formulation research', 'Tissue engineering and organ-on-chip studies']
  },
  {
    name: 'Semiconductors',
    short: 'Crystal growth and materials',
    evidence: 'On Earth, buoyancy-driven convection in a melt leaves striations and defects in a growing crystal. In orbit that convection largely disappears, so growth is governed mainly by diffusion.',
    source: 'Established crystal-growth physics',
    items: ['Crystal growth with fewer gravity-driven defects', 'Advanced materials research', 'Next-generation electronic components']
  },
  {
    name: 'Physical sciences',
    short: 'Fluids and combustion',
    evidence: 'Without buoyancy a flame burns as a slow, near-spherical shell. Experiments of this kind on the ISS have refined combustion models used on Earth.',
    source: 'NASA Flame Extinguishment Experiments, ISS',
    items: ['Fluid dynamics without convection', 'Combustion research', 'Materials science']
  }
];

export const briefSection = {
  title: 'Payload brief',
  text: 'The figures we publish today. Detailed interface specifications are shared with qualified teams on request.'
};

export const brief = [
  { label: 'Orbit', value: '350 to 450 km, low Earth orbit', status: 'published' },
  { label: 'Duration in microgravity', value: 'Weeks, uninterrupted', status: 'published' },
  { label: 'Crew', value: 'None. Fully autonomous', status: 'published' },
  { label: 'Peak re-entry load', value: 'Up to 2 g', status: 'published' },
  { label: 'Landing', value: 'Runway, with immediate recovery', status: 'published' },
  { label: 'Vehicle', value: 'Reusable, wingless lifting body', status: 'published' },
  { label: 'Payload mass and volume', value: 'On request', status: 'request' },
  { label: 'Power, data and thermal control', value: 'On request', status: 'request' },
  { label: 'Late load and early retrieval', value: 'On request', status: 'request' },
  { label: 'First mission', value: 'Targeted for 2028', status: 'published' }
];

export const enquiry = {
  title: 'Payload and partnership enquiries',
  lede: 'Enquiries are handled by the founding team.',
  topics: ['Flying a payload', 'Investment', 'PADS', 'Press', 'Other'],
  fields: ['Pharmaceuticals or biotechnology', 'Semiconductors or materials', 'Fluids or combustion', 'Other research'],
  durations: ['Days', '1 to 2 weeks', '3 to 6 weeks', 'Longer', 'Not yet known'],
  windows: ['2028', '2029', '2030 or later', 'Not yet known']
};

export const testsSection = {
  title: 'Test programme',
  text: 'Before the first orbital flight, the landing system is being proven in a series of drop tests from increasing altitude.'
};

export const tests = [
  { altitude: '1 km', label: 'Drop test', state: 'Complete' },
  { altitude: '3 km', label: 'Drop test', state: 'Planned' },
  { altitude: '8 km', label: 'Drop test', state: 'Planned' },
  { altitude: '30 km', label: 'High-altitude drop test', state: 'Planned' },
  { altitude: '350 km +', label: 'First orbital mission and re-entry', state: 'Targeted 2028' }
];

export const teamSection = {
  title: 'Team',
  text: 'Founded in 2025 and incubated at IIT Madras. Backed by Speciale Invest and Piper Serica.'
};

export const founders = [
  { name: 'Aravind I B', role: 'Co-founder and CEO', text: 'Aerospace engineer. His doctoral research at IIT Madras on fluid behaviour in microgravity led to the founding of Inbound.' },
  { name: 'Vishal Reddy', role: 'Co-founder', text: 'Master’s in Management Science and Engineering, Columbia University. Previously in operations and supply chain at Tesla.' },
  { name: 'Capt Abhijit Bhutey (Retd)', role: 'Co-founder', text: 'Former Indian Navy test pilot and naval aviator with extensive carrier flying experience.' }
];

export const advisors = [
  { name: 'Dr S Pandian', role: 'Former Director, Satish Dhawan Space Centre, ISRO' },
  { name: 'Dr Krishnadasan C K', role: 'Former Deputy Director, VSSC, ISRO' },
  { name: 'Dr V R Lalithambika', role: 'Former Director, Directorate of Human Space Programme, ISRO' }
];

export const pads = {
  title: 'Inbound PADS',
  lede: 'A steerable parachute system for precise aerial delivery, developed alongside the spacecraft’s landing system.',
  text: 'Inbound PADS applies the guided-parachute work behind the spacecraft’s landing system to supply drops for defence and emergency response. A naval variant, the Air Droppable Container, is in development.',
  cta: 'Enquire about PADS',
  facts: [
    { label: 'System', value: 'Steerable parachute' },
    { label: 'Use', value: 'Defence and emergency supply' },
    { label: 'Naval variant', value: 'Air Droppable Container, in development' }
  ]
};

export const routes = [
  { title: 'Careers', text: 'We are building the engineering team in Chennai, beginning with avionics.', href: 'https://inboundaerospace.com/careers', cta: 'View open roles' },
  { title: 'Investors', text: 'For investment enquiries, please contact the founders directly.', href: '/#fly', cta: 'Contact the founders' },
  { title: 'Press', text: 'Founder biographies, images and company facts are available on request.', href: '/#fly', cta: 'Request the press kit' }
];
