import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  return (
    <Section id="skills" className="bg-muted/50">
      <SectionHeader
        number="03"
        title={
          <>
            Skills &amp; <em>Technologies</em>
          </>
        }
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 70}>
            <Card className="h-full p-6 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={c.iconPath} />
                </svg>
              </div>
              <h3 className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {c.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <Badge key={s} variant="outline" className="font-sans text-[0.78rem] text-foreground">
                    {s}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
