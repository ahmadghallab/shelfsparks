import { Logo } from './logo';
import { ModeSwitcher } from './mode-switcher';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-(--pattern-fg) dark:[--pattern-fg:var(--color-white)]/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center justify-between gap-2 md:gap-4'>
        <Logo className='text-xl' />
        <ModeSwitcher />
      </div>
    </header>
  );
}
