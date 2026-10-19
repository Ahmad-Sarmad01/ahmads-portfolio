
import { FiBookOpen } from 'react-icons/fi'

export default function Education() {
  return (
    <section
      id="education"
      className="section-pad border-y border-white/5 bg-white/[.015]"
    >
      <div className="section-wrap">
        <p className="eyebrow mb-4">06 / Background</p>

        <h2 className="section-title">
          The foundation <span className="text-primary">matters.</span>
        </h2>

        <article className="panel mt-8 flex gap-5 p-6 sm:p-8">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <FiBookOpen size={23} />
          </span>

          <div>
            <p className="font-mono text-xs tracking-widest text-primary">
              EDUCATION
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Bachelor of Science in Computer Science (BSCS)
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              COMSATS University Islamabad · 2021–2025
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
              Graduated with honours, building an academic foundation in
              computer science, software development, and problem-solving.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
