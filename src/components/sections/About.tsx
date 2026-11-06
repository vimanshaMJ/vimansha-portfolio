import { Award, GraduationCap, Languages, MapPin, School, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { aboutParagraphs, highlights, infoCards } from '@/data/about';

const icons = {
  Degree: GraduationCap,
  University: School,
  Classification: Star,
  Location: MapPin,
  Languages,
  Award,
} as const;

export default function About() {
  const award = infoCards.find((c) => c.label === 'Award');
  const rest = infoCards.filter((c) => c.label !== 'Award');

  return (
    <Section id="about">
      <SectionHeader
        number="01 — About"
        title={
          <>
            Statistics-minded, <em>engineering-driven.</em>
          </>
        }
      />
      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal className="lg:col-span-2 lg:row-span-2">
          <SpotlightCard className="h-full p-7 sm:p-9">
            <div className="space-y-5 text-muted-foreground">
              {aboutParagraphs.map((p, i) => (
                <p
                  key={p}
                  className={i === 0 ? 'text-xl leading-relaxed text-foreground sm:text-2xl' : 'leading-relaxed'}
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <Badge key={h}>{h}</Badge>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>

        {rest.map((c, i) => {
          const Icon = icons[c.label as keyof typeof icons];
          return (
            <Reveal key={c.label} delay={(i % 3) * 70}>
              <SpotlightCard className="h-full p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-accent">
                  {Icon && <Icon className="size-5" />}
                </div>
                <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="font-medium leading-snug">{c.value}</div>
              </SpotlightCard>
            </Reveal>
          );
        })}

        {award && (
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl bg-brand-gradient p-px">
              <div className="flex items-center gap-4 rounded-[calc(1rem-1px)] bg-card px-6 py-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Award className="size-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{award.label}</div>
                  <div className="font-medium">{award.value.replace('🏆 ', '')}</div>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
