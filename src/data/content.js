export const PERSONAL = {
  name:       'Ismaeil Mohammed',
  firstName:  'Ismaeil',
  lastName:   'Mohammed',
  role:       'Cloud & AI Engineer',
  location:   'Garland, TX',
  remote:     'Open to remote',
  email:      'your@email.com',
  github:     'https://github.com/yourusername',
  githubLabel:'github.com/yourusername',
  linkedin:   'https://linkedin.com/in/yourusername',
  linkedinLabel: 'linkedin.com/in/yourusername',
  resume:     '/resume.pdf',
  tagline:    '"I don\'t just use AI tools — I build with them, on top of them, and I understand what\'s underneath."',
  summary:    'CS graduate building AI-powered systems on Microsoft Azure — working toward roles in cloud engineering, AI engineering, and solutions architecture.',
}

export const CERTIFICATIONS = [
  { name: 'AZ-900 Azure Fundamentals',  status: 'In Progress', active: true  },
  { name: 'AZ-104 Azure Administrator', status: 'Upcoming',    active: false },
  { name: 'AI-102 Azure AI Engineer',   status: 'Upcoming',    active: false },
]

export const SKILLS = [
  {
    label: 'Languages',
    items: ['C# · .NET', 'Python', 'SQL', 'HTML · CSS · JS'],
  },
  {
    label: 'Cloud · Azure',
    items: ['Azure OpenAI Service', 'Azure AI Search', 'App Service · Functions', 'Container Apps'],
  },
  {
    label: 'AI Engineering',
    items: ['RAG Pipelines', 'Semantic Kernel', 'LangChain', 'Prompt Engineering'],
  },
  {
    label: 'DevOps · Tooling',
    items: ['GitHub Actions · CI/CD', 'Docker', 'Git', 'VS Code'],
  },
  {
    label: 'Fundamentals',
    items: ['OOP · Design Patterns', 'REST APIs', 'DSA', 'Unit Testing'],
  },
  {
    label: 'Architecture',
    items: ['Cloud-Native Design', 'Microservices', 'Serverless', 'System Design'],
  },
]

export const ROADMAP = [
  {
    period:  'Month 1–2',
    title:   'Foundations Sprint',
    desc:    'C# fundamentals, Python DSA via NeetCode, portfolio live on Vercel, first AI project using Azure OpenAI API. AZ-900 exam at end of Month 2.',
    tags:    ['C#', 'Python', 'Azure OpenAI', 'AZ-900'],
    active:  true,
    done:    false,
  },
  {
    period:  'Month 3',
    title:   'Azure Infrastructure + AI Entry',
    desc:    'AZ-104 deep dive covering networking, IAM, and storage. Build a Python RAG chatbot using Azure AI Search + Azure OpenAI. Two portfolio projects live.',
    tags:    ['AZ-104', 'RAG', 'Azure AI Search', 'Python'],
    active:  false,
    done:    false,
  },
  {
    period:  'Month 4',
    title:   'Semantic Kernel + AI-102',
    desc:    'Build a C# + Semantic Kernel AI application on Azure. Pass AI-102. Begin system design study and LeetCode medium ramp-up for interviews.',
    tags:    ['Semantic Kernel', 'C#', 'AI-102', 'System Design'],
    active:  false,
    done:    false,
  },
  {
    period:  'Month 5–6',
    title:   'Capstone + Job Ready',
    desc:    'Full RAG-based AI Study Assistant deployed on Azure Container Apps with CI/CD. Portfolio polished. Actively applying to cloud and AI engineering roles.',
    tags:    ['Container Apps', 'GitHub Actions', 'Interview Prep', 'Applying'],
    active:  false,
    done:    false,
  },
]

export const PROJECTS = [
  {
    index:  '001',
    title:  'Resume Analyzer',
    desc:   'An AI-powered tool that reads a resume and returns structured feedback — skill gap analysis, role fit scoring, and actionable rewrites. Built with Python and Azure OpenAI, deployed on Azure App Service.',
    stack:  ['Python', 'Azure OpenAI', 'FastAPI', 'Azure App Service'],
    status: 'Month 2',
    live:   false,
    github: null,
  },
  {
    index:  '002',
    title:  'AI Study Assistant — RAG',
    desc:   'A retrieval-augmented generation chatbot that lets users upload documents and query them conversationally. Built with C#, Semantic Kernel, and Azure AI Search. Deployed on Azure Container Apps with a full CI/CD pipeline via GitHub Actions.',
    stack:  ['C#', 'Semantic Kernel', 'Azure OpenAI', 'Azure AI Search', 'Container Apps'],
    status: 'Month 4',
    live:   false,
    github: null,
  },
]

export const CURRENTLY_BUILDING = 'Portfolio website · Setting up Azure account · Starting AZ-900 on Microsoft Learn'

export const PROGRESS_STEPS = ['Month 1', 'Month 2', 'Month 3', 'Month 4']
export const CURRENT_STEP = 0 // 0-indexed — update as you progress
