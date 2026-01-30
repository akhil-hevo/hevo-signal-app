import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  trend?: "up" | "down" | "neutral";
  trendIcon?: ReactNode;
}

function StatsCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendIcon,
  className,
  ...props
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 rounded-[var(--radius-3)] border border-stroke-soft bg-bg-white p-4",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <span className="text-label-xs text-text-sub">{title}</span>
        {trendIcon && (
          <span
            className={cn(
              "flex items-center",
              trend === "up" && "text-success",
              trend === "down" && "text-danger",
              trend === "neutral" && "text-text-soft"
            )}
          >
            {trendIcon}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-title-h5 text-text-strong">{value}</span>
        {icon && <span className="text-icon-soft">{icon}</span>}
      </div>
      {subtitle && (
        <span className="text-paragraph-xs text-text-soft">{subtitle}</span>
      )}
    </div>
  );
}

export { StatsCard };
