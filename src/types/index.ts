/**
 * Customer health status types
 */
export type HealthStatus = "healthy" | "at-risk" | "critical";

/**
 * Sentiment types for interactions
 */
export type Sentiment = "positive" | "neutral" | "negative";

/**
 * Customer data structure
 */
export interface Customer {
  id: string;
  name: string;
  logo?: string;
  brandLogo?: string; // Key to match brand logo component (e.g., "dropbox", "slack")
  website?: string;
  category?: string;
  industry: string;
  healthScore: number;
  healthStatus: HealthStatus;
  arr: number;
  mrr: number;
  renewalDate: string;
  lastContact: string;
  csm: {
    id: string;
    name: string;
    avatar?: string;
  };
  tags: string[];
  sentiment: Sentiment;
  productUsage: number; // percentage
  supportTickets: {
    open: number;
    resolved: number;
  };
}

/**
 * Segment for filtering customers
 */
export interface Segment {
  id: string;
  name: string;
  description?: string;
  filters: CustomerFilters;
  color?: string;
}

/**
 * Meeting data structure
 */
export interface Meeting {
  id: string;
  customerId: string;
  title: string;
  date: string;
  duration: number; // minutes
  attendees: string[];
  summary: string;
  keyPoints: string[];
  sentiment: Sentiment;
  actionItems: ActionItem[];
  tags: string[];
}

/**
 * Action item from meetings
 */
export interface ActionItem {
  id: string;
  title: string;
  assignee: string;
  dueDate: string;
  completed: boolean;
}

/**
 * Support ticket data structure
 */
export interface SupportTicket {
  id: string;
  customerId: string;
  title: string;
  description: string;
  status: "open" | "in-progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high" | "critical";
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
  assignee?: string;
  sentiment: Sentiment;
  tags: string[];
}

/**
 * Product usage metrics
 */
export interface ProductUsage {
  customerId: string;
  period: string;
  activeUsers: number;
  totalUsers: number;
  sessionsCount: number;
  featuresUsed: {
    name: string;
    usageCount: number;
    trend: number; // percentage change
  }[];
  engagementScore: number;
}

/**
 * Dashboard stats
 */
export interface DashboardStats {
  totalCustomers: number;
  totalARR: number;
  averageHealthScore: number;
  atRiskCount: number;
  upcomingRenewals: number;
  renewalValue: number;
  npsScore: number;
  churnRate: number;
}

/**
 * Chart data point
 */
export interface ChartDataPoint {
  label: string;
  value: number;
  previousValue?: number;
}

/**
 * Filter options for customer list
 */
export interface CustomerFilters {
  search?: string;
  healthStatus?: HealthStatus[];
  sentiment?: Sentiment[];
  minARR?: number;
  maxARR?: number;
  tags?: string[];
  csm?: string[];
}

/**
 * Sort options for customer list
 */
export interface CustomerSort {
  field: keyof Customer;
  direction: "asc" | "desc";
}
