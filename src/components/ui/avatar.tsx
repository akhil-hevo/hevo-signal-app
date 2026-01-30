"use client";

import { forwardRef, useState, useMemo } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, getInitials } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden transition-transform duration-150",
  {
    variants: {
      size: {
        xxs: "h-4 w-4 text-[8px]",
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-lg",
        "2xl": "h-20 w-20 text-xl",
      },
      shape: {
        circle: "rounded-full",
        rounded: "rounded-[var(--radius-2)]",
        square: "rounded-[var(--radius-1)]",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
    },
  }
);

// Subtle faded color palette for avatar backgrounds
const avatarColors = [
  "avatar-bg-blue",
  "avatar-bg-purple",
  "avatar-bg-pink",
  "avatar-bg-green",
  "avatar-bg-yellow",
  "avatar-bg-orange",
  "avatar-bg-teal",
  "avatar-bg-indigo",
  "avatar-bg-rose",
  "avatar-bg-cyan",
];

// Generate consistent color based on name string
function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  const index = Math.abs(hash) % avatarColors.length;
  return avatarColors[index];
}

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, shape, src, alt, fallback, ...props }, ref) => {
    const [imageError, setImageError] = useState(false);
    const name = fallback || alt || "";
    const initials = name ? getInitials(name) : "?";

    // Memoize color to keep it consistent across re-renders
    const avatarColorClass = useMemo(() => getAvatarColor(name), [name]);

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size, shape, className }))}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt || "Avatar"}
            className="aspect-square h-full w-full object-cover animate-fade-in"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={cn(
            "flex h-full w-full items-center justify-center font-medium",
            avatarColorClass
          )}>
            {initials}
          </div>
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
