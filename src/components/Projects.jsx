import { useState } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { projects } from '../data'

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const panelId = `details-${project.id}`

  return (
    <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-line">
      {project.image ? (
        <img src={project.image} alt={`Screenshot of ${project.title}`} className="h-44 w-full object-cover" />
      ) : (
        <div
          aria-hidden="true"
          style={{ background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
          className="flex h-44 items-end p-5"
        >
          <span className="font-display text-6xl font-light text-white/90">{project.title.charAt(0)}</span>
        </div>
      )}

      <div className="p-6">
        <h3 className="font-display text-2xl font-medium">{project.title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full bg-paper px-3 py-1 text-xs font-medium ring-1 ring-line">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-white"
          >
            {open ? 'Hide details' : 'View details'}
          </button>
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline decoration-violet-glow decoration-2 underline-offset-4"
            >
              Open live site
            </a>
          )}
        </div>

        <div
          id={panelId}
          className={`grid transition-[grid-template-rows] duration-300 ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm leading-relaxed">
              {project.details.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-glow" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <Reveal>
        <p className="mb-10 max-w-xl text-lg text-muted">
          Work samples from my classes. Open a project to see what I made and how.
        </p>
      </Reveal>
      <ul className="grid items-start gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} as="li" delay={(i % 2) * 120}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
