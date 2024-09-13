import * as React from "react"
import { cn } from "@/lib/utils"
import {forwardRef, InputHTMLAttributes, ReactNode} from "react";

export interface InputProps
extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, children, icon, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      >
        {icon}
        {children}
      </input>
    )
  }
)
Input.displayName = "Input"

export { Input }
