import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { hero, stats } from '@/data/hero';
import { site } from '@/data/site';
import { withBasePath } from '@/lib/paths';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute -left-32 -top-32 size-[28rem] rounded-full bg-primary/15 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 size-[26rem] rounded-full bg-indigo-500/10 blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div className="text-center lg:text-left">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent px-4 py-1.5 font-mono text-xs text-accent-foreground">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              {hero.tag}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {hero.firstName}
              <br />
              <em className="bg-gradient-to-r from-primary to-amber-300 bg-clip-text text-transparent dark:to-amber-200">
                {hero.lastName}
              </em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 font-mono text-sm text-muted-foreground">{hero.subtitle}</p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {hero.description}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={withBasePath(site.resume.href)} download={site.resume.downloadName}>
                  <Download /> Download CV
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border bg-card/60 px-4 py-3 text-left backdrop-blur"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-serif text-3xl text-primary">{s.value}</dd>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/40 via-primary/5 to-transparent blur-xl" />
            <div className="relative rounded-[1.75rem] border border-primary/25 bg-card p-2 shadow-2xl">
              <Image
                src={withBasePath('/photo.jpg')}
                alt={site.name}
                width={360}
                height={430}
                priority
                className="h-[320px] w-[260px] rounded-[1.25rem] object-cover sm:h-[430px] sm:w-[360px]"
              />
            </div>
            <div className="absolute -left-4 bottom-8 flex items-center gap-3 rounded-xl border bg-background/85 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-8">
              <span className="size-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400" />
              <div className="text-xs leading-snug text-muted-foreground">
                <strong className="block text-[0.8rem] font-semibold text-foreground">
                  {hero.badge.title}
                </strong>
                {hero.badge.text}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
