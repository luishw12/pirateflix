"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {forwardRef, InputHTMLAttributes, ReactNode, useState} from "react";
import {MdClear} from "react-icons/md";

export interface InputProps
extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  clearable?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, clearable, onChange, value, ...props }, ref) => {
    const [inputValue, setInputValue] = useState<string>("");
    const showClear = clearable && inputValue.length > 0;
    return (
      <div className={"relative"}>
        <input
          type={type}
          onChange={e => {
            setInputValue(e.target.value)
            if(onChange) {
              onChange(e)
            }
          }}
          value={value ? value : inputValue}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className,
            icon ? "pl-8" : "",
            showClear ? "pr-8" : ""
          )}
          ref={ref}
          {...props}
        />
        {icon && <div className={"absolute left-2.5 top-1/2 -translate-y-1/2 text-input"}>{icon}</div>}
        {showClear && <button onClick={() => setInputValue("")} className={"absolute right-2.5 top-1/2 -translate-y-1/2 text-input"}><MdClear /></button>}
      </div>
    )
  }
)
Input.displayName = "Input"

export {Input}
