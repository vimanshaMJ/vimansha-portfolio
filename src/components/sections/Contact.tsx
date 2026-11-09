import { Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { contactIntro, contactLinks } from '@/data/contact';
import ContactForm from './ContactForm';

const icons = { Email: Mail, Phone, GitHub: GithubIcon, LinkedIn: LinkedinIcon, Location: MapPin } as const;

export default function Contact() {
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border bg-card/60 p-5 sm:rounded-[2rem] sm:p-12">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 size-80 rounded-full bg-brand-1/20 blur-[100px]" />
          <div className="absolute -bottom-24 -right-16 size-96 rounded-full bg-brand-3/25 blur-[110px]" />
        </div>

        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand-gradient" />
            06 — Contact
          </div>
          <h2 className="max-w-3xl text-[2rem] font-semibold leading-[1.1] tracking-tighter sm:text-6xl">
            Let&apos;s build something <span className="text-gradient">remarkable</span> together.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg text-muted-foreground">{contactIntro}</p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 lg:grid-cols-2 lg:gap-12">
            <Reveal className="grid min-w-0 grid-cols-1 content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactLinks.map((l) => {
                const Icon = icons[l.label as keyof typeof icons];
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    className="block min-w-0"
                    {...(l.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    <SpotlightCard className="px-5 py-4" contentClassName="flex min-w-0 items-center gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent">
                        {Icon && <Icon className="size-4" />}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                          {l.label}
                        </div>
                        <div className="truncate text-sm font-medium" title={l.value}>
                          {l.value}
                        </div>
                      </div>
                    </SpotlightCard>
                  </a>
                );
              })}
            </Reveal>
            <Reveal delay={100} className="min-w-0">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
