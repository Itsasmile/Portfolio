export const PERSONAL = {
  name:       'Ismaeil Mohammed',
  firstName:  'Ismaeil',
  lastName:   'Mohammed',
  role:       'Software Engineer',
  location:   'Dallas, TX',
  remote:     'Open to remote',
  email:      'ismaeil.mohammed99@gmail.com',
  github:     'https://github.com/itsasmile',
  githubLabel:'github.com/itsasmile',
  linkedin:   'https://linkedin.com/in/Ismaeil-Mohammed/',
  linkedinLabel: 'linkedin.com/in/IsmaeilMohammed',
  resume:     '/resume.pdf',
  tagline:    '"I don\'t just use AI tools — I build with them, on top of them, and I understand what\'s underneath."',
  summary:    'CS graduate building AI-powered systems on Microsoft Azure — working toward roles in cloud engineering, AI engineering, and solutions architecture.',
}

export const PROJECTS = [
  {
    title:  'Resume Analyzer',
    desc:   'An AI-powered tool that reads a resume and returns structured feedback — skill gap analysis, role fit scoring, and actionable rewrites. Built with Python and Azure OpenAI, deployed on Azure App Service.',
    stack:  ['Python', 'Azure OpenAI', 'FastAPI', 'Azure App Service'],
    status: 'In production',
    live:   false,
    github: null,
  },
  {
    title:  'AI Study Assistant — RAG',
    desc:   'A retrieval-augmented generation chatbot that lets users upload documents and query them conversationally. Built with C#, Semantic Kernel, and Azure AI Search. Deployed on Azure Container Apps with a full CI/CD pipeline via GitHub Actions.',
    stack:  ['C#', 'Semantic Kernel', 'Azure OpenAI', 'Azure AI Search', 'Container Apps'],
    status: 'Planned',
    live:   false,
    github: null,
  },
]

export const CURRENTLY_BUILDING = 'Portfolio website · Setting up Azure account · Starting AZ-900 on Microsoft Learn'

export const PROGRESS_STEPS = ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4']
export const CURRENT_STEP = 0 // 0-indexed — update as you progress
