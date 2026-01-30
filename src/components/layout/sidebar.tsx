"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home01Icon,
  UserMultipleIcon,
  ChartLineData01Icon,
  Settings01Icon,
  HelpCircleIcon,
  Menu01Icon,
  Cancel01Icon,
  Search01Icon,
} from "hugeicons-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  badge?: string | number;
}

const mainNavItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: Home01Icon },
  { label: "Customers", href: "/customers", icon: UserMultipleIcon },
  { label: "Analytics", href: "/analytics", icon: ChartLineData01Icon },
];

const bottomNavItems: NavItem[] = [
  { label: "Settings", href: "/settings", icon: Settings01Icon },
  { label: "Help", href: "/help", icon: HelpCircleIcon },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col bg-sidebar-bg text-sidebar-text transition-all duration-[var(--transition-slow)]",
        isCollapsed ? "w-[var(--sidebar-collapsed-width)]" : "w-[var(--sidebar-width)]"
      )}
    >
      {/* Logo */}
      <div className="flex h-14 items-center justify-between border-b border-sidebar-border px-4">
        {!isCollapsed && (
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-2)] bg-primary">
              <span className="text-label-sm text-white">S</span>
            </div>
            <span className="text-label-md text-sidebar-text">Signals</span>
          </Link>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-2)] text-sidebar-text-muted hover:bg-sidebar-hover hover:text-sidebar-text transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <Menu01Icon size={20} /> : <Cancel01Icon size={20} />}
        </button>
      </div>

      {/* Search */}
      {!isCollapsed && (
        <div className="p-4">
          <button className="flex h-9 w-full items-center gap-2 rounded-[var(--radius-2)] bg-sidebar-surface px-3 text-paragraph-sm text-sidebar-text-muted hover:text-sidebar-text transition-colors">
            <Search01Icon size={16} />
            <span>Search...</span>
            <kbd className="ml-auto rounded-[var(--radius-1)] bg-sidebar-hover px-1.5 py-0.5 text-label-xs">
              /
            </kbd>
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-2">
        {mainNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-[var(--radius-2)] px-3 py-2.5 text-label-sm transition-colors",
                isActive
                  ? "bg-sidebar-active text-white"
                  : "text-sidebar-text-muted hover:bg-sidebar-hover hover:text-sidebar-text",
                isCollapsed && "justify-center px-2"
              )}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon size={20} />
              {!isCollapsed && <span>{item.label}</span>}
              {!isCollapsed && item.badge && (
                <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-label-xs">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-sidebar-border px-3 py-4">
        {bottomNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-[var(--radius-2)] px-3 py-2.5 text-label-sm transition-colors",
                isActive
                  ? "bg-sidebar-hover text-sidebar-text"
                  : "text-sidebar-text-muted hover:bg-sidebar-hover hover:text-sidebar-text",
                isCollapsed && "justify-center px-2"
              )}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon size={20} />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}

        {/* User Profile */}
        <div
          className={cn(
            "mt-4 flex items-center gap-3 rounded-[var(--radius-2)] p-2",
            isCollapsed && "justify-center"
          )}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-label-sm text-white">
            JD
          </div>
          {!isCollapsed && (
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-label-sm text-sidebar-text">John Doe</p>
              <p className="truncate text-paragraph-xs text-sidebar-text-muted">
                john@hevo.io
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
