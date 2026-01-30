import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface DetailItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
  labelIcon?: ReactNode;
}

function DetailItem({
  label,
  value,
  icon,
  labelIcon,
  className,
  ...props
}: DetailItemProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      <div className="flex items-center gap-1">
        <span className="text-label-xs text-text-soft">{label}</span>
        {labelIcon && (
          <span className="text-icon-soft">{labelIcon}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        {icon && <span className="text-icon-sub">{icon}</span>}
        <span className="text-label-sm text-text-strong">{value}</span>
      </div>
    </div>
  );
}

export { DetailItem };
