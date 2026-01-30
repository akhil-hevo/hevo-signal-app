"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Calendar01Icon, ArrowUpRight01Icon, Alert02Icon } from "hugeicons-react";
import { Button } from "./button";

export interface TimelineItemProps {
  /** Date string */
  date: string;
  /** Time string */
  time: string;
  /** Meeting/activity title */
  title: string;
  /** AI-generated summary */
  summary: string;
  /** Key concerns list */
  concerns?: string[];
  /** Sentiment/risk tags */
  tags?: Array<{
    label: string;
    variant: "warning" | "danger" | "success";
  }>;
  /** Click handler for View Details */
  onViewDetails?: () => void;
  /** Additional class name */
  className?: string;
}

const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  (
    { date, time, title, summary, concerns, tags, onViewDetails, className },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("flex gap-3", className)}>
        {/* Left: Timeline with date/time */}
        <div className="flex w-[148px] shrink-0 flex-col items-start">
          <div className="flex gap-3">
            {/* Timeline dot */}
            <div className="relative flex flex-col items-center">
              <div className="flex size-7 items-center justify-center rounded-full border border-stroke-soft bg-bg-white shadow-xs">
                <Calendar01Icon size={16} className="text-text-strong" />
              </div>
              {/* Vertical line */}
              <div className="w-px flex-1 bg-stroke-soft" />
            </div>

            {/* Date/Time tags */}
            <div className="flex flex-col gap-1">
              <span className="rounded-[var(--radius-1-5)] bg-bg-weak px-2 py-1 text-label-sm text-text-strong">
                {date}
              </span>
              <span className="rounded-[var(--radius-1-5)] bg-bg-weak px-2 py-1 text-label-sm text-text-strong">
                {time}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Content card */}
        <div className="flex flex-1 flex-col gap-4 rounded-[var(--radius-3)] border border-stroke-soft bg-bg-white p-6">
          {/* Header */}
          <div className="flex items-center justify-between gap-3">
            <h4 className="flex-1 text-label-md text-text-strong">{title}</h4>
            <Button
              variant="neutral"
              styleType="stroke"
              size="sm"
              rightIcon={<ArrowUpRight01Icon size={16} />}
              onClick={onViewDetails}
            >
              View Details
            </Button>
          </div>

          {/* Divider */}
          <div className="h-px bg-stroke-soft" />

          {/* Summary */}
          <p className="text-paragraph-sm text-text-sub">{summary}</p>

          {/* Concerns */}
          {concerns && concerns.length > 0 && (
            <>
              <p className="text-label-sm text-text-strong">Key Concerns Raised:</p>
              <ul className="list-disc space-y-2 pl-5 text-paragraph-sm text-text-sub">
                {concerns.map((concern, index) => (
                  <li key={index}>{concern}</li>
                ))}
              </ul>
            </>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 border-t border-stroke-soft pt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-[var(--radius-1-5)] px-2 py-1",
                    "text-label-xs",
                    tag.variant === "warning" &&
                      "border border-warning-light bg-warning-lighter text-warning",
                    tag.variant === "danger" &&
                      "border border-danger-light bg-danger-lighter text-danger",
                    tag.variant === "success" &&
                      "border border-success-light bg-success-lighter text-success"
                  )}
                >
                  <Alert02Icon size={16} />
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

TimelineItem.displayName = "TimelineItem";

export { TimelineItem };
