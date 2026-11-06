'use client';

import { useRef } from 'react';
import { cn } from '@/lib/utils';

/** Card with a soft brand-coloured glow that follows the cursor. */
export function SpotlightCard({ className, children, ...props }: React.ComponentProps<'div'>) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        'group/spot relative overflow-hidden rounded-2xl border bg-card transition-colors duration-300 hover:border-foreground/20',
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklab, var(--brand-2) 16%, transparent), transparent 70%)',
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
