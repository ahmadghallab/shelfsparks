import { cn } from '@/lib/utils';
import { Library } from 'lucide-react';

export function Logo({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      className={cn('font-semibold flex gap-1 items-center', className)}
      {...props}
    >
      <Library className='size-5' />
      Shelfsparks
    </h3>
  );
}
