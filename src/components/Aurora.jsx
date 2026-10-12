// Dark background with drifting purple "aurora" light.
export default function Aurora() {
  const blobs = [
    { c: '#8f69e7', size: '38rem', top: '-10%', left: '-8%', d: '22s', delay: '0s' },
    { c: '#d946ef', size: '30rem', top: '35%', left: '55%', d: '26s', delay: '-8s' },
    { c: '#6366f1', size: '34rem', top: '60%', left: '5%', d: '24s', delay: '-4s' },
    { c: '#5eead4', size: '18rem', top: '5%', left: '65%', d: '30s', delay: '-12s' },
  ]
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <div
          key={i}
          className="aurora-blob"
          style={{
            background: b.c,
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            animationDuration: b.d,
            animationDelay: b.delay,
            opacity: b.c === '#5eead4' ? 0.3 : undefined,
          }}
        />
      ))}
    </div>
  )
}
