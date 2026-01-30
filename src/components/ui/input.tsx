"use client";

import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, error, disabled, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          // Base styles
          "flex h-9 items-center gap-2 rounded-[var(--radius-2)] pl-3 pr-2.5 border transition-all duration-150",

          // Default state (placeholder/filled)
          !isFocused && !isHovered && !disabled && !error &&
            "bg-bg-white border-stroke-soft shadow-xs",

          // Hover state
          isHovered && !isFocused && !disabled && !error &&
            "input-hover",

          // Focus state
          isFocused && !disabled && !error &&
            "input-focus",

          // Error state
          error && !disabled &&
            "bg-bg-white border-danger",

          // Disabled state
          disabled &&
            "input-disabled",

          className
        )}
      >
        {leftIcon && (
          <span
            className={cn(
              "flex-shrink-0 [&>svg]:size-5 transition-colors",
              // Default icon color
              !isFocused && !isHovered && !disabled && "text-icon-soft",
              // Hover/Focus icon color (darker)
              (isHovered || isFocused) && !disabled && "text-icon-sub",
              // Disabled icon color
              disabled && "text-icon-disabled"
            )}
          >
            {leftIcon}
          </span>
        )}
        <input
          type={type}
          disabled={disabled}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={cn(
            "flex-1 min-w-0 bg-transparent text-sm outline-none focus:outline-none focus-visible:outline-none",
            // Text colors based on state
            !disabled && "text-text-strong placeholder:text-text-soft",
            // Disabled text color
            disabled && "text-text-disabled placeholder:text-text-disabled cursor-not-allowed"
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <span
            className={cn(
              "flex-shrink-0 transition-colors",
              // Default icon color
              !isFocused && !isHovered && !disabled && "text-icon-soft",
              // Hover/Focus icon color (darker)
              (isHovered || isFocused) && !disabled && "text-icon-sub",
              // Disabled icon color
              disabled && "text-icon-disabled"
            )}
          >
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
