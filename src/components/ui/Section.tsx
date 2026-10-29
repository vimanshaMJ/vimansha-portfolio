import { cn } from '@/lib/cn';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn(styles.section, className)}>
      {children}
    </section>
  );
}
