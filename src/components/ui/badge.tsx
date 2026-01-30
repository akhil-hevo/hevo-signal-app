import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-bg-weak text-text-sub",
        primary: "bg-primary-lighter text-primary",
        success: "bg-success-lighter text-success",
        warning: "bg-warning-lighter text-warning",
        danger: "bg-danger-lighter text-danger",
        info: "bg-info-lighter text-info",
        outline: "border border-stroke-soft text-text-strong bg-transparent",
      },
      size: {
        sm: "px-2 py-0.5 text-[11px] leading-4 rounded-[var(--radius-1)]",
        md: "px-2.5 py-1 text-xs rounded-[var(--radius-1-5)]",
        lg: "px-3 py-1.5 text-sm rounded-[var(--radius-2)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

function Badge({ className, variant, size, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full shrink-0",
            variant === "success" && "bg-success",
            variant === "warning" && "bg-warning",
            variant === "danger" && "bg-danger",
            variant === "info" && "bg-info",
            variant === "primary" && "bg-primary",
            (!variant || variant === "default" || variant === "outline") &&
              "bg-text-soft"
          )}
        />
      )}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
