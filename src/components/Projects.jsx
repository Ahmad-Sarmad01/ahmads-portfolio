import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { useEffect, useState } from 'react'

const assetPath = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

function ScreenshotCarousel({ images, title, assetPath }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [images.length])

  const showPrevious = () => {
    setActiveIndex((current) =>
      (current - 1 + images.length) % images.length
    )
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length)
  }

  return (
    <div className="group/carousel relative h-full w-full overflow-hidden rounded-lg">
      {images.map((src, index) => (
        <img
          key={src}
          src={assetPath(src)}
          alt={`${title} screenshot ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
            index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          loading="lazy"
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-white opacity-0 transition hover:bg-black/80 group-hover/carousel:opacity-100 focus:opacity-100"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-white opacity-0 transition hover:bg-black/80 group-hover/carousel:opacity-100 focus:opacity-100"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show screenshot ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-6 bg-white'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}


function ProjectDescription({ text }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <p
        className={`text-sm leading-6 text-white/60 ${
          expanded ? '' : 'line-clamp-3'
        }`}
      >
        {text}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="mt-2 text-sm font-medium text-[#2dd4bf] transition hover:text-white"
      >
        {expanded ? 'View less' : 'View more'}
      </button>
    </div>
  )
}

const projects = [
  {
    title: 'ULTRON',
    type: 'AI-POWERED PERSONAL COMPANION',
    desc: 'ULTRON is an interactive AI companion built around conversational intelligence, voice interaction, and a distinctive futuristic interface. It integrates multiple AI providers, supports spoken responses and conversation context, and includes persistent memory, mission and reminder management, mood and personality modes, system monitoring, and vision-related features. Its immersive interface includes a 3D ULTRON core with hand-gesture interaction support.',
    stack: [
      'Python',
      'FastAPI',
      'Google Gemini',
      'Groq',
      'OpenRouter',
      'Mistral',
      'Edge TTS',
      'SQLite',
      'MediaPipe',
      'React 19',
    ],
    images: ['/projects/ultron.png', '/projects/ultron-2.png'],
    live: 'https://ultron-ahmad.vercel.app/',
    github: 'https://github.com/Ahmad-Sarmad01/ULTRON',
  },
  {
    title: 'ToolQS',
    type: 'ALL-IN-ONE PRODUCTIVITY TOOLKIT',
    desc: 'ToolQS is a multi-purpose web platform that brings document processing, image utilities, academic and financial calculators, and everyday productivity tools into one interface. Its features include PDF merging and splitting, PDF-to-Word and Word-to-PDF conversion, image-to-PDF conversion, image compression, QR code generation, a resume builder, word counting, unit conversion, GPA and grade calculators, loan/EMI calculations, and an image background-removal workflow. The platform also includes a tool directory, informational pages, and a blog.',
    stack: [
      'TensorFlow',
      'BodyPix',
      'pdf-lib',
      'Mammoth',
      'Framer Motion',
      'APIs',
      'MongoDB',
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind',
    ],
    image: '/projects/toolqs.png',
    live: 'https://toolqs.vercel.app/',
    github: 'https://github.com/Ahmad-Sarmad01/toolqs',
  },
  {
    title: 'MediEase',
    type: 'FULL-STACK HOSPITAL MANAGEMENT SYSTEM',
    desc: 'MediEase is a hospital management platform with separate patient-facing and administrative portals backed by a shared API and MongoDB database. Patients can explore doctors and medical services, request appointments, browse medicines, manage medicine orders, and access laboratory tests and bookings. The administration portal provides dedicated modules for managing doctors, patients, appointments, medicines, orders, laboratory tests, and lab bookings. The system uses API-based communication, database models, and authentication-related backend services to organize healthcare workflows.',
    stack: [
      'React',
      'Vite',
      'Tailwind',
      'Router',
      'Axios',
      'Node',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcryptjs',
      'Recharts',
    ],
    image: '/projects/mediease.png',
    demos: [
      {
        label: 'Patient Portal',
        url: 'https://mediease-public.vercel.app/',
      },
      {
        label: 'Admin Portal',
        url: 'https://mediease-admin.vercel.app/',
      },
    ],
    github: 'https://github.com/Ahmad-Sarmad01/mediease-hms',
  },
  {
    title: 'Employee Portal',
    type: 'EMPLOYEE SELF-SERVICE & MANAGEMENT',
    desc: 'Employee Portal is a web-based employee self-service application with account authentication and protected dashboard pages. It brings together attendance check-in/check-out, task management, leave requests, payroll views, team information, announcements, a calendar, employee profiles, achievements, learning resources, support, and reports. Firebase Authentication handles user sign-in, while Cloud Firestore stores application records. The interface also includes data visualizations and PDF payslip generation, with payroll demo data used in the current implementation.',
    stack: [
      'React',
      'Tailwind',
      'Firebase Authentication',
      'Cloud Firestore',
      'Router 7',
      'Chart.js',
      'jsPDF',
      'Framer Motion',
    ],
    image: '/projects/ems.png',
    live: 'https://employeeportal-ahmad.vercel.app/',
    github: 'https://github.com/Ahmad-Sarmad01/react-rms',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="section-wrap">
        <p className="eyebrow mb-4">03 / Selected work</p>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="section-title">
            Proof over <span className="text-primary">promises.</span>
          </h2>

          <p className="muted max-w-sm leading-6">
            Four real projects. Different challenges. Built with a focus on
            practical solutions, thoughtful interfaces, and useful functionality.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.n}
              className="panel group flex flex-col overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
            <div className="grid-bg relative mb-6 aspect-[16/10] overflow-hidden rounded-xl border border-white/5 bg-[#0b1113]">
              {p.images ? (
                <ScreenshotCarousel
                  images={p.images}
                  title={p.title}
                  assetPath={assetPath}
                />
              ) : (
                <img
                  src={assetPath(p.image)}
                  alt={`${p.title} application screenshot`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              )}
              <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-[#0b1113]/90 px-3 py-1 font-mono text-[9px] tracking-widest text-primary">
                {p.type}
              </span>

              <span className="absolute bottom-3 right-3 font-mono text-4xl font-medium text-white/70">
                {p.n}
              </span>
            </div>
              <h3 className="text-xl font-bold text-white transition group-hover:text-primary">
                {p.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                <ProjectDescription text={p.desc} />
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-white/[.05] px-2 py-1 font-mono text-[10px] text-slate-400"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="accent-line my-5" />

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs">
                {p.demos ? (
                  p.demos.map((demo) => (
                    <a
                      key={demo.label}
                      className="flex items-center gap-2 text-primary transition hover:text-white"
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {demo.label} <FiArrowUpRight size={15} />
                    </a>
                  ))
                ) : p.live ? (
                  <a
                    className="flex items-center gap-2 text-primary transition hover:text-white"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live <FiArrowUpRight size={15} />
                  </a>
                ) : (
                  <span className="text-slate-600">Demo link pending</span>
                )}

                {p.github && (
                  <a
                    className="flex items-center gap-2 text-slate-300 transition hover:text-primary"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={15} /> Source code
                    <FiArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}