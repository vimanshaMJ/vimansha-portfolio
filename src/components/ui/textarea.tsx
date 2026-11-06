import * as React from 'react';
import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'flex min-h-32 w-full resize-y rounded-lg border border-input bg-background/60 px-3.5 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25',
        className,
      )}
      {...props}
    />
  );
}
export { Textarea };
