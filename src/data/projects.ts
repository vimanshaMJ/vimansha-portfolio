import type { Project } from '@/types';

// TODO: replace the '#' placeholders with real demo / repository URLs.
export const projects: Project[] = [
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
    demoUrl: '#',
    githubUrl: '#',
  },
];
