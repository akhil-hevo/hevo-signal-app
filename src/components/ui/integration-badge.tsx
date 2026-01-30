import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface IntegrationBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: ReactNode;
  label: string;
}

function IntegrationBadge({
  icon,
  label,
  className,
  ...props
}: IntegrationBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-2)] border border-stroke-soft bg-bg-white text-label-sm text-text-strong shadow-button transition-colors hover:bg-bg-weak",
        className
      )}
      {...props}
    >
      <span className="flex-shrink-0">{icon}</span>
      {label}
    </span>
  );
}

export { IntegrationBadge };
