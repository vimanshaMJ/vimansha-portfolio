import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { GithubIcon } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <Section id="projects" className="bg-muted/60">
      <SectionHeader
        number="04 — Projects"
        title={
          <>
            Selected <em>work.</em>
          </>
        }
      />
      <div className="space-y-4">
        {projects.map((p, i) => (
          <Reveal key={p.name}>
            <SpotlightCard className="p-6 sm:p-8">
              <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10">
                <span className="text-gradient text-6xl font-semibold tracking-tighter sm:text-7xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{p.name}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 md:flex-col">
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      className="inline-flex items-center gap-1.5 rounded-full border bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-foreground hover:text-background"
                    >
                      Live Demo <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      className="inline-flex items-center gap-1.5 rounded-full border bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-foreground hover:text-background"
                    >
                      <GithubIcon className="size-4" /> Code
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
