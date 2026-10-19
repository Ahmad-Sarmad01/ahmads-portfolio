import { motion } from 'framer-motion'
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Hero() {
  return <section id="hero" className="grid-bg relative flex min-h-[calc(100svh-76px)] items-center py-16 sm:py-20">
    <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
    <div className="section-wrap relative grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
      <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
        <p className="eyebrow mb-6 flex items-center gap-3"><span className="h-px w-8 bg-primary" /> AI · TECHNOLOGY · OPERATIONS</p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-.065em] text-white sm:text-6xl lg:text-7xl">
          Building with AI.
          <br />
          Thinking in systems.
          <br />
          <span className="glow text-primary">Making an impact.</span>
        </h1>
        <h2 className="mt-6 max-w-xl text-base font-semibold leading-7 text-white sm:text-lg">
          AI-Assisted Development, Technology &amp; Operations Professional
        </h2>    
        <p className="mt-4 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          I’m Ahmad Sarmad, an AI-Assisted Development, Technology &amp; Operations
          Professional. I combine software development knowledge, AI-assisted
          workflows, and practical operational experience to build useful
          applications, solve problems, and improve how work gets done.
        </p>
        <div className="mt-8 flex flex-wrap gap-3"><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-[#07110f] transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(45,212,191,.18)]">Explore my work <FiArrowUpRight size={17} /></button><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-primary/60">Let’s talk <FiArrowDownRight size={17} /></button></div>
        <div className="mt-9 flex gap-4"><a aria-label="GitHub profile" href="https://github.com/Ahmad-Sarmad01" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-primary/50 hover:text-primary"><FiGithub size={18} /></a><a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/muhammad-ahmad-849b2a2a8/?isSelfProfile=false" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-primary/50 hover:text-primary"><FiLinkedin size={18} /></a><span className="ml-2 self-center font-mono text-[10px] tracking-widest text-slate-600">BASED IN PAKISTAN · WORKING WORLDWIDE</span></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .12 }} className="mx-auto w-full max-w-[390px] lg:ml-auto">
        <div className="relative rounded-[28px] border border-primary/25 bg-[#11191c] p-3 shadow-[0_24px_100px_rgba(0,0,0,.32)]">
          <div className="absolute -right-3 -top-3 z-10 rounded-full border border-primary/30 bg-[#0b1113] px-4 py-2 font-mono text-[10px] text-primary">&lt; building /&gt;</div>
          <div className="relative flex aspect-[4/4.7] items-center justify-center overflow-hidden rounded-[20px] border border-white/5 bg-[radial-gradient(ellipse_at_50%_35%,rgba(45,212,191,.13),transparent_55%),linear-gradient(145deg,#172326,#0b1113)]">
            <img
              src={`${import.meta.env.BASE_URL}ahmad.jpeg`}
              alt="Ahmad Sarmad profile portrait"
              className="absolute inset-0 z-10 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            
            <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-[#0b1113]/95 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 z-30 flex items-end justify-between"><div><p className="text-xs text-primary">TECHNOLOGY & AI</p><p className="mt-1 text-xl font-bold text-white">Ahmad Sarmad</p></div><span className="rounded-full border border-primary/30 bg-[#0b1113]/70 px-3 py-2 font-mono text-xs text-primary">AI + TECH</span></div>
          </div>
          <div className="grid grid-cols-3 gap-2 p-3 text-center"><div><p className="font-mono text-lg font-bold text-white">01</p><p className="text-[10px] text-slate-500">Build</p></div><div><p className="font-mono text-lg font-bold text-white">02</p><p className="text-[10px] text-slate-500">Improve</p></div><div><p className="font-mono text-lg font-bold text-white">03</p><p className="text-[10px] text-slate-500">Deliver</p></div></div>
        </div>
      </motion.div>
    </div>
  </section>
}
