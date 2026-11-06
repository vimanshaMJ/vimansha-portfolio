import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { skillCategories } from '@/data/skills';
import { cn } from '@/lib/utils';

// Bento rhythm for 11 cards on a 4-column grid: each row sums to 4.
const spans = [
  '', 'lg:col-span-2', '',
  '', 'lg:col-span-2', '',
  '', 'lg:col-span-2', '',
  'lg:col-span-2', 'lg:col-span-2',
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        number="03 — Skills"
        title={
          <>
            A toolkit built for <em>real products.</em>
          </>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((c, i) => (
          <Reveal key={c.title} delay={(i % 4) * 60} className={cn(spans[i])}>
            <SpotlightCard className="h-full p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.iconPath} />
                  </svg>
                </span>
                <h3 className="text-sm font-semibold leading-tight">{c.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
