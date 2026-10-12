import { useState } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { resume } from '../data'
import { downloadCv } from './Hero'

function Timeline({ heading, items }) {
  return (
    <div>
      <Reveal>
        <h3 className="font-display text-3xl font-light">{heading}</h3>
      </Reveal>
      {/* A timeline line is fine here: this content really is a sequence */}
      <ol className="mt-6 space-y-8 border-l-2 border-line pl-7">
        {items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 100} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full bg-linear-to-br from-violet-glow to-magenta-glow ring-4 ring-paper"
            />
            <p className="text-lg font-medium">{item.title}</p>
            <p className="text-muted">{item.place}</p>
            <p className="text-sm text-muted">{item.when}</p>
            <p className="mt-2 leading-relaxed">{item.note}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

export default function Resume() {
  const groups = ['All', 'Web', 'Tools', ]
  const [group, setGroup] = useState('All')
  const shown = resume.skills.filter((s) => group === 'All' || s.group === group)

  return (
    <Section id="resume" title="Resume">
      <div className="space-y-16">
        <Timeline heading="Education" items={resume.education} />
        <Timeline heading="Experience" items={resume.experience} />

        <div>
          <Reveal>
            <h3 className="font-display text-3xl font-light">Skills</h3>
            <div role="group" aria-label="Filter skills" className="mt-6 flex flex-wrap gap-2">
              {groups.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGroup(g)}
                  aria-pressed={group === g}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    group === g ? 'bg-ink text-white' : 'bg-white text-ink ring-1 ring-line hover:bg-line/50'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </Reveal>
          <ul className="mt-6 flex flex-wrap gap-3" aria-live="polite">
            {shown.map((s) => (
              <li key={s.name} className="rounded-2xl bg-white px-4 py-2 font-medium ring-1 ring-line">
                {s.name}
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <button
            type="button"
            onClick={downloadCv}
            className="rounded-full bg-linear-to-r from-violet-glow to-magenta-glow px-7 py-3 font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Download CV
          </button>
        </Reveal>
      </div>
    </Section>
  )
}
