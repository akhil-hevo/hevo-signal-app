"use client";

import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * IconButton Component
 *
 * For icon-only buttons. Uses the same design system as Button.
 *
 * Variants: primary, error, neutral
 * Styles: filled, stroke, lighter, ghost
 * Sizes: md (40px), sm (36px), xs (32px), xxs (28px)
 */

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon to display */
  icon: React.ReactNode;
  /** Accessibility label (required) */
  label: string;
  /** Button color type */
  variant?: "primary" | "error" | "neutral";
  /** Button style */
  styleType?: "filled" | "stroke" | "lighter" | "ghost";
  /** Button size */
  size?: "md" | "sm" | "xs" | "xxs";
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      icon,
      label,
      variant = "neutral",
      styleType = "stroke",
      size = "sm",
      disabled,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Size classes
    const sizeClasses = {
      md: "h-10 w-10 p-2.5",
      sm: "h-9 w-9 p-2",
      xs: "h-8 w-8 p-1.5",
      xxs: "h-7 w-7 p-1",
    };

    // Get styling based on variant, styleType, and state
    const getButtonStyles = () => {
      // Disabled state
      if (disabled) {
        switch (styleType) {
          case "filled":
            return "bg-bg-weak text-icon-disabled cursor-not-allowed";
          case "stroke":
            return "bg-bg-white border border-stroke-soft text-icon-disabled cursor-not-allowed";
          case "lighter":
            return "bg-bg-weak text-icon-disabled cursor-not-allowed";
          case "ghost":
            return "text-icon-disabled cursor-not-allowed";
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
            if (isFocused) return "bg-bg-white border border-stroke-strong text-icon-sub focus-ring";
            if (isHovered) return "bg-bg-weak border border-transparent text-icon-sub shadow-xs";
            return "bg-bg-white border border-stroke-soft text-icon-soft shadow-xs";

          case "lighter":
            if (isFocused) return "bg-neutral-200 text-icon-sub focus-ring";
            if (isHovered) return "bg-neutral-200 text-icon-sub";
            return "bg-bg-weak text-icon-sub";

          case "ghost":
            if (isFocused) return "bg-bg-weak text-icon-sub focus-ring";
            if (isHovered) return "bg-bg-weak text-icon-sub";
            return "text-icon-soft";
        }
      }

      return "";
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => !disabled && setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "inline-flex items-center justify-center rounded-[var(--radius-2-5)] transition-all duration-150 outline-none focus-visible:outline-none [&>svg]:size-5",
          sizeClasses[size],
          getButtonStyles(),
          className
        )}
        aria-label={label}
        title={label}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
