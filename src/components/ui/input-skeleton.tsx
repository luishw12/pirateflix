import * as React from "react"
import { cn } from "@/lib/utils"
import {forwardRef, InputHTMLAttributes} from "react";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const InputSkeleton = forwardRef<HTMLInputElement, InputProps>(
  ({ className}, ref) => {
    return (
      <div ref={ref} className={cn(
        "flex h-9 w-full rounded-md border border-input bg-input animate-pulse px-3 py-1 text-sm shadow-sm transition-colors outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}/>
    )
  }
)
InputSkeleton.displayName = "InputSkeleton"

export {InputSkeleton}
