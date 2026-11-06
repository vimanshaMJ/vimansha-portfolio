import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { aboutParagraphs, highlights, infoCards } from '@/data/about';

export default function About() {
  return (
    <Section id="about" className="bg-muted/50">
      <SectionHeader
        number="01"
        title={
          <>
            About <em>Me</em>
          </>
        }
      />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="space-y-5 text-muted-foreground">
          {aboutParagraphs.map((p, i) => (
            <p key={p} className={i === 0 ? 'text-lg leading-relaxed text-foreground' : undefined}>
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {highlights.map((h) => (
              <Badge key={h}>{h}</Badge>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {infoCards.map((c, i) => (
            <Reveal key={c.label} delay={i * 60}>
              <Card className="px-6 py-5 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-primary">
                  {c.label}
                </div>
                <div className="text-[0.95rem]">{c.value}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
