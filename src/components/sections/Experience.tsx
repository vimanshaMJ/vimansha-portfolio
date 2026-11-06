import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <Section id="experience" className="bg-muted/60">
      <SectionHeader
        number="02 — Experience"
        title={
          <>
            Where I&apos;ve <em>shipped.</em>
          </>
        }
      />
      <div className="space-y-6">
        {experience.map((item, i) => (
          <Reveal key={item.period} className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-10">
            <div className="md:sticky md:top-28 md:self-start">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {item.period}
              </div>
              <div className="mt-2 text-sm font-medium">{item.company}</div>
              {i === 0 && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" /> Current
                </div>
              )}
            </div>
            <SpotlightCard className="p-7 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{item.role}</h3>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-gradient" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
