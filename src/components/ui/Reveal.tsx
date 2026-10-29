'use client';

import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

interface RevealProps {
  className?: string;
  /** Class added once the element scrolls into view. */
  visibleClassName: string;
  /** Transition delay in ms, used to stagger siblings. */
  delay?: number;
  children: React.ReactNode;
}

export default function Reveal({ className, visibleClassName, delay, children }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(className, inView && visibleClassName)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
