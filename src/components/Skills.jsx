import { FiDatabase, FiMonitor, FiServer, FiTool, FiActivity } from 'react-icons/fi'

const groups = [
  {
    icon: FiActivity,
    title: 'Technology Operations',
    items: [
      'Enphase Solar-Array Operations',
      'System Monitoring & Reporting',
      'Monday.com',
      'Ticket & Workflow Management',
      'Omnidian Job Workflows',
      'Invoice Processing',
      'Job Acceptance & Follow-Ups',
      'Operational Coordination',
    ],
  },  
  {
    icon: FiTool,
    title: 'AI, Platforms & Workflows',
    items: [
      'AI-Assisted Development',
      'AI-Supported Problem Solving',
      'WordPress',
      'Shopify',
      'Webflow',
      'Wix',
    ],
  },
  {
    icon: FiDatabase,
    title: 'Data & Development Tools',
    items: [
      'MongoDB',
      'Mongoose',
      'Data Modeling',
      'Git',
      'GitHub',
      'Vite',
      'Postman',
      'Debugging',
    ],
  },
  {
    icon: FiServer,
    title: 'Backend & APIs',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'API Integration',
      'Authentication',
      'Full-Stack Development',
    ],
  },
  {
    icon: FiMonitor,
    title: 'Frontend Development',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Redux',
      'Material UI',
      'Tailwind CSS',
      'Responsive UI',
    ],
  },
]

export default function Skills() { return <section id="skills" className="section-pad border-y border-white/5 bg-white/[.015]"><div className="section-wrap"><p className="eyebrow mb-4">02 / My toolkit</p><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><h2 className="section-title">The tools behind<br />the <span className="text-primary">craft.</span></h2><p className="muted max-w-md leading-7">A versatile toolkit spanning software development, AI-assisted workflows, web platforms, and practical technology operations.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2">{groups.map(({ icon: Icon, title, items }) => <article key={title} className="panel p-6"><div className="mb-5 flex items-center gap-3"><span className="rounded-xl bg-primary/10 p-3 text-primary"><Icon size={20} /></span><h3 className="font-bold text-white">{title}</h3></div><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.025] px-3 py-2 text-xs text-slate-300">{item}</span>)}</div></article>)}</div></div></section> }
