'use client';

import { shuffleQuotes } from '@/app/actions/quotes';
import { useTransition } from 'react';
import { Button } from './ui/button';
import { Shuffle } from 'lucide-react';

export function ShuffleButton({ ...props }: React.ComponentProps<'button'>) {
  const [isPending, startTransition] = useTransition();

  const onShuffle = () => {
    startTransition(async () => {
      await shuffleQuotes();
    });
  };

  return (
    <Button
      className='rounded-4xl'
      onClick={onShuffle}
      disabled={isPending}
      {...props}
    >
      <Shuffle /> Shuffle
    </Button>
  );
}
