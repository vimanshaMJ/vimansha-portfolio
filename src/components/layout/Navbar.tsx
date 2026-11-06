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
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-transparent px-4 transition-all duration-300 sm:px-6',
          scrolled
            ? 'h-14 border-border bg-background/75 shadow-lg shadow-black/5 backdrop-blur-xl'
            : 'h-16 bg-transparent',
        )}
      >
        <a href="#hero" className="font-serif text-2xl text-primary">
          VJ
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'rounded-lg px-3 py-2 text-[0.8rem] font-medium tracking-wide transition-colors',
                    isActive
                      ? 'bg-accent text-primary'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href={withBasePath(site.resume.href)} download={site.resume.downloadName}>
              <Download /> Resume
            </a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={`mailto:${site.email}`}>Hire Me</a>
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border bg-background/95 p-3 shadow-xl backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex gap-2 border-t pt-3">
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
