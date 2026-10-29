import type { Experience } from '@/types';

export const experience: Experience[] = [
  {
    period: 'Oct 2025 – Present',
    role: 'Intern AI/ML Engineer',
    company: 'Insharp Technologies',
    bullets: [
      "Designed AI-powered features for a women's clothing platform — virtual fit-on room, measurement suggestions, body-type outfit recommendations, and intelligent outfit pairing.",
      'Integrated LLM-powered services (Gemini-based APIs) for personalized styling insights and enhanced user experience.',
      'Developed the full frontend in Next.js & Tailwind CSS, with complete backend integration for client and admin portals.',
      'Collaborated on model fine-tuning and API orchestration using Python, FastAPI, PostgreSQL, Swagger, and Postman.',
      'Deployed ML components (including linear regression) within the production pipeline using Git & GitHub.',
    ],
    tech: [
      'Python',
      'FastAPI',
      'Next.js',
      'Tailwind CSS',
      'PostgreSQL',
      'Gemini API',
      'Linear Regression',
    ],
  },
  {
    period: 'Sep 2024 – Mar 2025',
    role: 'Intern Web Developer',
    company: 'Department of Archaeology — University of Peradeniya',
    bullets: [
      'Developed the official responsive website for the Department of Archaeology using PHP and React.',
      'Utilised Git and GitHub for version control and team collaboration across the development cycle.',
    ],
    tech: ['PHP', 'React', 'Git', 'GitHub'],
  },
];
