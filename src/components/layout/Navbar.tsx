'use client';

import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { navLinks } from '@/data/navigation';
import { site } from '@/data/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrolled } from '@/hooks/useScrolled';
import { withBasePath } from '@/lib/paths';
import { cn } from '@/lib/utils';

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);
  const active = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4">
      <nav
        className={cn(
          'flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border p-1.5 pl-2 backdrop-blur-xl transition-all duration-300',
          scrolled
            ? 'border-border bg-background/70 shadow-2xl shadow-black/10'
            : 'border-border/60 bg-background/40',
        )}
      >
        <a
          href="#hero"
          aria-label="Home"
          className="flex size-9 items-center justify-center rounded-full bg-brand-gradient text-sm font-semibold text-white"
        >
          VJ
        </a>

        <ul className="hidden items-center md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'rounded-full px-3.5 py-2 text-[0.8rem] font-medium transition-colors',
                    isActive
                      ? 'bg-foreground/10 text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild variant="outline" size="icon" className="hidden sm:inline-flex">
            <a
              href={withBasePath(site.resume.href)}
              download={site.resume.downloadName}
              aria-label="Download resume"
            >
              <Download />
            </a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={`mailto:${site.email}`}>Hire Me</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="mt-2 w-full max-w-3xl rounded-3xl border bg-background/90 p-2 shadow-2xl backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-1 flex gap-2 border-t p-2 pt-3">
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a href={withBasePath(site.resume.href)} download={site.resume.downloadName}>
                <Download /> Resume
              </a>
            </Button>
            <Button asChild size="sm" className="flex-1">
              <a href={`mailto:${site.email}`}>Hire Me</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
