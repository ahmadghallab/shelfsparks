import { ShareButton } from '@/components/share-button';
import { getRandomQuote } from '../actions/quotes';
import { ShuffleButton } from '@/components/shuffle-button';

export default async function Home() {
  const quote = await getRandomQuote();

  return (
    <figure className='flex flex-1 flex-col justify-center gap-5 px-8 max-w-screen-lg mx-auto'>
      <div className='relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>
        <h1 className='text-4xl text-balance sm:text-5xl lg:text-6xl'>
          {quote.spark}
        </h1>
      </div>
      <div className='relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>
        <p className='max-w-(--breakpoint-md) px-2 font-normal text-muted-foreground dark:text-gray-400'>
          The source is not available.
        </p>
      </div>
      <div className='mt-4 sm:mt-10 sm:px-2 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw] flex gap-3'>
        <ShuffleButton />
        <ShareButton />
      </div>
    </figure>
  );
}
