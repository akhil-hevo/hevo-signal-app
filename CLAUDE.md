# Hevo Signals - Project Context & Development Guide

## Project Overview
**Hevo Signals** is a Customer Success Leader's Strategic Copilot - a dashboard for customer insights and churn risk management. It aggregates data across sales, payments, support, and product systems to provide:
- Complete view of every customer
- Early churn risk detection
- Clear, actionable insights

---

## Tech Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16 | App Router framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | v4 | Styling with CSS custom properties |
| hugeicons-react | latest | Icon library |
| class-variance-authority | latest | Component variant management |
| clsx + tailwind-merge | latest | Conditional class utilities |

---

## Project Structure
```
src/
├── app/
│   ├── globals.css          # Design tokens (colors, typography, spacing)
│   ├── layout.tsx           # Root layout with sidebar
│   └── page.tsx             # Dashboard page
├── components/
│   ├── ui/                  # Reusable UI primitives
│   │   ├── button.tsx       # Button with variants & styleTypes
│   │   ├── badge.tsx        # Status badges
│   │   ├── card.tsx         # Card compound component
│   │   ├── input.tsx        # Form input
│   │   ├── avatar.tsx       # User/brand avatars
│   │   ├── drawer.tsx       # Slide-out panel
│   │   ├── tabs.tsx         # Tab navigation
│   │   ├── table.tsx        # Data table
│   │   ├── select.tsx       # Dropdown select
│   │   ├── popover.tsx      # Popover tooltip
│   │   ├── brand-logos.tsx  # SVG brand logo components
│   │   ├── health-badge.tsx # Health status indicator
│   │   ├── stats-card.tsx   # Metric display card
│   │   ├── timeline-item.tsx # Activity timeline
│   │   ├── filter-tab.tsx   # Filter chip buttons
│   │   ├── link-tag.tsx     # URL display component
│   │   ├── icon-button.tsx  # Icon-only button
│   │   ├── integration-badge.tsx
│   │   ├── integration-button.tsx
│   │   ├── activity-stat-card.tsx
│   │   ├── customer-detail-item.tsx
│   │   ├── detail-item.tsx
│   │   └── index.ts         # Barrel export (ALWAYS update this)
│   ├── customer/            # Customer domain components
│   │   ├── customer-table.tsx
│   │   ├── customer-drawer.tsx
│   │   └── index.ts
│   └── layout/
│       ├── sidebar.tsx
│       ├── header.tsx
│       └── index.ts
├── lib/
│   └── utils.ts             # cn(), formatCurrency(), formatPercentage(), formatDate(), getInitials()
├── types/
│   └── index.ts             # TypeScript interfaces
├── constants/
│   └── mock-data.ts         # Sample data for development
└── hooks/                   # Custom React hooks
```

---

## Design Tokens Reference

### Colors - Primary
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary-base` | #335cff | Primary actions, links, selected states |
| `--color-primary-hover` | #2a4fd9 | Hover state |
| `--color-primary-active` | #2344b3 | Active/pressed state |
| `--color-primary-lighter` | #ebf1ff | Light backgrounds |

### Colors - Text
| Token | Tailwind Class | Value | Usage |
|-------|----------------|-------|-------|
| `--color-text-strong` | `text-text-strong` | #171717 | Primary text, headings |
| `--color-text-sub` | `text-text-sub` | #5c5c5c | Secondary text, labels |
| `--color-text-soft` | `text-text-soft` | #a3a3a3 | Muted text, placeholders |

### Colors - Background
| Token | Tailwind Class | Value | Usage |
|-------|----------------|-------|-------|
| `--color-bg-white` | `bg-bg-white` | #ffffff | Card backgrounds |
| `--color-bg-weak` | `bg-bg-weak` | #f7f7f7 | Page background, tags |
| `--color-bg-surface` | `bg-bg-surface` | #fafafa | Surface areas |

### Colors - Stroke/Border
| Token | Tailwind Class | Value |
|-------|----------------|-------|
| `--color-stroke-soft` | `border-stroke-soft` | #ebebeb |
| `--color-stroke-strong` | `border-stroke-strong` | #d4d4d4 |

### Colors - Semantic States
| State | Base | Lighter | Light | Usage |
|-------|------|---------|-------|-------|
| Success | #1fc16b | #e3f7ec | #b8eacc | Healthy status, positive metrics |
| Warning | #fa7319 | #fff3eb | #ffd9c0 | At-risk status, alerts |
| Danger | #ef4444 | #fee2e2 | #fca5a5 | Critical status, errors |
| Info | #335cff | #ebf1ff | #c7d7ff | Information, selected states |

### Colors - Sidebar (Dark Theme)
| Token | Value |
|-------|-------|
| `--color-sidebar-bg` | #0e121b |
| `--color-sidebar-surface` | #161b26 |
| `--color-sidebar-hover` | #1f2633 |
| `--color-sidebar-active` | #335cff |
| `--color-sidebar-text` | #ffffff |
| `--color-sidebar-text-muted` | #94a3b8 |

---

## Typography System

### Font Families
- **Body:** Inter
- **Headings:** Inter Display

### Semantic Typography Classes
| Class | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `.text-title-h5` | 24px | 500 | 32px | Section titles |
| `.text-label-lg` | 18px | 500 | 24px | Large labels |
| `.text-label-md` | 16px | 500 | 24px | Medium labels |
| `.text-label-sm` | 14px | 500 | 20px | Small labels, buttons |
| `.text-label-xs` | 12px | 500 | 16px | Tags, badges |
| `.text-paragraph-sm` | 14px | 400 | 20px | Body text |
| `.text-paragraph-xs` | 12px | 400 | 16px | Small body text |
| `.text-body-xs` | 12px | 400 | 18px | Descriptions |
| `.text-subheading-xs` | 12px | 500 | 16px | Uppercase subheadings |

### Usage Pattern
```tsx
// ✅ CORRECT - Use semantic classes
<span className="text-label-sm text-text-strong">Label</span>
<p className="text-paragraph-xs text-text-sub">Description</p>

// ❌ AVOID - Raw Tailwind typography
<span className="text-sm font-medium text-gray-900">Label</span>
```

---

## Spacing & Layout

### Spacing Scale
| Token | Value | Tailwind |
|-------|-------|----------|
| `--spacing-0-5` | 2px | `gap-0.5`, `p-0.5` |
| `--spacing-1` | 4px | `gap-1`, `p-1` |
| `--spacing-1-5` | 6px | `gap-1.5`, `p-1.5` |
| `--spacing-2` | 8px | `gap-2`, `p-2` |
| `--spacing-3` | 12px | `gap-3`, `p-3` |
| `--spacing-3-5` | 14px | `gap-3.5`, `p-3.5` |
| `--spacing-4` | 16px | `gap-4`, `p-4` |
| `--spacing-5` | 20px | `gap-5`, `p-5` |
| `--spacing-6` | 24px | `gap-6`, `p-6` |

### Custom Spacing with CSS Variables
```tsx
// For precise control matching Figma
<div className="py-[var(--spacing-1)] px-[var(--spacing-2)]">
  {/* 4px vertical, 8px horizontal */}
</div>
```

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-1` | 4px | Small elements |
| `--radius-1-5` | 6px | Tags, badges |
| `--radius-2` | 8px | Buttons, inputs |
| `--radius-2-5` | 10px | Cards |
| `--radius-3` | 12px | Large cards |
| `--radius-4` | 16px | Modals |
| `--radius-full` | 9999px | Circles, pills |

### Layout Constants
| Token | Value |
|-------|-------|
| `--sidebar-width` | 240px |
| `--sidebar-collapsed-width` | 72px |
| `--header-height` | 56px (top-14 in Tailwind) |

---

## Component Patterns

### Button Component
```tsx
import { Button } from "@/components/ui";

// Variants: primary, secondary, neutral, danger, ghost, link
// Style Types: filled, stroke, lighter, ghost
// Sizes: xs, sm, md, lg

<Button variant="primary" styleType="filled" size="md">
  Primary Action
</Button>

<Button variant="neutral" styleType="stroke" size="sm" leftIcon={<Icon />}>
  With Icon
</Button>
```

### Badge Component
```tsx
import { Badge } from "@/components/ui";

// Variants: default, primary, success, warning, danger, info
// Optional dot indicator

<Badge variant="success" dot>Healthy</Badge>
<Badge variant="warning">At Risk</Badge>
```

### Avatar Component
```tsx
import { Avatar } from "@/components/ui";

// Sizes: xxs (16px), xs (24px), sm (32px), md (40px), lg (48px), xl (64px), 2xl (80px)
// Shapes: circle, rounded, square

<Avatar src="/image.jpg" fallback="John Doe" size="sm" />
```

### Drawer Component Pattern
```tsx
// Drawer positioning below global topbar
<div
  ref={drawerRef}
  className={cn(
    "fixed top-14 right-0 bottom-0 z-50",  // top-14 = 56px header height
    "border-l border-stroke-soft bg-bg-white shadow-lg",
    "w-[70vw]"  // 70% viewport width
  )}
>
```

### Click Outside Handler
```tsx
const drawerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node) &&
      isOpen
    ) {
      onClose();
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [isOpen, onClose]);
```

### Timeline Pattern
```tsx
// Timeline with connecting line
<div className="relative">
  {/* Timeline dot */}
  <div className="relative z-10 flex size-7 items-center justify-center rounded-full border border-stroke-soft bg-bg-white">
    <Calendar01Icon size={16} />
  </div>

  {/* Connecting line - spans to next item */}
  {!isLast && (
    <div
      className="absolute left-[13.5px] top-7 w-px bg-stroke-soft"
      style={{ height: 'calc(100% + 14px)' }}
    />
  )}
</div>
```

---

## Brand Logos Management

### Adding New Brand Logos
Location: `src/components/ui/brand-logos.tsx`

```tsx
// 1. Create the logo component
export function NewBrandLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
    >
      {/* SVG paths */}
    </svg>
  );
}

// 2. Add to BrandLogos map
export const BrandLogos: Record<string, React.ComponentType<BrandLogoProps>> = {
  // ... existing logos
  newbrand: NewBrandLogo,
};

// 3. Export from index.ts
export { NewBrandLogo } from "./brand-logos";
```

### Using Brand Logos
```tsx
import { BrandLogo, HubSpotLogo, ZendeskLogo } from "@/components/ui";

// Dynamic by name
<BrandLogo brand="slack" size={24} />

// Direct component for specific logo
<HubSpotLogo size={16} />
<ZendeskLogo size={16} />
```

---

## hugeicons-react - Icon Library Reference

### Common Icon Name Mappings
The icon names don't always match intuition. Here are verified mappings:

| Expected Name | Actual hugeicons-react Name |
|---------------|----------------------------|
| AlertTriangle | `Alert02Icon` |
| TrendUp | `ChartIncreaseIcon` |
| TrendDown | `ChartDecreaseIcon` |
| ArrowUpRight | `ArrowUpRight01Icon` |
| ArrowRight | `ArrowRight02Icon` |
| Calendar | `Calendar01Icon` |
| Info | `InformationCircleIcon` |
| Close/X | `Cancel01Icon` |
| Search | `Search01Icon` |
| Settings | `Settings01Icon` |
| ChevronDown | `ArrowDown01Icon` |

### Icon Usage
```tsx
import { Alert02Icon, Calendar01Icon } from "hugeicons-react";

<Alert02Icon size={16} className="text-warning" />
<Calendar01Icon size={20} className="text-text-strong" />
```

### Finding Icons
If an icon name doesn't exist, search in node_modules:
```bash
grep -r "AlertIcon" node_modules/hugeicons-react/dist/
```

---

## Do's and Don'ts

### ✅ DO

1. **Use semantic typography classes**
   ```tsx
   <span className="text-label-sm text-text-strong">
   ```

2. **Use design tokens for spacing**
   ```tsx
   <div className="gap-[var(--spacing-3)]">
   ```

3. **Export new components from barrel files**
   ```tsx
   // ui/index.ts
   export { NewComponent } from "./new-component";
   ```

4. **Use forwardRef for reusable components**
   ```tsx
   const Component = forwardRef<HTMLDivElement, Props>((props, ref) => { ... });
   Component.displayName = "Component";
   ```

5. **Use cn() for conditional classes**
   ```tsx
   import { cn } from "@/lib/utils";
   <div className={cn("base-class", isActive && "active-class")}>
   ```

6. **Position drawers/modals below the global topbar**
   ```tsx
   className="fixed top-14 right-0 bottom-0"  // top-14 = 56px header
   ```

7. **Check icon existence before using**
   - Icons from hugeicons-react may have unexpected names
   - Verify imports compile before committing

### ❌ DON'T

1. **Don't use hardcoded colors**
   ```tsx
   // ❌ Bad
   <div className="text-gray-700 bg-gray-100">

   // ✅ Good
   <div className="text-text-sub bg-bg-weak">
   ```

2. **Don't forget to update barrel exports**
   ```tsx
   // ui/index.ts must include all public components
   ```

3. **Don't use inline icon components in mock data**
   ```tsx
   // ❌ Bad - Will cause "not defined" errors
   const data = [{ icon: <ZendeskIcon /> }];

   // ✅ Good - Import from brand-logos
   import { ZendeskLogo } from "@/components/ui";
   const data = [{ icon: <ZendeskLogo size={16} /> }];
   ```

4. **Don't guess icon names**
   ```tsx
   // ❌ May not exist
   import { AlertTriangleIcon } from "hugeicons-react";

   // ✅ Verify first
   import { Alert02Icon } from "hugeicons-react";
   ```

5. **Don't use inset-0 for drawers with topbar**
   ```tsx
   // ❌ Overlaps topbar
   className="fixed inset-0"

   // ✅ Below topbar
   className="fixed top-14 right-0 bottom-0"
   ```

6. **Don't hardcode dimensions for responsive overlays**
   ```tsx
   // ❌ Fixed width
   className="w-[600px]"

   // ✅ Percentage based
   className="w-[70vw]"
   ```

---

## Micro Animations

### Animation Classes Available
Located in `src/app/globals.css`:

| Class | Effect | Duration |
|-------|--------|----------|
| `.animate-slide-in-right` | Slide in from right edge | 200ms |
| `.animate-slide-out-right` | Slide out to right edge | 200ms |
| `.animate-fade-in` | Fade in opacity | 150ms |
| `.animate-fade-out` | Fade out opacity | 150ms |
| `.animate-scale-in` | Scale from 0.95 to 1 | 150ms |
| `.animate-slide-up` | Slide up 4px with fade | 150ms |
| `.animate-slide-down` | Slide down 4px with fade | 150ms |
| `.animate-subtle-pulse` | Subtle opacity pulse | 2s infinite |

### Transition Utilities
| Class | Duration |
|-------|----------|
| `.transition-micro` | 150ms |
| `.transition-base` | 200ms |
| `.transition-slow` | 300ms |
| `.hover-lift` | Lift with shadow on hover |
| `.press-effect` | Scale down on active |

### Avatar Color Variants
Avatars automatically get consistent colored backgrounds based on name:
```tsx
// Classes applied automatically via getAvatarColor():
.avatar-bg-blue    // #dbeafe background, #1e40af text
.avatar-bg-purple  // #ede9fe background, #5b21b6 text
.avatar-bg-pink    // #fce7f3 background, #9d174d text
.avatar-bg-green   // #dcfce7 background, #166534 text
.avatar-bg-yellow  // #fef3c7 background, #92400e text
.avatar-bg-orange  // #ffedd5 background, #c2410c text
.avatar-bg-teal    // #ccfbf1 background, #115e59 text
.avatar-bg-indigo  // #e0e7ff background, #3730a3 text
.avatar-bg-rose    // #ffe4e6 background, #9f1239 text
.avatar-bg-cyan    // #cffafe background, #0e7490 text
```

### Common Animation Patterns

**Drawer with backdrop:**
```tsx
<>
  {/* Backdrop overlay */}
  <div className="fixed inset-0 z-40 bg-black/5 animate-fade-in" onClick={onClose} />

  {/* Drawer panel */}
  <div className="fixed top-14 right-0 bottom-0 z-50 animate-slide-in-right">
    ...
  </div>
</>
```

**Staggered list animation:**
```tsx
{items.map((item, index) => (
  <div
    key={item.id}
    className="animate-fade-in"
    style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
  >
    <ItemComponent {...item} />
  </div>
))}
```

**Button press effect:**
```tsx
<button className="transition-all duration-150 active:scale-[0.98]">
  Click me
</button>
```

**Card hover effect:**
```tsx
<div className="transition-all duration-150 hover:border-stroke-strong hover:shadow-sm">
  ...
</div>
```

---

## Common Pitfalls & Solutions

### Issue: Icon not found error
**Symptom:** `Module not found: Can't resolve 'hugeicons-react'` or icon doesn't render

**Solution:**
1. Check exact icon name in hugeicons-react package
2. Most icons have numeric suffix (e.g., `Icon01`, `Icon02`)
3. Search package: `grep -r "IconName" node_modules/hugeicons-react/`

### Issue: Drawer overlapping topbar
**Symptom:** Drawer covers the header/navigation

**Solution:**
```tsx
// Use top-14 (56px) to start below header
className="fixed top-14 right-0 bottom-0"
```

### Issue: Component not exported
**Symptom:** Import error for component that exists

**Solution:**
1. Check `src/components/ui/index.ts`
2. Add missing export: `export { Component } from "./component";`

### Issue: Click outside not working
**Symptom:** Drawer doesn't close when clicking overlay

**Solution:**
```tsx
// Use mousedown, not click
document.addEventListener("mousedown", handleClickOutside);

// Ensure ref is on the drawer container, not a wrapper
<div ref={drawerRef} className="...">
```

### Issue: Timeline line not connecting items
**Symptom:** Vertical line stops at item boundary

**Solution:**
```tsx
// Use calc() to extend beyond parent
style={{ height: 'calc(100% + 14px)' }}

// Position absolutely with precise offset
className="absolute left-[13.5px] top-7 w-px"
```

---

## TypeScript Interfaces

```typescript
// Core domain types
interface Customer {
  id: string;
  name: string;
  brandLogo?: string;
  website?: string;
  arr: number;
  healthStatus: HealthStatus;
  csm: { name: string; avatar?: string };
  renewalDate: string;
  lastContact: string;
  category?: string;
}

type HealthStatus = "healthy" | "at-risk" | "critical";
type Sentiment = "positive" | "neutral" | "negative";

interface Meeting { ... }
interface SupportTicket { ... }
interface ProductUsage { ... }
interface DashboardStats { ... }
```

---

## Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

---

## MCP Server (Figma Integration)

Figma MCP configured at: `http://127.0.0.1:3845/mcp`

**Requirements:**
- Figma desktop app running
- MCP plugin enabled in Figma

**Capabilities:**
- Extract design tokens directly from Figma
- Get component specifications
- Pixel-perfect implementation reference

---

## Current Status

### Completed
- [x] Project scaffolding (Next.js + TypeScript + Tailwind v4)
- [x] Design tokens extracted and implemented
- [x] Typography utility classes
- [x] UI component library (Button, Badge, Card, Input, Avatar, Drawer, Table, Tabs, Select)
- [x] Brand logo system with 20+ logos
- [x] Layout components (Sidebar, Header)
- [x] Customer table with health indicators
- [x] Customer detail drawer (two-panel layout)
- [x] Activity timeline with meeting summaries
- [x] Click outside to close drawer
- [x] Figma MCP integration

### In Progress
- [ ] Email threads timeline view
- [ ] Support tickets timeline view
- [ ] Analytics dashboard

### Planned
- [ ] LLM-powered meeting summaries
- [ ] Risk scoring algorithm
- [ ] Real-time data integration
