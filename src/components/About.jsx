import { FiCode, FiLayers, FiZap } from 'react-icons/fi'

const values = [
  {
    icon: FiCode,
    title: 'AI-Assisted Development',
    text: 'Using AI-supported workflows alongside software development knowledge to plan, build, debug, review, and improve applications.',
  },
  {
    icon: FiLayers,
    title: 'Technology & Systems',
    text: 'Connecting frontend interfaces, APIs, databases, and technical problem-solving to create useful, maintainable solutions.',
  },
  {
    icon: FiZap,
    title: 'Operations & Delivery',
    text: 'Organizing workflows, handling tasks and reports, monitoring systems, and supporting reliable day-to-day execution.',
  },
]

export default function About() { return <section id="about" className="section-pad"><div className="section-wrap"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow mb-4">01 / A little about me</p><h2 className="section-title">Curiosity in.<br /><span className="text-primary">Great products out.</span></h2></div><div>
<p className="text-lg leading-8 text-slate-300">
  I’m an AI-Assisted Development, Technology &amp; Operations Professional
  with a background in full-stack web development and practical
  operational workflows. I combine technical knowledge, AI-assisted
  problem-solving, and structured execution to build useful applications
  and help work move forward efficiently.
</p>
<p className="muted mt-4 leading-7">
  My experience spans software development, web technologies, task
  coordination, system monitoring, and reporting. I’m interested in
  opportunities where I can contribute across technology, development,
  and operations while continuing to grow professionally.
</p>
</div></div><div className="mt-12 grid gap-4 md:grid-cols-3">{values.map(({ icon: Icon, title, text }, i) => <article key={title} className="panel p-6 transition hover:-translate-y-1 hover:border-primary/30"><span className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary"><Icon size={21} /></span><p className="mb-2 font-mono text-xs text-slate-600">0{i + 1}</p><h3 className="text-lg font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>)}</div></div></section> }
