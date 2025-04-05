import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: number
  className?: string
  message?: string
}

export const LoadingSpinner = ({
  size = 24,
  className,
  message
}: LoadingSpinnerProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center space-y-2',
        className
      )}
    >
      <Loader2
        className='animate-spin text-primary'
        size={size}
        strokeWidth={2.5}
      />
      {message && <p className='text-sm text-muted-foreground'>{message}</p>}
    </div>
  )
}
