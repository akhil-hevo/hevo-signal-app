"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { GlobalHeader } from "@/components/layout";
import {
  Card,
  Input,
  Button,
  Select,
  IconButton,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  AIChatButton,
  BrandLogo,
  LinkTag,
} from "@/components/ui";
import { CustomerDrawer } from "@/components/customer";
import { mockCustomers, mockSegments, dashboardStats } from "@/constants/mock-data";
import { formatCurrency, cn } from "@/lib/utils";
import {
  Search01Icon,
  FilterIcon,
  ViewIcon,
  RefreshIcon,
  MoreVerticalIcon,
} from "hugeicons-react";

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSegment, setSelectedSegment] = useState("seg-001");
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

  // Get the selected customer for the drawer
  const selectedCustomer = useMemo(() => {
    if (!selectedCustomerId) return null;
    return mockCustomers.find((c) => c.id === selectedCustomerId) || null;
  }, [selectedCustomerId]);

  // Filter customers based on search and segment
  const filteredCustomers = useMemo(() => {
    let customers = [...mockCustomers];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      customers = customers.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.website?.toLowerCase().includes(query) ||
          c.category?.toLowerCase().includes(query)
      );
    }

    // Apply segment filter
    const segment = mockSegments.find((s) => s.id === selectedSegment);
    if (segment?.filters.healthStatus) {
      customers = customers.filter((c) =>
        segment.filters.healthStatus?.includes(c.healthStatus)
      );
    }

    return customers;
  }, [searchQuery, selectedSegment]);

  const segmentOptions = mockSegments.map((s) => ({
    value: s.id,
    label: s.name,
  }));

  return (
    <div className="min-h-screen bg-bg-white">
      {/* Global Header - Dark */}
      <GlobalHeader onSelectCustomer={setSelectedCustomerId} />

      {/* Main Content */}
      <div className="p-6">
        <Card className="overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center gap-3 px-5 py-4">
            {/* Left: Account count and refresh */}
            <div className="flex flex-1 items-center gap-2">
              <span className="text-label-md text-text-strong">
                {dashboardStats.totalCustomers} Accounts
              </span>
              <IconButton
                icon={<RefreshIcon size={20} />}
                label="Refresh"
                variant="neutral"
                styleType="stroke"
                size="sm"
              />
            </div>

            {/* Right: Search, filters, actions */}
            {/* Search - 300px width */}
            <div className="w-[300px]">
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search01Icon size={20} />}
                rightIcon={
                  <span className="flex items-center rounded-[var(--radius-1)] border border-stroke-soft bg-bg-white px-1.5 py-0.5 text-subheading-xs text-text-soft">
                    ⌘1
                  </span>
                }
              />
            </div>

            {/* Segment Filter */}
            <Select
              options={segmentOptions}
              value={selectedSegment}
              onChange={setSelectedSegment}
              icon={<FilterIcon size={20} />}
            />

            {/* View & Manage Segments */}
            <Link href="/segments">
              <Button
                variant="neutral"
                styleType="stroke"
                size="sm"
                leftIcon={<ViewIcon size={20} />}
              >
                View & Manage Segments
              </Button>
            </Link>
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[280px]">Account</TableHead>
                <TableHead className="w-[180px]">Website</TableHead>
                <TableHead className="w-[140px]">Category</TableHead>
                <TableHead className="w-[140px]">Renewal Date</TableHead>
                <TableHead className="w-[120px]">ARR</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => {
                const isSelected = selectedCustomerId === customer.id;
                return (
                  <TableRow
                    key={customer.id}
                    className={cn(
                      "cursor-pointer transition-colors",
                      isSelected && "bg-primary-lighter"
                    )}
                    onClick={() => setSelectedCustomerId(customer.id)}
                  >
                    <TableCell>
                      <div className="group flex items-center gap-3">
                        <BrandLogo
                          brand={customer.brandLogo || customer.name}
                          fallback={customer.name}
                          size={32}
                        />
                        <span
                          className={cn(
                            "text-label-sm transition-colors",
                            isSelected
                              ? "text-primary"
                              : "text-text-strong group-hover:text-info"
                          )}
                        >
                          {customer.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {customer.website ? (
                        <LinkTag
                          href={customer.website}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {customer.website}
                        </LinkTag>
                      ) : null}
                    </TableCell>
                    <TableCell>
                      <span className="text-paragraph-sm text-text-sub">
                        {customer.category || ""}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-paragraph-sm text-text-sub">
                        {new Date(customer.renewalDate).toLocaleDateString("en-US", {
                          month: "numeric",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-label-sm text-text-strong">
                        {formatCurrency(customer.arr)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        icon={<MoreVerticalIcon size={20} />}
                        label="More actions"
                        variant="neutral"
                        styleType="ghost"
                        size="sm"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          {/* Empty state */}
          {filteredCustomers.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-bg-weak">
                <Search01Icon size={24} className="text-icon-soft" />
              </div>
              <h3 className="text-label-md text-text-strong">No accounts found</h3>
              <p className="mt-1 text-paragraph-sm text-text-sub">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </Card>
      </div>

      {/* AI Chat Button */}
      <AIChatButton />

      {/* Customer Detail Drawer */}
      <CustomerDrawer
        customer={selectedCustomer}
        isOpen={selectedCustomerId !== null}
        onClose={() => setSelectedCustomerId(null)}
      />
    </div>
  );
}
