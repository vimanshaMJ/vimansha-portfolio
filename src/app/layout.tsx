import type { Metadata } from 'next';
import { DM_Serif_Display, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { site } from '@/data/site';
import { ThemeProvider } from '@/components/ui/theme-provider';
import './globals.css';

const serif = DM_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

// DM Sans is self-hosted: next/font/google can't parse Google's current DM Sans CSS.
const sans = localFont({
  src: './fonts/DMSans-latin.woff2',
  weight: '300 600',
  variable: '--font-dm-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
