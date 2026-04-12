import * as React from "react"
import { cn } from "@/lib/utils"

const Spinner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-block animate-spin rounded-full border-2 border-solid border-current border-e-transparent text-lime-400",
      className
    )}
    {...props}
  />
))
Spinner.displayName = "Spinner"

export { Spinner }
