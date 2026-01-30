"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface IntegrationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to display */
  icon: React.ReactNode;
  /** Button label */
  label: string;
}

const IntegrationButton = forwardRef<HTMLButtonElement, IntegrationButtonProps>(
  ({ className, icon, label, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-center gap-2",
          "rounded-[var(--radius-2-5)] bg-bg-white px-3 py-2",
          "shadow-xs",
          "text-label-sm text-text-sub",
          "transition-colors hover:bg-bg-weak",
          className
        )}
        {...props}
      >
        {icon}
        <span>{label}</span>
      </button>
    );
  }
);

IntegrationButton.displayName = "IntegrationButton";

export { IntegrationButton };
