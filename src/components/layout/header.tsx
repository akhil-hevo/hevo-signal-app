"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { IconButton } from "@/components/ui/icon-button";
import {
  Search01Icon,
  Notification01Icon,
  Settings01Icon,
} from "hugeicons-react";

interface HeaderProps {
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}

export function Header({ title, description, actions, className }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex h-[var(--header-height)] items-center justify-between border-b border-stroke-soft bg-bg-white px-6",
        className
      )}
    >
      {/* Left: Title and description */}
      {(title || description) && (
        <div>
          {title && <h1 className="text-label-lg text-text-strong">{title}</h1>}
          {description && (
            <p className="text-paragraph-sm text-text-sub">{description}</p>
          )}
        </div>
      )}

      {/* Right: Search, notifications, actions */}
      <div className="ml-auto flex items-center gap-3">
        {/* Search */}
        <div className="hidden w-64 lg:block">
          <Input
            placeholder="Jump to any Account"
            leftIcon={<Search01Icon size={16} />}
          />
        </div>

        {/* Settings */}
        <IconButton
          icon={<Settings01Icon size={20} />}
          label="Settings"
          variant="neutral"
          styleType="ghost"
        />

        {/* Notifications */}
        <div className="relative">
          <IconButton
            icon={<Notification01Icon size={20} />}
            label="Notifications"
            variant="neutral"
            styleType="ghost"
          />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-danger" />
        </div>

        {/* Custom actions */}
        {actions}

        {/* User avatar */}
        <Avatar
          src="/avatars/user.jpg"
          alt="John Doe"
          fallback="John Doe"
          size="sm"
        />
      </div>
    </header>
  );
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  actions?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-6", className)}>
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="mb-2 flex items-center gap-2 text-paragraph-sm text-text-sub">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {index > 0 && <span className="text-text-soft">/</span>}
              {crumb.href ? (
                <a
                  href={crumb.href}
                  className="hover:text-text-strong hover:underline transition-colors"
                >
                  {crumb.label}
                </a>
              ) : (
                <span className="text-text-strong">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}

      {/* Title and actions */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-title-h5 text-text-strong">{title}</h1>
          {description && (
            <p className="mt-1 text-paragraph-sm text-text-sub">{description}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </div>
  );
}
