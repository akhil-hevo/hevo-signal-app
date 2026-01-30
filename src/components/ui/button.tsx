"use client";

import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Button Component
 *
 * Types: primary, error, neutral
 * Styles: filled, stroke, lighter, ghost
 * Sizes: md (40px), sm (36px), xs (32px), xxs (28px)
 * States: default, hover, focus, disabled (handled automatically)
 */

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button color type */
  variant?: "primary" | "error" | "neutral";
  /** Button style */
  styleType?: "filled" | "stroke" | "lighter" | "ghost";
  /** Button size */
  size?: "md" | "sm" | "xs" | "xxs";
  /** Loading state */
  isLoading?: boolean;
  /** Left icon */
  leftIcon?: React.ReactNode;
  /** Right icon */
  rightIcon?: React.ReactNode;
  /** Icon only button (no text) */
  iconOnly?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      styleType = "filled",
      size = "sm",
      isLoading,
      leftIcon,
      rightIcon,
      iconOnly = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const isDisabled = disabled || isLoading;

    // Size classes
    const sizeClasses = {
      md: iconOnly ? "h-10 w-10 p-2.5" : "h-10 px-2.5 py-2.5",
      sm: iconOnly ? "h-9 w-9 p-2" : "h-9 px-2 py-2",
      xs: iconOnly ? "h-8 w-8 p-1.5" : "h-8 px-1.5 py-1.5",
      xxs: iconOnly ? "h-7 w-7 p-1" : "h-7 px-1 py-1",
    };

    // Text size classes
    const textSizeClasses = {
      md: "text-sm",
      sm: "text-sm",
      xs: "text-xs",
      xxs: "text-xs",
    };

    // Get styling based on variant, styleType, and state
    const getButtonStyles = () => {
      // Disabled state
      if (isDisabled) {
        switch (styleType) {
          case "filled":
            return "bg-bg-weak text-text-disabled cursor-not-allowed";
          case "stroke":
            return "bg-bg-white border border-stroke-soft text-text-disabled cursor-not-allowed";
          case "lighter":
            return "bg-bg-weak text-text-disabled cursor-not-allowed";
          case "ghost":
            return "text-text-disabled cursor-not-allowed";
        }
      }

      // Primary variant
      if (variant === "primary") {
        switch (styleType) {
          case "filled":
            if (isFocused) return "bg-primary-active text-white focus-ring";
            if (isHovered) return "bg-primary-hover text-white";
            return "bg-primary text-white";

          case "stroke":
            if (isFocused) return "bg-primary-lighter border border-primary text-primary focus-ring";
            if (isHovered) return "bg-primary-lighter border border-primary text-primary";
            return "bg-bg-white border border-primary text-primary";

          case "lighter":
            if (isFocused) return "bg-primary-lighter text-primary focus-ring";
            if (isHovered) return "bg-[rgba(71,108,255,0.16)] text-primary";
            return "bg-[rgba(71,108,255,0.1)] text-primary";

          case "ghost":
            if (isFocused) return "bg-primary-lighter text-primary focus-ring";
            if (isHovered) return "bg-primary-lighter text-primary";
            return "text-primary";
        }
      }

      // Error variant
      if (variant === "error") {
        switch (styleType) {
          case "filled":
            if (isFocused) return "bg-danger-dark text-white focus-ring";
            if (isHovered) return "bg-danger-dark text-white";
            return "bg-danger text-white";

          case "stroke":
            if (isFocused) return "bg-danger-lighter border border-danger text-danger focus-ring";
            if (isHovered) return "bg-danger-lighter border border-danger text-danger";
            return "bg-bg-white border border-danger text-danger";

          case "lighter":
            if (isFocused) return "bg-danger-lighter text-danger focus-ring";
            if (isHovered) return "bg-[rgba(251,55,72,0.16)] text-danger";
            return "bg-[rgba(251,55,72,0.1)] text-danger";

          case "ghost":
            if (isFocused) return "bg-danger-lighter text-danger focus-ring";
            if (isHovered) return "bg-danger-lighter text-danger";
            return "text-danger";
        }
      }

      // Neutral variant
      if (variant === "neutral") {
        switch (styleType) {
          case "filled":
            if (isFocused) return "bg-neutral-700 text-white focus-ring";
            if (isHovered) return "bg-neutral-700 text-white";
            return "bg-neutral-800 text-white";

          case "stroke":
            if (isFocused) return "bg-bg-white border border-stroke-strong text-text-sub focus-ring";
            if (isHovered) return "bg-bg-weak border border-transparent text-text-sub shadow-xs";
            return "bg-bg-white border border-stroke-soft text-text-sub shadow-xs";

          case "lighter":
            if (isFocused) return "bg-neutral-200 text-text-sub focus-ring";
            if (isHovered) return "bg-neutral-200 text-text-sub";
            return "bg-bg-weak text-text-sub";

          case "ghost":
            if (isFocused) return "bg-bg-weak text-text-sub focus-ring";
            if (isHovered) return "bg-bg-weak text-text-sub";
            return "text-text-sub";
        }
      }

      return "";
    };

    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-1 font-medium rounded-[var(--radius-2-5)] transition-all duration-150 outline-none focus-visible:outline-none active:scale-[0.98]",
          sizeClasses[size],
          textSizeClasses[size],
          "[&>svg]:size-5",
          getButtonStyles(),
          className
        )}
        ref={ref}
        disabled={isDisabled}
        onMouseEnter={() => !isDisabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => !isDisabled && setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      >
        {isLoading ? (
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {!iconOnly && children && <span className="px-1">{children}</span>}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
