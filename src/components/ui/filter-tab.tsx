"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface FilterTabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to display */
  icon?: React.ReactNode;
  /** Tab label */
  label: string;
  /** Whether the tab is active */
  isActive?: boolean;
}

const FilterTab = forwardRef<HTMLButtonElement, FilterTabProps>(
  ({ className, icon, label, isActive = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center gap-1 rounded-[var(--radius-1-5)] px-2 py-1",
          "text-label-sm transition-colors",
          isActive
            ? "border border-info bg-bg-white text-info"
            : "border border-stroke-soft bg-bg-white text-text-strong hover:bg-bg-weak",
          className
        )}
        {...props}
      >
        {icon && <span className="size-4">{icon}</span>}
        <span>{label}</span>
      </button>
    );
  }
);

FilterTab.displayName = "FilterTab";

export { FilterTab };
