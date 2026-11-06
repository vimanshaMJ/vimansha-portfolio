import type { Project } from '@/types';

// TODO: replace the '#' placeholders with real demo / repository URLs (placeholder links are hidden in the UI).
export const projects: Project[] = [
  {
    name: 'Assembly Line Balancing Optimization — Brandix Apparel Case Study',
    label: 'Published Research',
    description:
      'Introduced an efficient line-layout method and a mathematical model for MO allocation that beat the manual approach, with a web interface for automated allocation. Also analysed absenteeism trends with time series methods and proposed workforce-planning improvements.',
    tech: ['Python', 'PuLP', 'Streamlit', 'Pandas', 'Time Series Analysis'],
    paperUrl:
      'https://www.researchgate.net/publication/394383470_AN_OPTIMIZATION_TECHNIQUE_TO_ASSEMBLY_LINE_BALANCING_IN_APPAREL_INDUSTRY',
  },
  {
    name: 'Perceptron Classifier: Interactive ML Visualization App',
    description:
      'An interactive web app that visualises ML concepts with real-time decision boundary updates. Built a custom NumPy perceptron backend with Flask and dynamic Plotly.js frontend — letting users experiment and learn by doing.',
    tech: ['Python', 'Flask', 'NumPy', 'JavaScript', 'Plotly.js'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'AI-Powered Tweet Classification',
    description:
      'Deep learning web interface to classify tweets as personal vs. non-personal health mentions using LSTM and Bi-LSTM neural networks, achieving over 80% classification accuracy.',
    tech: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'Gradio', 'Scikit-learn'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Laptop Price Predictor',
    description:
      'ML-powered web application that predicts laptop prices based on user inputs (RAM, brand, OS, CPU) — enhancing decision-making for tech purchases through an intuitive Flask interface.',
    tech: ['Python', 'Flask', 'Pandas', 'NumPy', 'Scikit-learn'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Multivariate Analysis of Liver Disease',
    description:
      'Applied advanced multivariate statistical techniques — PCA, Factor Analysis, Discriminant Analysis, and Canonical Correlation Analysis — to deeply analyse the determinants of liver disease.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/vimanshaMJ/Multivariate-Analysis-of-Liver-Disease',
  },
];
