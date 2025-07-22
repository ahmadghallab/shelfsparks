import { siteConfig } from '@/lib/config';

export function SiteFooter() {
  return (
    <footer className='border-t border-(--pattern-fg) dark:[--pattern-fg:var(--color-white)]/10'>
      <div className='container py-4'>
        <div className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
          Built by{' '}
          <a
            href={siteConfig.links.linkedin}
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            Ahmad Ghallab
          </a>
          . The source code is available on{' '}
          <a
            href={siteConfig.links.github}
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            GitHub
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
