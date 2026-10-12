import { useState } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your name (at least 2 characters).'
  if (!emailPattern.test(values.email)) errors.email = 'Enter a valid email, like name@example.com.'
  if (values.message.trim().length < 10) errors.message = 'Write a message of at least 10 characters.'
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-rose-300">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const inputClass = (key) =>
    `mt-2 w-full rounded-2xl bg-white/10 px-4 py-3 text-white placeholder-white/40 ring-1 transition-shadow focus:outline-none focus:ring-2 ${
      errors[key] ? 'ring-rose-300' : 'ring-white/25 focus:ring-white'
    }`

  const handleChange = (e) => {
    const { name, value } = e.target
    const next = { ...values, [name]: value }
    setValues(next)
    // Re-check as the visitor types, but only after an error was shown
    if (errors[name]) setErrors(validate(next))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) setSent(true)
  }

  const reset = () => {
    setValues({ name: '', email: '', message: '' })
    setErrors({})
    setSent(false)
  }

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio message from ${values.name}`,
  )}&body=${encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`)}`

  const linkClass =
    'font-medium underline decoration-magenta-glow decoration-2 underline-offset-4 hover:text-white'

  return (
    <Section id="contact" title="Contact" tone="dark">
      <Reveal>
        <p className="max-w-xl text-lg text-white/75">
          Want to work together or just say hi? Send a message or reach me here.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/90">
          <a href={`mailto:${profile.email}`} className={linkClass}>
            {profile.email}
          </a>
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={linkClass}>
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150} className="mt-12 max-w-xl">
        {sent ? (
          <div role="status" className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/25 backdrop-blur">
            <h3 className="font-display text-3xl font-light">Thanks, {values.name.trim()}!</h3>
            <p className="mt-2 text-white/75">
              Your message is ready. Open it in your email app to send it to me.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={mailto} className="rounded-full bg-white px-6 py-3 font-medium text-night">
                Open in email app
              </a>
              <button
                type="button"
                onClick={reset}
                className="rounded-full px-6 py-3 font-medium ring-1 ring-white/40 hover:bg-white/10"
              >
                Write another message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <Field id="name" label="Your name" error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={inputClass('name')}
              />
            </Field>
            <Field id="email" label="Your email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={inputClass('email')}
              />
            </Field>
            <Field id="message" label="Message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={values.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={inputClass('message')}
              />
            </Field>
            <button
              type="submit"
              className="rounded-full bg-white px-7 py-3 font-medium text-night transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
          </form>
        )}
      </Reveal>

      <div className="mt-20 space-y-1 text-sm font-light text-white/50">
        <p>
          © 2026 {profile.firstName} {profile.lastName}, {profile.school}
        </p>
        <p>
          Hero artwork: Benedetta (Covenant skin) from Mobile Legends: Bang Bang, © Moonton. Shown here for a
          non-commercial school project.
        </p>
      </div>
    </Section>
  )
}
