import { ComponentPropsWithoutRef, CSSProperties, FC } from "react"

export interface ShinyButtonProps
  extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number
}

export const ShinyButton: FC<ShinyButtonProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      // @ts-ignore`
      style={{ "--shiny-width": `${shimmerWidth}px` }}

      className={`mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70 animate-shiny-text bg-size-[var(--shiny-width)_100%] bg-clip-text bg-position-[0_0] bg-no-repeat transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-linear-to-rfrom-transparent via-black/80 via-50% to-transparent dark:via-white/80 ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
