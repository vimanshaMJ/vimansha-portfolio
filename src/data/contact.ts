import type { ContactLink } from '@/types';
import { site } from './site';

export const contactIntro =
  "I'm open to exciting roles in AI/ML engineering, full-stack development, and data science. Whether you have a project in mind or just want to connect — feel free to reach out.";

export const contactLinks: ContactLink[] = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: '✉' },
  { label: 'Phone', value: site.phone, href: site.phoneHref, icon: '📞' },
  {
    label: 'GitHub',
    value: site.github,
    href: `https://${site.github}`,
    icon: 'gh',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: site.linkedin,
    href: `https://${site.linkedin}`,
    icon: 'in',
    external: true,
  },
  { label: 'Location', value: site.location, href: '#', icon: '📍' },
];
