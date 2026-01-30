"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface LinkTagProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The URL to link to */
  href: string;
  /** Whether to open in a new tab */
  external?: boolean;
}

const LinkTag = forwardRef<HTMLAnchorElement, LinkTagProps>(
  ({ className, href, external = true, children, ...props }, ref) => {
    // Ensure href has protocol for external links
    const finalHref = href.startsWith("http") ? href : `https://${href}`;

    return (
      <a
        ref={ref}
        href={finalHref}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(
          "inline-flex items-center px-2 py-0.5 rounded-full",
          "border border-info-light bg-transparent",
          "text-xs text-info transition-colors",
          "hover:bg-info-lighter",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

LinkTag.displayName = "LinkTag";

export { LinkTag };
