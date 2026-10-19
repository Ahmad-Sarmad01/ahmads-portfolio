
import { FiCode, FiLayers, FiRefreshCw } from 'react-icons/fi'

const services = [
  {
    icon: FiCode,
    no: '01',
    title: 'AI-Assisted Development',
    text: 'Develop and improve web applications using software development fundamentals and AI-assisted workflows for planning, coding, debugging, and reviewing.',
  },
  {
    icon: FiLayers,
    no: '02',
    title: 'Web Technologies & Integration',
    text: 'Build responsive interfaces, connect APIs and databases, and improve existing applications using modern web technologies.',
  },
  {
    icon: FiRefreshCw,
    no: '03',
    title: 'Technology Operations & Support',
    text: 'Support day-to-day workflows through task coordination, system monitoring, reporting, documentation, and structured problem-solving.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad border-y border-white/5 bg-white/[.015]"
    >
      <div className="section-wrap">
        <p className="eyebrow mb-4">04 / What I can help with</p>

        <h2 className="section-title">
          Useful work.
          <br />
          <span className="text-primary">Thoughtfully delivered.</span>
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map(({ icon: Icon, no, title, text }) => (
            <article
              key={no}
              className="flex gap-4 border-t border-white/10 py-6"
            >
              <span className="mt-1 text-primary">
                <Icon size={23} />
              </span>

              <div>
                <p className="font-mono text-xs text-slate-600">{no}</p>
                <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
