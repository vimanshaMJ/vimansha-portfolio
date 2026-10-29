'use client';

import { useState } from 'react';
import { DownloadIcon } from '@/components/ui/Icons';
import { navLinks } from '@/data/navigation';
import { site } from '@/data/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/cn';
import { withBasePath } from '@/lib/paths';
import styles from './Navbar.module.css';

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);

  return (
    <nav className={cn(styles.nav, scrolled && styles.scrolled)}>
      <a href="#hero" className={styles.logo}>
        VJ
      </a>

      <ul className={cn(styles.links, menuOpen && styles.open)}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={cn(active === link.href.slice(1) && styles.active)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <a
          href={withBasePath(site.resume.href)}
          download={site.resume.downloadName}
          className={cn(styles.cta, styles.ctaIcon)}
        >
          <DownloadIcon width={13} height={13} />
          Resume
        </a>
        <a href={`mailto:${site.email}`} className={cn(styles.cta, styles.ctaOutline)}>
          Hire Me
        </a>
      </div>

      <button
        type="button"
        className={styles.hamburger}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
