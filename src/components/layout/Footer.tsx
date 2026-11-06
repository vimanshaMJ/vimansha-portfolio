import { footerLinks } from '@/data/navigation';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="relative border-t px-5 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-sm text-muted-foreground sm:flex-row">
        <p>{site.copyright}</p>
        <div className="flex gap-6">
          {footerLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
