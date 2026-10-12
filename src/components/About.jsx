import Section from './Section'
import Reveal from './Reveal'
import { about, profile } from '../data'

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-6 md:col-span-3">
          {about.paragraphs.map((p, i) => (
            <Reveal key={p} delay={i * 120}>
              <p className="text-lg leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="md:col-span-2">
          <dl className="space-y-8 border-l-2 border-line pl-6">
            <div>
              <dt className="font-display text-xl">Name</dt>
              <dd className="mt-1 text-muted">
                {profile.firstName} {profile.lastName}
              </dd>
              <dd className="text-muted">{profile.role}</dd>
            </div>
            <div>
              <dt className="font-display text-xl font-medium">School</dt>
              <dd className="mt-1 text-muted">{profile.school}</dd>
              <dd className="text-muted">{profile.location}</dd>
            </div>
            <div>
              <dt className="font-display text-xl font-medium">Interests</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {about.interests.map((i) => (
                  <span key={i} className="rounded-full bg-white px-3 py-1 text-sm font-medium ring-1 ring-line">
                    {i}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
