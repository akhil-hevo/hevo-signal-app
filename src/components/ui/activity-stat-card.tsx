"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ActivityStatCardProps {
  /** Card title */
  title: string;
  /** Main value (e.g., "48 days") */
  value: string;
  /** Subtitle text (e.g., "since last meeting") */
  subtitle: string;
  /** Secondary info (e.g., "4 meetings in 1 year") */
  secondaryInfo: string;
  /** Icon to display in top right */
  icon?: React.ReactNode;
  /** Additional class name */
  className?: string;
}

const ActivityStatCard = forwardRef<HTMLDivElement, ActivityStatCardProps>(
  ({ title, value, subtitle, secondaryInfo, icon, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-1 flex-col gap-1",
          "rounded-[var(--radius-3)] border border-stroke-soft bg-bg-white p-6",
          className
        )}
      >
        {/* Title */}
        <p className="text-label-sm text-text-sub">{title}</p>

        {/* Content */}
        <div className="flex flex-col gap-1.5">
          {/* Main Value */}
          <p className="text-title-h5 text-text-strong">{value}</p>

          {/* Subtitle and Secondary Info */}
          <div className="flex flex-col gap-1 text-paragraph-xs">
            <span className="text-text-sub">{subtitle}</span>
            <span className="text-label-xs text-text-strong">{secondaryInfo}</span>
          </div>
        </div>

        {/* Icon */}
        {icon && (
          <div className="absolute right-5 top-5 size-4">
            {icon}
          </div>
        )}
      </div>
    );
  }
);

ActivityStatCard.displayName = "ActivityStatCard";

export { ActivityStatCard };
