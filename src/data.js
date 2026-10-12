// ============================================================
// EDIT THIS FILE to change what shows up on your portfolio.
// Anything marked "UPDATE" is a placeholder — replace it with
// your real info before you submit.
// ============================================================

export const profile = {
  firstName: 'Jurichin',
  lastName: 'Vinoya', // UPDATE
  role: 'BSIT student',
  school: 'Cavite State University – Tanza Campus',
  location: 'Tanza, Cavite, Philippines',
  email: 'jurichin.vinoya@cvsu.edu.ph', // UPDATE
  socials: [
    { label: 'GitHub', href: 'https://github.com/chi-vny' }, // UPDATE


  ],
}

export const about = {
  paragraphs: [
    "Hi,  I'm Juri a 20-year-old third-year Bachelor of Science in Information Technology (BSIT) student at Cavite State University – Tanza Campus. I'm passionate about learning new technologies, developing projects, and improving my programming skills. Currently, I'm exploring web development and building projects to enhance my knowledge and experience in IT. My goal is to become a skilled IT professional and continue growing as a developer.",
  ],
  interests: [
    'Building web apps',
    'Learning new tools',
    'Editing Videos',
    'Content Creation',
    'Gaming',
  ], // UPDATE — add your own interests
}

export const projects = [
  {
    id: 'calculator',
    title: 'Chizu Calculator',
    summary:
      'A calculator website with digits, four operations, clear and equals buttons, and a user guide.',
    details: [
      'Made for DCIT 26 Laboratory 1.',
      'Built with React, Vite and Tailwind CSS.',
      'Uses React state for the display and the current operation.',
    ],
    tags: ['React', 'Tailwind CSS', 'Vite'],
    link: '#', // UPDATE — your deployed calculator URL
    gradient: ['#8b5cf6', '#d946ef'],
    image: null, // UPDATE — put a screenshot path here, e.g. '/calculator.png'
  },
  {
    id: 'todo',
    title: 'To-Do List',
    summary:
      'Add tasks, mark each one Done or Not Done, and delete tasks you no longer need.',
    details: [
      'Made for DCIT 26 Laboratory 2.',
      'Each task has its own status and a toggle button.',
      'Includes a user guide that explains every button.',
    ],
    tags: ['React', 'Tailwind CSS', 'useState'],
    link: '#', // UPDATE — your deployed to-do list URL
    gradient: ['#6366f1', '#5eead4'],
    image: null,
  },
  
  {
    id: 'portfolio',
    title: 'This E-Portfolio',
    summary:
      'The website you are looking at, built as my DCIT 26 midterm laboratory.',
    details: [
      'Reusable React components, one per section.',
      'Tailwind CSS for layout, color and responsive design.',
      'Interactive features: accent color picker, project details, skills filter, mobile menu and a validated contact form.',
    ],
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    link: null,
    gradient: ['#d946ef', '#6366f1'],
    image: null,
  },
]

export const resume = {
  education: [
    {
      title: 'Bachelor of Science in Information Technology',
      place: 'Cavite State University – Tanza Campus',
      when: '2024 - Present', // UPDATE — e.g. "2023 – Present"
    },
    
    {
      title: 'Compunter Programming',
      place: 'Tanza National Trade School',
      when: '2022 - 2024', // UPDATE — e.g. "2023 – Present"
    },
  ],
  experience: [
    
  {
    note: 'Developed personal projects, including a calculator, a to-do list, and an e-portfolio using React and Tailwind CSS.',
  },
  {
    note: 'Applied React components, state management, and event handling to create interactive and responsive user interfaces.',
  },
  {
    note: 'Continuously improving my web development skills through hands-on projects and practice.',
  },
],

    // UPDATE — add internships, part-time jobs or organizations here

  skills: [
    { name: 'React', group: 'Web' },
    { name: 'Tailwind CSS', group: 'Web' },
    { name: 'Bootstrap', group: 'Web' },
    { name: 'HTML and CSS', group: 'Web' },
    { name: 'JavaScript', group: 'Web' },
    { name: 'Git and GitHub', group: 'Tools' },
    { name: 'Vite', group: 'Tools' },
    { name: 'Vercel', group: 'Tools' },
    { name: 'Java', group: 'Web' },
  ],
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

// Builds the text file for the "Download CV" button
export function buildCvText() {
  const lines = []
  lines.push(`${profile.firstName} ${profile.lastName}`)
  lines.push(profile.role)
  lines.push(`${profile.location} | ${profile.email}`)
  lines.push('')
  lines.push('EDUCATION')
  resume.education.forEach((e) => {
    lines.push(`- ${e.title}, ${e.place} (${e.when})`)
  })
  lines.push('')
  lines.push('EXPERIENCE')
  resume.experience.forEach((e) => {
    lines.push(`- ${e.title}, ${e.place} (${e.when})`)
    lines.push(`  ${e.note}`)
  })
  lines.push('')
  lines.push('SKILLS')
  lines.push(resume.skills.map((s) => s.name).join(', '))
  lines.push('')
  lines.push('PROJECTS')
  projects.forEach((p) => lines.push(`- ${p.title}: ${p.summary}`))
  return lines.join('\n')
}
