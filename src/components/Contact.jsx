import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Clock, Github, Mail } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import { contactMethods, profile } from '../data'

const ICONS = { Mail, Github, FaXTwitter }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || ''} ${form.email ? `(${form.email})` : ''}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="px-6 py-20 border-t border-line">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[11px] tracking-widest text-faint uppercase mb-6">
          Let's Work Together
        </p>

        <div className="border border-line rounded-2xl bg-surface overflow-hidden mb-6">
          <div className="p-6 sm:p-7">
            <h2 className="font-display text-2xl font-semibold text-ink mb-2">Get in Touch</h2>
            <p className="text-muted text-[15px] leading-relaxed max-w-md">
              Choose your preferred method to connect and let's discuss the role or project.
            </p>
          </div>

          <div className="border-t border-line">
            {contactMethods.map((m) => {
              const Icon = ICONS[m.icon]
              const external = m.href.startsWith('http')
              return (
                <a
                  key={m.title}
                  href={m.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 px-6 sm:px-7 py-5 border-b border-line last:border-b-0 hover:bg-surface2 transition-colors"
                >
                  <Icon size={18} className="text-faint shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-ink text-[15px] font-medium truncate">{m.title}</p>
                    <p className="text-faint text-xs mt-0.5">{m.subtitle}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-faint group-hover:text-accent transition-colors shrink-0"
                  />
                </a>
              )
            })}
          </div>

          <div className="border-t border-line px-6 sm:px-7 py-5 flex flex-col sm:flex-row gap-3 sm:gap-8">
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <Clock size={14} className="text-faint" /> Replies within a day
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <CheckCircle2 size={14} className="text-faint" /> Open to full-time & freelance
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-line rounded-2xl bg-surface p-6 sm:p-7"
        >
          <h3 className="font-display text-xl font-semibold text-ink mb-2">Send a Message</h3>
          <p className="text-muted text-[15px] leading-relaxed mb-6 max-w-md">
            Prefer to write? Fill this out and it'll open in your mail app, ready to send.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="bg-bg border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-faint focus:outline-none focus:border-accent/50 transition-colors"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="bg-bg border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-faint focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={4}
            className="w-full bg-bg border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-faint focus:outline-none focus:border-accent/50 transition-colors resize-none mb-4"
          />
          <button
  className="
    px-8
    py-4
    rounded-xl
    font-semibold
    transition-all
    duration-300

    bg-ink
    text-bg

    hover:opacity-90
    disabled:opacity-50
  "
>
  Send Message
</button>
        </form>

<div className="mt-8 border border-line rounded-2xl bg-surface p-7">

  <div className="flex gap-4">

    <span className="text-4xl text-faint">"</span>

    <div>

      <p className="text-lg text-ink leading-8 italic">
        The unexamined life is not worth living.
      </p>

      <p className="mt-5 text-muted">
        — Socrates
      </p>
    </div>

  </div>

</div>

      </div>
    </section>
  )
}
