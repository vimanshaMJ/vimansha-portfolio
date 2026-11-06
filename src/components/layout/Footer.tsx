import { footerLinks } from '@/data/navigation';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="relative z-10 flex flex-col items-center justify-between gap-4 border-t px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8 lg:px-16">
      <p>{site.copyright}</p>
      <div className="flex gap-6">
        {footerLinks.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
