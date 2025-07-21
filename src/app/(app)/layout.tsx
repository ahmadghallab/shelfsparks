import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative flex min-h-svh flex-col bg-background'>
      <div className='border-grid flex flex-1 flex-col'>
        <SiteHeader />
        <main className='flex flex-1 flex-col h-full'>{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
