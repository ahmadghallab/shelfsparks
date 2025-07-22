import { Share } from 'lucide-react';
import { Button } from './ui/button';

export function ShareButton({ ...props }: React.ComponentProps<'button'>) {
  return (
    <Button className='rounded-4xl' variant='secondary' {...props}>
      <Share /> Share
    </Button>
  );
}
