export const PERSONAL = {
  name: 'Ismaeil Mohammed',
  firstName: 'Ismaeil',
  lastName: 'Mohammed',
  role: 'Software Engineer',
  location: 'Dallas, TX',
  remote: 'Open to remote',
  email: 'ismaeil.mohammed99@gmail.com',
  github: 'https://github.com/itsasmile',
  githubLabel: 'github.com/itsasmile',
  linkedin: 'https://linkedin.com/in/Ismaeil-Mohammed/',
  linkedinLabel: 'linkedin.com/in/IsmaeilMohammed',
  resume: '/resume.pdf',
  tagline: '"I don\'t just use AI tools — I build with them, on top of them, and I understand what\'s underneath."',
}

export const PROJECTS = [
  {
    title: 'Resume Analyzer',
    desc: 'An AI-powered tool that reads a resume and returns structured feedback — skill gap analysis, role fit scoring, and actionable rewrites. Built with Python and Azure OpenAI, deployed on Azure App Service.',
    stack: ['Python', 'Azure OpenAI', 'FastAPI', 'Azure App Service'],
    status: 'In production',
    live: false,
    github: null,
  },
  {
    title: 'Isla — Discord Bot',
    desc: 'A Discord bot that served 30,000+ active users across multiple servers. Features include server moderation, a currency and economy system, a virtual shop, user rating system, and interactive gif commands. Originally built in Python — currently being rebuilt with cleaner architecture.',
    stack: ['Python', 'discord.py', 'SQLite'],
    status: 'Rebuilding',
    live: false,
    github: null,
  },
  {
    title: 'Shopperators',
    desc: 'A full-stack grocery shopping platform built with a team of four. Features user authentication, product browsing by category, a shopping cart with order summary, and a personal shopping list with real-time quantity tracking.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Remult'],
    status: 'Built',
    live: false,
    github: 'https://github.com/Itsasmile/shopperators',
  },
]


export const PROGRESS_STEPS = ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4']
export const CURRENT_STEP = 0 // 0-indexed — update as you progress
