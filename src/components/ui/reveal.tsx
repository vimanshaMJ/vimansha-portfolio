'use client';

import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface RevealProps extends React.ComponentProps<'div'> {
  /** Transition delay in ms, used to stagger siblings. */
  delay?: number;
}

export function Reveal({ className, delay, style, children, ...props }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
