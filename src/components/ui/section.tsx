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
    <section id={id} className={cn('px-5 py-16 sm:px-8 md:py-24 lg:px-16', className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({ number, title }: { number: string; title: React.ReactNode }) {
  return (
    <div className="mb-12">
      <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {number}
        <span className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
      </div>
      <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl [&_em]:text-primary">
        {title}
      </h2>
    </div>
  );
}
