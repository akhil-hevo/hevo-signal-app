"use client";

import { forwardRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Cancel01Icon } from "hugeicons-react";
import { IconButton } from "./icon-button";

export interface DrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean;
  /** Callback when drawer should close */
  onClose: () => void;
  /** Drawer title */
  title?: React.ReactNode;
  /** Drawer subtitle */
  subtitle?: React.ReactNode;
  /** Header actions (right side of header) */
  headerActions?: React.ReactNode;
  /** Drawer content */
  children: React.ReactNode;
  /** Width of the drawer */
  width?: "sm" | "md" | "lg" | "xl";
  /** Additional class name */
  className?: string;
}

const widthClasses = {
  sm: "w-[360px]",
  md: "w-[480px]",
  lg: "w-[600px]",
  xl: "w-[720px]",
};

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      isOpen,
      onClose,
      title,
      subtitle,
      headerActions,
      children,
      width = "lg",
      className,
    },
    ref
  ) => {
    // Handle escape key
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape" && isOpen) {
          onClose();
        }
      };

      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "fixed top-0 right-0 z-40 h-screen flex flex-col",
          "border-l border-stroke-soft bg-bg-white shadow-lg",
          "animate-in slide-in-from-right duration-200",
          widthClasses[width],
          className
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-stroke-soft px-6 py-4">
          <div className="flex-1 min-w-0">
            {title && (
              <h2 className="text-label-lg text-text-strong truncate">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-0.5 text-paragraph-sm text-text-sub truncate">
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {headerActions}
            <IconButton
              icon={<Cancel01Icon size={20} />}
              label="Close drawer"
              variant="neutral"
              styleType="ghost"
              size="sm"
              onClick={onClose}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    );
  }
);

Drawer.displayName = "Drawer";

export { Drawer };
