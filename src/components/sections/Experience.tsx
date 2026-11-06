import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        number="02"
        title={
          <>
            Work <em>Experience</em>
          </>
        }
      />
      <div className="relative space-y-8 border-l border-primary/30 pl-6 sm:pl-10">
        {experience.map((item) => (
          <Reveal key={item.period} className="relative">
            <span className="absolute -left-[1.95rem] top-7 size-3 rounded-full bg-primary ring-4 ring-background sm:-left-[2.95rem]" />
            <Card className="hover:border-primary/40 hover:shadow-lg">
              <CardHeader>
                <span className="font-mono text-xs tracking-wider text-primary">{item.period}</span>
                <CardTitle className="text-2xl">{item.role}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </CardHeader>
              <CardContent className="space-y-5">
                <ul className="space-y-2.5 text-[0.95rem] text-muted-foreground">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
