import type { Award, Certification, Education, Involvement } from '@/types';

export const education: Education[] = [
  {
    degree: 'BSc (Hons) in Statistics & Operations Research',
    institution: 'Faculty of Science — University of Peradeniya',
    period: '2021 – 2025',
    detail: 'Second Class Upper Division',
    coursework: [
      'Probability Theory',
      'Sampling Techniques',
      'Quality Control',
      'Regression Analysis',
      'Multivariate Methods',
      'Time Series Analysis',
      'Stochastic Processes',
      'Statistical Data Mining',
      'Financial Mathematics',
      'Operations Research',
      'Network Optimization',
      'Manufacturing & Logistics',
      'Linear Algebra',
      'Optimization Modeling',
      'OOP',
      'Data Structures',
      'Web Programming',
      'Database Management Systems',
      'Design & Analysis of Algorithms',
      'Artificial Intelligence',
      'Neural Networks & Deep Learning',
    ],
  },
  {
    degree: 'GCE Advanced Level — Physical Science',
    institution: 'Ruwanwella Central College',
    period: '2019',
    detail: 'Results: BBB · Z-Score: 1.5006',
  },
];

export const certifications: Certification[] = [
  {
    name: 'Data Warehousing Workshop — Snowflake',
    issuer: 'Snowflake',
    href: 'https://achieve.snowflake.com/88d32968-f143-4ce0-8845-1e4de0829c3c#acc.RdCgkjlA',
  },
  {
    name: 'Fundamentals of Azure AI Services',
    issuer: 'Microsoft Learn',
    href: 'https://learn.microsoft.com/api/achievements/share/en-us/VimanshaMadushani-9110/H7FNVAE8?sharingId=F9C679B6EDD18E7B',
  },
  {
    name: 'Fundamental AI Concepts',
    issuer: 'Microsoft Learn',
    href: 'https://learn.microsoft.com/api/achievements/share/en-us/VimanshaMadushani-9110/8ZXF2UJW?sharingId=F9C679B6EDD18E7B',
  },
  {
    name: 'Introduction to Machine Learning',
    issuer: 'Microsoft Learn',
    href: 'https://learn.microsoft.com/en-us/users/vimanshamadushani-9110/achievements/d95s32vj',
  },
  {
    name: 'Perform Analytics in Power BI',
    issuer: 'Microsoft Learn',
    href: 'https://learn.microsoft.com/api/achievements/share/en-us/VimanshaMadushani-9110/H74SEYW8?sharingId=F9C679B6EDD18E7B',
  },
  {
    name: 'Version Control',
    issuer: 'Coursera',
    href: 'https://www.coursera.org/account/accomplishments/verify/AS4V4FMMSZRX',
  },
];

export const awards: Award[] = [
  { title: 'The Rising Star Award', org: 'STEMUP Educational Foundation', year: '2025' },
  { title: '1st Place — Social Services Category', org: 'ACES Hackathon', year: '2023' },
];

export const involvements: Involvement[] = [
  { title: 'Community Leader', org: 'STEMUP Educational Foundation', period: 'Aug 2023 – Present' },
  { title: 'Society Member', org: 'Statistical Circle — University of Peradeniya', period: '2023 – 2024' },
  {
    title: 'Committee Member',
    org: 'Operations Research Society — University of Peradeniya',
    period: '2021 – 2022',
  },
];
