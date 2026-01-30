"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { IconButton } from "@/components/ui/icon-button";
import { BrandLogo } from "@/components/ui/brand-logos";
import { mockCustomers } from "@/constants/mock-data";
import { Search01Icon, Settings01Icon } from "hugeicons-react";

interface GlobalHeaderProps {
  className?: string;
  onSelectCustomer?: (customerId: string) => void;
}

export function GlobalHeader({ className, onSelectCustomer }: GlobalHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter customers based on search query
  const filteredCustomers = useMemo(() => {
    if (!searchQuery.trim()) {
      return mockCustomers.slice(0, 5); // Show first 5 when no query
    }
    const query = searchQuery.toLowerCase();
    return mockCustomers
      .filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.website?.toLowerCase().includes(query)
      )
      .slice(0, 8); // Max 8 results
  }, [searchQuery]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard shortcut "/" to focus search
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && !isFocused) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isFocused]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredCustomers]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isFocused) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCustomers.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        event.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        event.preventDefault();
        if (filteredCustomers[selectedIndex]) {
          handleSelectCustomer(filteredCustomers[selectedIndex].id);
        }
        break;
      case "Escape":
        setIsFocused(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSelectCustomer = (customerId: string) => {
    setSearchQuery("");
    setIsFocused(false);
    onSelectCustomer?.(customerId);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex items-center justify-between border-b border-stroke-soft bg-bg-white py-2 px-11",
        className
      )}
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <div className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-2)] bg-text-strong">
          <span className="text-label-sm text-white font-semibold">S</span>
        </div>
      </div>

      {/* Right: Search, Settings, Avatar */}
      <div className="flex items-center gap-2">
        {/* Search - Pill shaped with dropdown */}
        <div ref={containerRef} className="relative">
          <div
            className={cn(
              "flex h-9 w-[364px] items-center gap-2 rounded-full px-4 transition-all duration-150",
              isFocused
                ? "bg-bg-white border border-stroke-strong focus-ring"
                : "bg-bg-weak"
            )}
          >
            <Search01Icon size={16} className="text-icon-sub flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onKeyDown={handleKeyDown}
              placeholder="Jump to any Account"
              className="flex-1 bg-transparent text-paragraph-sm text-text-strong placeholder:text-text-soft outline-none"
            />
            {!isFocused && (
              <kbd className="flex h-5 min-w-5 items-center justify-center rounded bg-bg-white px-1.5 text-label-xs text-text-soft border border-stroke-soft">
                /
              </kbd>
            )}
          </div>

          {/* Dropdown */}
          {isFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 overflow-hidden rounded-[var(--radius-3)] border border-stroke-soft bg-bg-white shadow-lg animate-in fade-in-0 zoom-in-95">
              <div className="p-2">
                {filteredCustomers.length > 0 ? (
                  <div className="space-y-0.5">
                    {filteredCustomers.map((customer, index) => (
                      <button
                        key={customer.id}
                        onClick={() => handleSelectCustomer(customer.id)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-[var(--radius-2)] px-3 py-2 text-left transition-colors",
                          index === selectedIndex
                            ? "bg-bg-weak"
                            : "hover:bg-bg-weak"
                        )}
                      >
                        <BrandLogo
                          brand={customer.brandLogo || customer.name}
                          fallback={customer.name}
                          size={28}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-label-sm text-text-strong truncate">
                            {customer.name}
                          </p>
                          {customer.website && (
                            <p className="text-paragraph-xs text-text-sub truncate">
                              {customer.website}
                            </p>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-3 py-6 text-center">
                    <p className="text-paragraph-sm text-text-sub">No accounts found</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <IconButton
          icon={<Settings01Icon size={20} />}
          label="Settings"
          variant="neutral"
          styleType="ghost"
          size="sm"
        />

        {/* User Avatar */}
        <Avatar
          fallback="Wei Chen"
          size="sm"
        />
      </div>
    </header>
  );
}
