import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { site } from '@/data/site';
import { ThemeProvider } from '@/components/ui/theme-provider';
import './globals.css';

const sans = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });

// Absolute URL of the deployed site (Vercel) — needed for social preview images.
const siteUrl = 'https://vimanshamj.vercel.app/';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name, url: `https://${site.github}` }],
  keywords: ['Vimansha Jayarathna', 'Software Engineer', 'AI Engineer', 'Next.js', 'FastAPI', 'NestJS', 'Sri Lanka'],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — Software Engineer & AI Engineer`,
    description: site.description,
    images: [{ url: 'og.png', width: 1200, height: 630, alt: `${site.name} — portfolio` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Software Engineer & AI Engineer`,
    description: site.description,
    images: ['og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
