import { getRandomQuote } from '../actions/quotes';

export default async function Home() {
  const quote = await getRandomQuote();

  return (
    <figure className='container-wrapper flex flex-1 flex-col items-center justify-center'>
      <div className='flex flex-col gap-5 px-8'>
        <blockquote className='max-w-2xl'>
          <p className="relative before:pointer-events-none before:absolute before:top-4 before:-left-6 before:text-[8rem] before:text-foreground/25 before:content-['“'] sm:before:-left-8 sm:before:text-[10rem] text-4xl/12 sm:text-5xl/14">
            {quote.spark}
          </p>
        </blockquote>
      </div>
    </figure>
  );
}
