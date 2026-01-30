"use client";

import { useState, useEffect, useRef } from "react";
import { Customer } from "@/types";
import { cn, formatCurrency } from "@/lib/utils";
import { BrandLogo, HubSpotLogo, ZendeskLogo, FathomLogo } from "@/components/ui/brand-logos";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LinkTag } from "@/components/ui/link-tag";
import {
  Cancel01Icon,
  Calendar01Icon,
  InformationCircleIcon,
  ArrowUpRight01Icon,
  Alert02Icon,
  ArrowLeft01Icon,
  PlayCircle02Icon,
} from "hugeicons-react";

interface CustomerDrawerProps {
  customer: Customer | null;
  isOpen: boolean;
  onClose: () => void;
}

interface ActivityStat {
  title: string;
  value: string;
  subtitle: string;
  secondaryInfo: string;
  icon: React.ReactNode;
}

interface Participant {
  name: string;
  email: string;
  avatar?: string;
}

interface TimelineEntry {
  id: string;
  date: string;
  time: string;
  duration?: string;
  title: string;
  summary: string;
  concerns?: string[];
  tags?: Array<{ label: string; variant: "warning" | "danger" | "success" | "neutral" }>;
  customerParticipants?: Participant[];
  hevoParticipants?: Participant[];
  topics?: string[];
  recordingUrl?: string;
}

// Mock data for activities (would come from API in real app)
const mockActivityStats: ActivityStat[] = [
  {
    title: "Meetings",
    value: "48 days",
    subtitle: "since last meeting",
    secondaryInfo: "4 meetings in 1 year",
    icon: <FathomLogo size={16} />,
  },
  {
    title: "Email Threads",
    value: "9 days",
    subtitle: "since last email",
    secondaryInfo: "18 threads in 1 year",
    icon: <HubSpotLogo size={16} />,
  },
  {
    title: "Support Tickets",
    value: "42 days",
    subtitle: "since last ticket",
    secondaryInfo: "8 tickets in 1 year",
    icon: <ZendeskLogo size={16} />,
  },
];

const mockTimelineEntries: TimelineEntry[] = [
  {
    id: "1",
    date: "May 21, 2025",
    time: "01:00 PM",
    duration: "45 minutes",
    title: "Fathom summary for Hevo X PW",
    summary:
      "A general meeting between Hevo and Physics Wallah Private Limited discussing PW.live's data platform migration from Hevo Data to an in-house lake house architecture. Key topics included migration progress, current and future usage, and negotiation of a new flexible month-to-month pricing plan.",
    concerns: [
      "PW.live is concerned about scalability and readiness to fully cutover from Hevo Data, indicating they will not be 100% ready for the switch in the next 2-3 months.",
      "There is urgency in obtaining new pricing plans for 1 billion and 1.5 billion events per month to secure internal approval.",
      "PW.live mentioned challenges in scaling and adoption within their in-house data platform.",
    ],
    tags: [
      { label: "Customer Sentiment", variant: "warning" },
      { label: "Renewal Risk", variant: "warning" },
      { label: "Business Impact", variant: "warning" },
    ],
    customerParticipants: [
      { name: "Prateek Jain", email: "prateek.jain@pw.live" },
      { name: "Rohit Sharma", email: "rohit.sharma@pw.live" },
    ],
    hevoParticipants: [
      { name: "Felix Joy", email: "felix.joy@hevodata.com" },
      { name: "Meghna Singh", email: "meghna.singh@hevodata.com" },
    ],
    topics: [
      "PW.live is migrating their data platform from Hevo Data to an in-house lake house architecture built on S3 and Trino.",
      "They discussed current usage patterns and the timeline for completing the migration over the next 2-3 months.",
      "Hevo proposed flexible month-to-month pricing plans for 1 billion and 1.5 billion events to accommodate their transition period.",
    ],
    recordingUrl: "#",
  },
  {
    id: "2",
    date: "Mar 18, 2025",
    time: "9:30 AM",
    duration: "60 minutes",
    title: "Hevo x Physicswalla | Quarterly Strategy Meet",
    summary:
      "The quarterly strategy meeting focused on reviewing Physics Wallah's evolving data infrastructure plans, including their move towards an in-house lake house solution and migration from Redshift to S3/Trino.",
    concerns: [
      "Physics Wallah expressed concern about ingestion delays due to near real-time processing requirements.",
      "They highlighted potential bottlenecks in data engineering resources during critical sales periods from April to June.",
    ],
    tags: [
      { label: "Pricing Concern", variant: "warning" },
      { label: "Product Issues", variant: "warning" },
    ],
    customerParticipants: [
      { name: "Prateek Jain", email: "prateek.jain@pw.live" },
      { name: "Amit Kumar", email: "amit.kumar@pw.live" },
    ],
    hevoParticipants: [
      { name: "Felix Joy", email: "felix.joy@hevodata.com" },
    ],
    topics: [
      "Reviewed Q1 performance metrics and data pipeline health.",
      "Discussed roadmap for migrating from Redshift to S3/Trino architecture.",
      "Identified resource bottlenecks during high-traffic sales periods.",
    ],
    recordingUrl: "#",
  },
];

function DetailItem({
  label,
  value,
  secondaryValue,
  showInfoIcon = false,
}: {
  label: string;
  value: React.ReactNode;
  secondaryValue?: string;
  showInfoIcon?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <span className="text-label-xs text-text-sub">{label}</span>
        {showInfoIcon && (
          <InformationCircleIcon size={14} className="text-text-strong" />
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        {typeof value === "string" ? (
          <span className="text-label-sm text-text-strong">{value}</span>
        ) : (
          value
        )}
        {secondaryValue && (
          <span className="text-label-sm text-text-sub">{secondaryValue}</span>
        )}
      </div>
    </div>
  );
}

function PersonTag({ name, avatarUrl }: { name: string; avatarUrl?: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <Avatar src={avatarUrl} fallback={name} size="xs" />
      <span className="text-label-sm text-text-strong">{name}</span>
    </div>
  );
}

function ActivityStatCard({
  title,
  value,
  subtitle,
  secondaryInfo,
  icon,
}: ActivityStat) {
  return (
    <div className="relative flex h-full flex-col gap-1 rounded-[var(--radius-3)] border border-stroke-soft bg-bg-white p-6 transition-all duration-150 hover:border-stroke-strong hover:shadow-sm">
      <p className="text-label-sm text-text-sub">{title}</p>
      <div className="flex flex-col gap-1.5">
        <p className="text-title-h5 text-text-strong">{value}</p>
        <div className="flex flex-col gap-1 text-paragraph-xs">
          <span className="text-text-sub">{subtitle}</span>
          <span className="text-label-xs text-text-strong">{secondaryInfo}</span>
        </div>
      </div>
      {icon && <div className="absolute right-5 top-5 transition-transform duration-150 group-hover:scale-110">{icon}</div>}
    </div>
  );
}

function FilterTab({
  icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-1 rounded-[var(--radius-1-5)] px-2 py-1",
        "text-label-sm transition-all duration-150",
        "active:scale-[0.98]",
        isActive
          ? "border border-info bg-bg-white text-info shadow-sm"
          : "border border-stroke-soft bg-bg-white text-text-strong hover:bg-bg-weak hover:border-stroke-strong"
      )}
    >
      <span className="size-4">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

// Compact stat card for sticky header
function CompactStatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 items-center gap-1 rounded-[var(--radius-2)] border border-stroke-soft bg-bg-white px-3.5 py-2.5">
      <span className="text-label-sm text-text-sub">{title}</span>
      <span className="flex-1 text-label-sm text-text-strong">{value}</span>
      <div className="shrink-0">{icon}</div>
    </div>
  );
}

// Meeting Details View Component
function MeetingDetailsView({
  entry,
  onBack,
}: {
  entry: TimelineEntry;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Header with breadcrumb */}
      <div className="flex items-center justify-between border-b border-stroke-soft px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 rounded-[var(--radius-2)] px-2 py-1 text-label-sm text-text-sub hover:bg-bg-weak transition-all duration-150"
          >
            <ArrowLeft01Icon size={16} />
            <span>Meetings</span>
          </button>
        </div>
        {entry.recordingUrl && (
          <Button
            variant="primary"
            styleType="stroke"
            size="sm"
            leftIcon={<PlayCircle02Icon size={16} />}
          >
            Recording
          </Button>
        )}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hover">
        <div className="flex flex-col gap-6 p-6">
          {/* Title and Meta */}
          <div className="flex flex-col gap-1">
            <h3 className="text-title-h5 text-text-strong">{entry.title}</h3>
            <p className="text-paragraph-sm text-text-sub">
              {entry.date}, {entry.time} • {entry.duration || "N/A"}
            </p>
          </div>

          {/* Participants */}
          <div className="flex flex-col gap-4">
            {/* Customer Participants */}
            {entry.customerParticipants && entry.customerParticipants.length > 0 && (
              <div className="flex flex-col gap-3">
                <p className="text-label-xs text-text-sub uppercase tracking-wider">Customer Participants</p>
                <div className="flex flex-col gap-2">
                  {entry.customerParticipants.map((participant, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Avatar fallback={participant.name} size="sm" />
                      <div className="flex flex-col">
                        <span className="text-label-sm text-text-strong">{participant.name}</span>
                        <span className="text-paragraph-xs text-text-sub">{participant.email}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hevo Participants */}
            {entry.hevoParticipants && entry.hevoParticipants.length > 0 && (
              <div className="flex flex-col gap-3">
                <p className="text-label-xs text-text-sub uppercase tracking-wider">Hevo Participants</p>
                <div className="flex flex-col gap-2">
                  {entry.hevoParticipants.map((participant, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Avatar fallback={participant.name} size="sm" />
                      <div className="flex flex-col">
                        <span className="text-label-sm text-text-strong">{participant.name}</span>
                        <span className="text-paragraph-xs text-text-sub">{participant.email}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-stroke-soft" />

          {/* Meeting Context */}
          <div className="flex flex-col gap-3">
            <p className="text-label-xs text-text-sub uppercase tracking-wider">Meeting Context</p>
            <p className="text-paragraph-sm text-text-sub">{entry.summary}</p>
          </div>

          {/* Tags */}
          {entry.tags && entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag, index) => (
                <span
                  key={index}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-[var(--radius-1-5)]",
                    "py-[var(--spacing-0-5)] px-[var(--spacing-2)]",
                    "text-xs",
                    tag.variant === "warning" && "bg-warning-lighter text-warning",
                    tag.variant === "danger" && "bg-danger-lighter text-danger",
                    tag.variant === "success" && "bg-success-lighter text-success",
                    tag.variant === "neutral" && "bg-bg-weak text-text-sub"
                  )}
                >
                  <Alert02Icon size={12} />
                  {tag.label}
                </span>
              ))}
            </div>
          )}

          {/* Topics */}
          {entry.topics && entry.topics.length > 0 && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg className="size-4 text-text-sub" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 5h6M5 8h6M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="text-label-sm text-text-strong">Topics</p>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-paragraph-sm text-text-sub">
                {entry.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Concerns */}
          {entry.concerns && entry.concerns.length > 0 && (
            <div className="flex flex-col gap-3">
              <p className="text-label-sm text-text-strong">Key Concerns Raised</p>
              <ul className="list-disc space-y-2 pl-5 text-paragraph-sm text-text-sub">
                {entry.concerns.map((concern, index) => (
                  <li key={index}>{concern}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ entry, isLast = false, onViewDetails }: { entry: TimelineEntry; isLast?: boolean; onViewDetails?: () => void }) {
  return (
    <div className="relative flex gap-3">
      {/* Left: Timeline with date/time */}
      <div className="flex w-[148px] shrink-0 flex-col items-start">
        <div className="flex gap-3">
          {/* Timeline dot */}
          <div className="relative z-10 flex size-7 items-center justify-center rounded-full border border-stroke-soft bg-bg-white shadow-xs">
            <Calendar01Icon size={16} className="text-text-strong" />
          </div>

          {/* Date/Time tags */}
          <div className="flex flex-col gap-1">
            <span className="rounded-[var(--radius-1-5)] bg-bg-weak px-2 py-1 text-label-sm text-text-strong">
              {entry.date}
            </span>
            <span className="rounded-[var(--radius-1-5)] bg-bg-weak px-2 py-1 text-label-sm text-text-strong">
              {entry.time}
            </span>
          </div>
        </div>
      </div>

      {/* Vertical timeline line - positioned absolutely to span full height plus gap */}
      {!isLast && (
        <div
          className="absolute left-[13.5px] top-7 z-0 w-px bg-stroke-soft"
          style={{ height: 'calc(100% + 14px)' }}
        />
      )}

      {/* Right: Content card */}
      <div className="flex flex-1 flex-col gap-4 rounded-[var(--radius-3)] border border-stroke-soft bg-bg-white px-6 py-3.5 transition-all duration-150 hover:border-stroke-strong hover:shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <h4 className="flex-1 text-label-md text-text-strong">{entry.title}</h4>
          <Button
            variant="neutral"
            styleType="stroke"
            size="sm"
            rightIcon={<ArrowUpRight01Icon size={16} />}
            onClick={onViewDetails}
          >
            View Details
          </Button>
        </div>

        {/* Divider */}
        <div className="h-px bg-stroke-soft" />

        {/* Summary */}
        <p className="text-paragraph-sm text-text-sub">{entry.summary}</p>

        {/* Concerns */}
        {entry.concerns && entry.concerns.length > 0 && (
          <>
            <p className="text-label-sm text-text-strong">Key Concerns Raised:</p>
            <ul className="list-disc space-y-3 pl-5 text-paragraph-sm text-text-sub">
              {entry.concerns.map((concern, index) => (
                <li key={index}>{concern}</li>
              ))}
            </ul>
          </>
        )}

        {/* Tags */}
        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 border-t border-stroke-soft pt-4">
            {entry.tags.map((tag, index) => (
              <span
                key={index}
                className={cn(
                  "inline-flex items-center gap-1 rounded-[var(--radius-1-5)]",
                  "py-[var(--spacing-0-5)] px-[var(--spacing-2)]",
                  "text-xs",
                  tag.variant === "warning" && "bg-warning-lighter text-warning",
                  tag.variant === "danger" && "bg-danger-lighter text-danger",
                  tag.variant === "success" && "bg-success-lighter text-success"
                )}
              >
                <Alert02Icon size={12} />
                {tag.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function CustomerDrawer({
  customer,
  isOpen,
  onClose,
}: CustomerDrawerProps) {
  const [activeTab, setActiveTab] = useState<"meeting" | "email" | "support">(
    "meeting"
  );
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<TimelineEntry | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prevCustomerIdRef = useRef<string | null>(null);

  // Track if this is a customer switch (not initial open)
  const isCustomerSwitch = prevCustomerIdRef.current !== null &&
    prevCustomerIdRef.current !== customer?.id &&
    isOpen;

  // Update previous customer ID
  useEffect(() => {
    if (customer?.id) {
      prevCustomerIdRef.current = customer.id;
    }
    if (!isOpen) {
      prevCustomerIdRef.current = null;
    }
  }, [customer?.id, isOpen]);

  // Reset state when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
      setIsScrolled(false);
      setSelectedMeeting(null);
    }
  }, [isOpen]);

  // Handle scroll for sticky compact stats
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setIsScrolled(scrollTop > 10);
  };

  // Handle close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 250);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen && !isClosing) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, isClosing]);

  // Handle click outside - but NOT on the global header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Don't close if clicking on the header or its children
      const header = document.querySelector("header");
      if (header?.contains(target)) {
        return;
      }

      if (
        drawerRef.current &&
        !drawerRef.current.contains(target) &&
        isOpen &&
        !isClosing
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isClosing]);

  if (!customer || !isOpen) return null;

  const renewalDate = new Date(customer.renewalDate);
  const customerSince = new Date(customer.lastContact); // Using lastContact as proxy
  const daysUntilRenewal = Math.ceil(
    (renewalDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );
  const yearsSinceCustomer = (
    (Date.now() - customerSince.getTime()) /
    (1000 * 60 * 60 * 24 * 365)
  ).toFixed(1);

  return (
    <div
        ref={drawerRef}
        className={cn(
          "fixed top-[53px] right-0 bottom-0 z-50 flex",
          "border-l border-stroke-soft bg-bg-white shadow-lg",
          "w-[85vw]",
          isClosing
            ? "animate-slide-out-right"
            : isCustomerSwitch
              ? ""
              : "animate-slide-in-right"
        )}
      >
      {/* Left Panel - Customer Profile */}
      <div className="flex w-[390px] shrink-0 flex-col border-r border-stroke-soft">
        {/* Compact Header with Close */}
        <div className="flex items-center gap-2 border-b border-stroke-soft px-4 py-2.5">
          <button
            onClick={handleClose}
            className="rounded-[var(--radius-2)] p-1.5 hover:bg-bg-weak transition-all duration-150 active:scale-95"
          >
            <Cancel01Icon size={20} className="text-icon-sub transition-colors duration-150 hover:text-icon-strong" />
          </button>
          <span className="text-label-sm text-text-sub">Customers</span>
        </div>

        {/* Customer Profile Section */}
        <div className="flex flex-col items-center gap-4 border-b border-stroke-soft p-6">
          {/* Logo */}
          <BrandLogo
            brand={customer.brandLogo || customer.name}
            fallback={customer.name}
            size={56}
          />

          {/* Name & Website */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-label-lg text-text-strong">{customer.name}</h2>
            {customer.website && (
              <LinkTag href={customer.website}>{customer.website}</LinkTag>
            )}
          </div>

          {/* Integration Buttons */}
          <div className="flex w-full gap-3">
            <Button
              variant="neutral"
              styleType="stroke"
              size="sm"
              leftIcon={<HubSpotLogo size={16} />}
              className="flex-1"
            >
              HubSpot
            </Button>
            <Button
              variant="neutral"
              styleType="stroke"
              size="sm"
              leftIcon={<ZendeskLogo size={16} />}
              className="flex-1"
            >
              Zendesk
            </Button>
          </div>
        </div>

        {/* Customer Details Grid */}
        <div className="flex flex-1 flex-col overflow-y-auto scrollbar-hover">
          <div className="grid grid-cols-2 gap-5 p-6">
            <DetailItem
              label="Current ARR"
              value={formatCurrency(customer.arr)}
              showInfoIcon
            />
            <DetailItem label="Landing ARR" value={formatCurrency(customer.arr)} />
            <DetailItem label="Lifecycle Stage" value="customer" />
            <DetailItem
              label="Market Type"
              value={customer.category || "Enterprise"}
              showInfoIcon
            />
            <DetailItem label="Payment Schedule" value="Annual" />
            <DetailItem label="Plan Type" value="Custom" />
            <DetailItem
              label="Customer Since"
              value={customerSince.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              secondaryValue={`(${yearsSinceCustomer} years)`}
            />
            <DetailItem
              label="Renewal Date"
              value={renewalDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              secondaryValue={`(In ${daysUntilRenewal} days)`}
              showInfoIcon
            />
            <DetailItem
              label="Account Owner"
              value={<PersonTag name={customer.csm.name} avatarUrl={customer.csm.avatar} />}
            />
            <DetailItem
              label="Assigned AM"
              value={<PersonTag name="Austine Jomy" />}
            />
            <DetailItem
              label="Assigned TAM"
              value={<PersonTag name="Felix Joy" />}
            />
            <DetailItem
              label="Health Score by TAM"
              showInfoIcon
              value={
                <div className="w-fit">
                  <Badge
                    variant={
                      customer.healthStatus === "healthy"
                        ? "success"
                        : customer.healthStatus === "at-risk"
                        ? "warning"
                        : "danger"
                    }
                    dot
                  >
                    {customer.healthStatus === "healthy"
                      ? "Green"
                      : customer.healthStatus === "at-risk"
                      ? "Yellow"
                      : "Red"}
                  </Badge>
                </div>
              }
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 border-t border-stroke-soft px-6 py-4">
          <svg className="size-5" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2L3 6v8l7 4 7-4V6l-7-4z"
              fill="#29B5E8"
              stroke="#29B5E8"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-paragraph-xs text-text-soft">
            Powered by your Snowflake data
          </span>
        </div>
      </div>

      {/* Right Panel - Activity */}
      <div className="flex flex-1 flex-col bg-bg-white overflow-hidden">
        {selectedMeeting ? (
          <MeetingDetailsView
            entry={selectedMeeting}
            onBack={() => setSelectedMeeting(null)}
          />
        ) : (
          /* Scrollable Content */
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto scrollbar-hover"
          >
            {/* Sticky Compact Stats Header - visible when scrolled */}
            <div
              className={cn(
                "sticky top-0 z-10 flex gap-3 border-b border-stroke-soft bg-bg-white px-6 transition-all duration-200",
                isScrolled ? "opacity-100 py-4" : "opacity-0 h-0 py-0 overflow-hidden"
              )}
            >
              {mockActivityStats.map((stat, index) => (
                <CompactStatCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                />
              ))}
            </div>

            {/* Full Stats Row - hidden when scrolled */}
            <div
              className={cn(
                "flex gap-5 border-b border-stroke-soft p-4 transition-all duration-200",
                isScrolled ? "opacity-0 h-0 p-0 overflow-hidden" : "opacity-100"
              )}
            >
              {mockActivityStats.map((stat, index) => (
                <div
                  key={index}
                  className="flex-1 animate-fade-in"
                  style={{ animationDelay: `${index * 75}ms`, animationFillMode: 'both' }}
                >
                  <ActivityStatCard {...stat} />
                </div>
              ))}
            </div>

            {/* Tab Filters & Timeline */}
            <div className="flex flex-col gap-3 p-6 pt-3">
              {/* Tab Filters - Sticky */}
              <div className="sticky top-0 z-[5] flex gap-2 bg-bg-white pb-4 pt-3">
                <FilterTab
                  icon={<FathomLogo size={16} />}
                  label="Meeting"
                  isActive={activeTab === "meeting"}
                  onClick={() => setActiveTab("meeting")}
                />
                <FilterTab
                  icon={<HubSpotLogo size={16} />}
                  label="Email Threads"
                  isActive={activeTab === "email"}
                  onClick={() => setActiveTab("email")}
                />
                <FilterTab
                  icon={<ZendeskLogo size={16} />}
                  label="Support Tickets"
                  isActive={activeTab === "support"}
                  onClick={() => setActiveTab("support")}
                />
              </div>

              {/* Timeline Feed */}
              <div className="flex flex-col gap-3.5">
                {mockTimelineEntries.map((entry, index) => (
                  <div
                    key={entry.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                  >
                    <TimelineCard
                      entry={entry}
                      isLast={index === mockTimelineEntries.length - 1}
                      onViewDetails={() => setSelectedMeeting(entry)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
