import { cn } from '@/lib/utils';

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn('relative px-5 py-20 sm:px-8 md:py-28 lg:px-16', className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({ number, title }: { number: string; title: React.ReactNode }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground backdrop-blur">
        <span className="size-1.5 rounded-full bg-brand-gradient" />
        {number}
      </div>
      <h2 className="text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl [&_em]:text-gradient [&_em]:not-italic">
        {title}
      </h2>
    </div>
  );
}
