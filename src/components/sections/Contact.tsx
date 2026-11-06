import { Mail, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { LinkedinIcon } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { contactIntro, contactLinks } from '@/data/contact';
import ContactForm from './ContactForm';

const icons = { Email: Mail, Phone, LinkedIn: LinkedinIcon, Location: MapPin } as const;

export default function Contact() {
  return (
    <Section id="contact" className="bg-muted/50">
      <SectionHeader
        number="05"
        title={
          <>
            Get In <em>Touch</em>
          </>
        }
      />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">{contactIntro}</p>
          <div className="space-y-3">
            {contactLinks.map((l) => {
              const Icon = icons[l.label as keyof typeof icons];
              return (
                <a
                  key={l.label}
                  href={l.href}
                  {...(l.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="block"
                >
                  <Card className="flex items-center gap-4 px-5 py-4 hover:translate-x-1 hover:border-primary/40">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                      {Icon && <Icon className="size-4" />}
                    </span>
                    <div>
                      <div className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                        {l.label}
                      </div>
                      <div className="text-sm">{l.value}</div>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
