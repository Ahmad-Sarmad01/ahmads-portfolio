import { useState } from 'react'
import { FiArrowUpRight, FiMail, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()

    const recipient = 'stonedinzone@gmail.com'
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `From: ${form.name}\nReply email: ${form.email}\n\n${form.message}`
    )

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
  }
  return <section id="contact" className="section-pad"><div className="section-wrap"><div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow mb-4">07 / Your next move</p><h2 className="section-title">Have an idea?<br /><span className="text-primary">Let’s build it.</span></h2><p className="muted mt-5 max-w-md leading-7">Have a project, opportunity, or interesting problem? Send a note and let’s talk about what we can make together.</p><div className="mt-8 space-y-4 text-sm text-slate-400"><p className="flex items-center gap-3"><FiMail className="text-primary" /> stonedinzone@gmail.com <span className="text-[10px] text-slate-600"></span></p><p className="flex items-center gap-3"><FiMapPin className="text-primary" /> Pakistan · Available remotely</p></div></div><form onSubmit={submit} className="panel p-5 sm:p-7"><div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-semibold text-slate-300">Your name<input required name="name" value={form.name} onChange={update} placeholder="Name" className="mt-2 min-h-12 w-full rounded-xl border border-white/10 bg-[#0b1113] px-4 text-sm text-white placeholder:text-slate-600 focus:border-primary/60 focus:outline-none" /></label><label className="text-xs font-semibold text-slate-300">Email address<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" className="mt-2 min-h-12 w-full rounded-xl border border-white/10 bg-[#0b1113] px-4 text-sm text-white placeholder:text-slate-600 focus:border-primary/60 focus:outline-none" /></label></div><label className="mt-5 block text-xs font-semibold text-slate-300">Your message<textarea required name="message" value={form.message} onChange={update} rows={5} placeholder="Tell me a little about what you have in mind..." className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#0b1113] p-4 text-sm text-white placeholder:text-slate-600 focus:border-primary/60 focus:outline-none" /></label><button type="submit" className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-[#07110f] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1113]">Open email draft <FiArrowUpRight size={17} /></button><p className="mt-4 text-xs leading-5 text-slate-500">Your message will open in your email app, ready for you to review and send.</p></form></div></div></section>
}
