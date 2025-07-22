import { getRandomQuote } from '../actions/quotes';
import { Quote } from '@/components/quote';

export default async function Home() {
  const randomQuote = await getRandomQuote();

  return <Quote quote={randomQuote} />;
}
