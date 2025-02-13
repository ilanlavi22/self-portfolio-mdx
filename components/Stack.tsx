import { cn } from '@/lib/utils'
import { stacks } from '@/lib/stack'

interface StackProps {
  className?: string
}

export default function Stack({ className }: StackProps) {
  return (
    <div
      className={cn(
        'text-theme-gray my-20 font-adventor font-bold uppercase leading-[0.85] lg:mx-auto lg:max-w-6xl xl:max-w-none',
        className
      )}
    >
      <div
        className={cn(
          'sm-px-2 mx-5 mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-7 px-2 font-normal normal-case lg:gap-x-6 lg:px-5',
          className
        )}
      >
        {stacks.map(stack => (
          <div key={stack.id}>
            <div
              className={cn(
                'flex flex-col items-center gap-y-3 whitespace-nowrap text-sm',
                className
              )}
            >
              <p className={cn('text-[14px]', className)}>{stack.name}</p>

              <p className={cn('flex gap-x-0.5', className)}>{stack.icon}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
