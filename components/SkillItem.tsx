import { cn } from '@/lib/utils'

interface SkillItemProps {
  title?: string
  text?: string
  bgColor: bgColor
  className?: string
  txtColor: txtColor
  children?: React.ReactNode
}
type bgColor = 'bg-red' | 'bg-gray'
type txtColor = 'text-white' | 'text-black'

export default function SkillItem({
  title,
  text,
  bgColor,
  className,
  txtColor,
  children
}: SkillItemProps) {
  const bgColorClass = bgColor === 'bg-red' ? 'bg-[#C84227]' : 'bg-[#B7AB98]'
  const txtColorClass =
    txtColor === 'text-white' ? 'text-white' : 'text-[#1D1D1D]'

  return (
    <div
      className={cn(
        `flex h-full w-full flex-col flex-wrap px-8 py-16 md:min-h-[300px] md:py-10 ${bgColorClass}`,
        className
      )}
    >
      {title && (
        <h3
          className={`min-h-16 font-adventor text-[1.1875rem] font-bold uppercase leading-[1.1] tracking-[0.08rem] md:mb-6 ${txtColorClass}`}
        >
          {title}
        </h3>
      )}

      {text && (
        <p className={`${txtColorClass} font-proxima text-xl leading-tight`}>
          {text}
        </p>
      )}
      {children}
    </div>
  )
}
