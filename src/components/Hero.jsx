import Aurora from './Aurora'
import { buildCvText, profile } from '../data'

export function downloadCv() {
  const blob = new Blob([buildCvText()], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${profile.firstName}-CV.txt`
  a.click()
  URL.revokeObjectURL(url)
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative flex min-h-screen items-end overflow-hidden bg-night px-6 text-white sm:px-10 lg:items-center"
    >
      <Aurora />

      {/* Artwork on the right, fading into the background */}
      <div className="hero-fade absolute right-0 top-0 h-[64%] w-full lg:h-full lg:w-[60%]">
        
        {/* Soft violet tint so the artwork matches the aurora colors */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-br from-violet-glow/45 to-magenta-glow/20 mix-blend-soft-light"
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl pb-24 pt-32 lg:pb-16">
        <p className="font-display text-xl sm:text-2xl text-white tracking-wide font-medium">
         Hi, I'm</p>
        <h1 id="home-title"className="mt-3 flex flex-col font-display text-[clamp(3.75rem,13vw,10rem)] leading-[0.9] tracking-tight">
               <span className="text-purple-300">Jurichin</span>
               <span className="text-pink-400">Vinoya</span>
        </h1>
        <p className="mt-3 flex items-center gap-4 font-display text-2xl text-white/85 sm:text-3xl">
          <span aria-hidden="true" className="h-px w-12 bg-linear-to-r from-violet-glow to-magenta-glow" />
          
        </p>

        <p className="mt-10 max-w-md text-base font-light leading-relaxed text-white/75 sm:text-lg">
          {profile.intro}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3 font-medium text-night transition-transform hover:-translate-y-0.5"
          >
            See my projects
          </a>
          <button
            type="button"
            onClick={downloadCv}
            className="rounded-full px-7 py-3 font-medium text-white ring-1 ring-white/40 transition-colors hover:bg-white/10"
          >
            Download CV
          </button>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About Me"
        className="nudge absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-sm font-light text-white/60 sm:block"
      >
        Scroll down
      </a>
    </section>
  )
}
