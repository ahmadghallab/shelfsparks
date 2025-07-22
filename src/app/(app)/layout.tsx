import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative flex min-h-svh flex-col'>
      <div className='flex flex-1 flex-col'>
        <SiteHeader />
        <main className='flex flex-1 h-full container'>
          <div className='grid grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)]'>
            <div className='col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10'></div>
            <div className='grid'>{children}</div>
            <div className='row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block dark:[--pattern-fg:var(--color-white)]/10'></div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
