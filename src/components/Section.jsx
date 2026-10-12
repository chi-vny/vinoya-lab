import Aurora from './Aurora'
import Reveal from './Reveal'

export default function Section({ id, title, tone = 'light', children }) {
  const dark = tone === 'dark'
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative scroll-mt-16 overflow-hidden px-6 py-24 sm:px-10 lg:py-32 ${
        dark ? 'bg-night text-white' : 'bg-paper text-ink'
      }`}
    >
      {dark && <Aurora />}
      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <h2
            id={`${id}-title`}
            className="font-display text-4xl font-light tracking-tight sm:text-6xl"
          >
            {title}
          </h2>
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
