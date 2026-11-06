import { Award, BadgeCheck, GraduationCap, HeartHandshake, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { awards, certifications, education, involvements } from '@/data/credentials';

function Heading({ icon: Icon, children }: { icon: typeof Award; children: React.ReactNode }) {
  return (
    <h3 className="mb-5 flex items-center gap-3 text-lg font-semibold tracking-tight">
      <span className="flex size-9 items-center justify-center rounded-xl bg-brand-gradient text-white">
        <Icon className="size-4" />
      </span>
      {children}
    </h3>
  );
}

export default function Credentials() {
  return (
    <Section id="credentials">
      <SectionHeader
        number="05 — Credentials"
        title={
          <>
            Education &amp; <em>recognition.</em>
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
        {/* Education */}
        <Reveal>
          <Heading icon={GraduationCap}>Education</Heading>
          <div className="space-y-4">
            {education.map((e) => (
              <SpotlightCard key={e.degree} className="p-6">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {e.period}
                </div>
                <div className="mt-2 text-lg font-semibold leading-snug tracking-tight">{e.degree}</div>
                <div className="text-sm text-muted-foreground">{e.institution}</div>
                {e.detail && <div className="mt-1 text-sm">{e.detail}</div>}
                {e.coursework && (
                  <div className="mt-5">
                    <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                      Relevant coursework
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {e.coursework.map((c) => (
                        <Badge key={c} variant="outline">
                          {c}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </SpotlightCard>
            ))}
          </div>
        </Reveal>

        {/* Certifications */}
        <Reveal delay={80}>
          <Heading icon={BadgeCheck}>Certifications</Heading>
          <div className="grid gap-3">
            {certifications.map((c) => (
              <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer">
                <SpotlightCard className="px-5 py-4" contentClassName="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-medium leading-snug">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.issuer}</div>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover/spot:-translate-y-0.5 group-hover/spot:translate-x-0.5" />
                </SpotlightCard>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Awards */}
        <Reveal>
          <Heading icon={Award}>Awards &amp; Hackathons</Heading>
          <div className="grid gap-3">
            {awards.map((a) => (
              <div key={a.title} className="rounded-2xl bg-brand-gradient p-px">
                <div className="flex items-center justify-between gap-4 rounded-[calc(1rem-1px)] bg-card px-5 py-4">
                  <div>
                    <div className="font-medium">{a.title}</div>
                    <div className="text-xs text-muted-foreground">{a.org}</div>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{a.year}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Volunteering */}
        <Reveal delay={80}>
          <Heading icon={HeartHandshake}>Volunteering</Heading>
          <div className="grid gap-3">
            {involvements.map((v) => (
              <SpotlightCard key={v.org} className="px-5 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-medium">{v.title}</div>
                    <div className="text-sm text-muted-foreground">{v.org}</div>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">{v.period}</span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
