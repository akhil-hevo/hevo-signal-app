"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { InformationCircleIcon } from "hugeicons-react";

export interface CustomerDetailItemProps {
  /** Label text */
  label: string;
  /** Primary value */
  value: string | React.ReactNode;
  /** Secondary value (e.g., time duration) */
  secondaryValue?: string;
  /** Whether to show info icon */
  showInfoIcon?: boolean;
  /** Additional class name */
  className?: string;
}

const CustomerDetailItem = forwardRef<HTMLDivElement, CustomerDetailItemProps>(
  ({ label, value, secondaryValue, showInfoIcon = false, className }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-1", className)}>
        {/* Label with optional info icon */}
        <div className="flex items-center gap-1">
          <span className="text-label-xs text-text-sub">{label}</span>
          {showInfoIcon && (
            <InformationCircleIcon size={16} className="text-text-strong" />
          )}
        </div>

        {/* Value */}
        <div className="flex flex-col gap-0.5">
          {typeof value === "string" ? (
            <span className="text-label-sm text-text-strong">{value}</span>
          ) : (
            value
          )}
          {secondaryValue && (
            <span className="text-label-sm text-text-sub">{secondaryValue}</span>
          )}
        </div>
      </div>
    );
  }
);

CustomerDetailItem.displayName = "CustomerDetailItem";

export { CustomerDetailItem };
