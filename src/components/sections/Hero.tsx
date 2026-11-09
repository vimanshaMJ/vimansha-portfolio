import { ArrowRight, Download, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { RotatingText } from '@/components/ui/rotating-text';
import { hero, stats } from '@/data/hero';
import { site } from '@/data/site';
import { withBasePath } from '@/lib/paths';

const roles = hero.tag.split(' & ');

/** Load-time entrance (pure CSS, so the hero never depends on JS to appear). */
function FadeIn({ delay = 0, className, children }: { delay?: number; className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('animate-fade-up', className)} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 lg:px-16 lg:pt-44">
      {/* aurora + grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-fade absolute inset-0" />
        <div className="absolute -left-24 -top-24 size-[30rem] animate-aurora rounded-full bg-brand-1/25 blur-[120px]" />
        <div className="absolute left-1/3 top-10 size-[26rem] animate-aurora-slow rounded-full bg-brand-2/20 blur-[120px]" />
        <div className="absolute -right-24 top-32 size-[30rem] animate-aurora rounded-full bg-brand-3/25 blur-[130px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <FadeIn>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border bg-card/60 py-1.5 pl-3 pr-4 text-xs backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-medium">{hero.badge.title}</span>
              <span className="text-muted-foreground">· {hero.badge.text}</span>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tighter sm:text-7xl lg:text-[5.5rem]">
              {hero.firstName}
              <br />
              <span className="text-gradient">{hero.lastName}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="mt-7 text-xl font-medium sm:text-2xl">
              I&apos;m an <RotatingText words={roles} />
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.description}
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="brand">
                <a href="#projects">
                  View My Work <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={withBasePath(site.resume.href)} download={site.resume.downloadName}>
                  <Download /> Download CV
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={200} className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-gradient opacity-30 blur-2xl" />
            <div className="relative rounded-[2rem] bg-brand-gradient p-px">
              <div className="rounded-[calc(2rem-1px)] bg-card p-2">
                <Image
                  src={withBasePath('/photo3.png')}
                  alt={site.name}
                  width={360}
                  height={430}
                  priority
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 flex max-w-[15rem] items-start gap-3 rounded-2xl border bg-background/80 p-3.5 shadow-2xl backdrop-blur-xl sm:-left-10">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
                <GraduationCap className="size-4" />
              </span>
              <p className="text-xs leading-snug text-muted-foreground">{hero.subtitle}</p>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={320} className="mx-auto mt-20 max-w-6xl">
        <dl className="grid grid-cols-2 divide-x divide-y rounded-3xl border bg-card/50 backdrop-blur sm:grid-cols-4 sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-6">
              <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">{s.value}</dd>
              <dt className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>
      </FadeIn>
    </section>
  );
}
