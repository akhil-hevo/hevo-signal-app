import { cn } from "@/lib/utils";

export type HealthStatus = "green" | "yellow" | "red";

export interface HealthBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: HealthStatus;
  showLabel?: boolean;
  size?: "sm" | "md";
}

const statusConfig: Record<
  HealthStatus,
  { label: string; dotClass: string; bgClass: string; textClass: string }
> = {
  green: {
    label: "Green",
    dotClass: "bg-success",
    bgClass: "bg-success-lighter",
    textClass: "text-success",
  },
  yellow: {
    label: "Yellow",
    dotClass: "bg-warning",
    bgClass: "bg-warning-lighter",
    textClass: "text-warning",
  },
  red: {
    label: "Red",
    dotClass: "bg-danger",
    bgClass: "bg-danger-lighter",
    textClass: "text-danger",
  },
};

function HealthBadge({
  status,
  showLabel = true,
  size = "md",
  className,
  ...props
}: HealthBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium",
        config.bgClass,
        config.textClass,
        size === "sm" ? "px-2 py-0.5 text-[11px] rounded-[var(--radius-1)]" : "px-2.5 py-1 text-xs rounded-[var(--radius-1-5)]",
        className
      )}
      {...props}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", config.dotClass)} />
      {showLabel && config.label}
    </span>
  );
}

export { HealthBadge };
