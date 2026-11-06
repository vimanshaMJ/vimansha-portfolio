import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GithubIcon } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        number="04"
        title={
          <>
            Featured <em>Projects</em>
          </>
        }
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 80} className="h-full">
            <Card className="group flex h-full flex-col hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
              <CardHeader>
                <span className="font-mono text-xs text-primary">{`// ${String(i + 1).padStart(2, '0')}`}</span>
                <CardTitle className="text-xl transition-colors group-hover:text-primary">
                  {p.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-5">
                <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {p.demoUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a href={p.demoUrl}>
                      <ExternalLink /> Demo
                    </a>
                  </Button>
                )}
                {p.githubUrl && (
                  <Button asChild variant="ghost" size="sm">
                    <a href={p.githubUrl}>
                      <GithubIcon /> GitHub
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
