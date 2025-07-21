import type { Metadata } from 'next';

import { clash } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { META_THEME_COLORS, siteConfig } from '@/lib/config';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  description: siteConfig.description,
  keywords: [
    'daily quotes',
    'book quotes',
    'quote of the day',
    'inspirational quotes',
    'reading highlights',
  ],
  authors: [
    {
      name: 'Ahmad Ghallab',
      url: siteConfig.links.linkedin,
    },
  ],
  creator: 'Ahmad Ghallab',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='theme-color' content={META_THEME_COLORS.light} />
      </head>
      <body className={cn('min-h-svh font-clash antialiased', clash.variable)}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
