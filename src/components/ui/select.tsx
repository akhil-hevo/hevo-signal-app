"use client";

import { forwardRef, useState, useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown01Icon, Tick01Icon } from "hugeicons-react";

export interface SelectOption {
  value: string;
  label: string;
  icon?: ReactNode;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue,
      onChange,
      placeholder = "Select...",
      className,
      disabled,
      icon,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const containerRef = useRef<HTMLDivElement>(null);

    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : uncontrolledValue;
    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(optionValue);
      }
      onChange?.(optionValue);
      setIsOpen(false);
    };

    return (
      <div ref={containerRef} className="relative">
        <button
          ref={ref}
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "inline-flex h-9 items-center gap-1 rounded-[var(--radius-2)] p-2 text-label-sm border transition-all duration-150",
            // Default state
            !isOpen && !isHovered && !disabled &&
              "bg-bg-white border-stroke-soft text-text-sub shadow-xs",
            // Hover state
            isHovered && !isOpen && !disabled &&
              "bg-bg-weak border-transparent text-text-sub shadow-xs",
            // Open/Focus state
            isOpen && !disabled &&
              "bg-bg-white border-stroke-strong text-text-sub focus-ring",
            // Disabled state
            disabled &&
              "bg-bg-weak border-transparent text-text-disabled cursor-not-allowed",
            className
          )}
        >
          {(icon || selectedOption?.icon) && (
            <span className={cn(
              "flex-shrink-0 [&>svg]:size-5 transition-colors",
              !isOpen && !isHovered && !disabled && "text-icon-soft",
              (isHovered || isOpen) && !disabled && "text-icon-sub",
              disabled && "text-icon-disabled"
            )}>
              {icon || selectedOption?.icon}
            </span>
          )}
          <span className="px-1">{selectedOption?.label || placeholder}</span>
          <ArrowDown01Icon
            size={20}
            className={cn(
              "flex-shrink-0 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 z-50 mt-1 min-w-full overflow-hidden rounded-[var(--radius-2)] border border-stroke-soft bg-bg-white p-1 shadow-lg animate-in fade-in-0 zoom-in-95">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-[var(--radius-1-5)] px-3 py-2 text-left text-sm transition-colors",
                  "hover:bg-bg-weak focus-visible:outline-none focus-visible:bg-bg-weak",
                  option.value === value
                    ? "text-primary bg-primary-lighter/50"
                    : "text-text-strong"
                )}
              >
                {option.icon && <span>{option.icon}</span>}
                <span className="flex-1">{option.label}</span>
                {option.value === value && (
                  <Tick01Icon size={16} className="text-primary" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
