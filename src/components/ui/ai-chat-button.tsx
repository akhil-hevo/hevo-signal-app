"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SparklesIcon, Cancel01Icon, SentIcon, ArrowExpand01Icon, ArrowShrink01Icon } from "hugeicons-react";
import { Input } from "./input";
import { IconButton } from "./icon-button";

export interface AIChatButtonProps {
  className?: string;
}

function AIChatButton({ className }: AIChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm your AI assistant. I can help you analyze customer data, identify trends, and provide insights about your accounts. What would you like to know?",
        },
      ]);
    }, 1000);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsExpanded(false);
  };

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div
          className={cn(
            "fixed z-[60] flex flex-col overflow-hidden border-stroke-soft bg-bg-white shadow-lg transition-all duration-300",
            isExpanded
              ? "top-[53px] right-0 bottom-0 w-[420px] border-l rounded-none"
              : "bottom-24 right-6 h-[480px] w-[380px] rounded-[var(--radius-4)] border animate-in slide-in-from-bottom-4 fade-in-0",
            className
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stroke-soft px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <SparklesIcon size={16} className="text-white" />
              </div>
              <div>
                <h3 className="text-label-sm text-text-strong">AI Assistant</h3>
                <p className="text-paragraph-xs text-text-soft">
                  Ask anything about your data
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <IconButton
                icon={isExpanded ? <ArrowShrink01Icon size={18} /> : <ArrowExpand01Icon size={18} />}
                label={isExpanded ? "Collapse" : "Expand"}
                variant="neutral"
                styleType="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
              />
              <IconButton
                icon={<Cancel01Icon size={18} />}
                label="Close chat"
                variant="neutral"
                styleType="ghost"
                size="sm"
                onClick={handleClose}
              />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 scrollbar-hover">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-lighter">
                  <SparklesIcon size={24} className="text-primary" />
                </div>
                <h4 className="text-label-md text-text-strong">
                  How can I help you?
                </h4>
                <p className="mt-1 text-paragraph-sm text-text-sub">
                  Ask me about customer insights, churn risks, or account
                  details.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {[
                    "Show at-risk accounts",
                    "Summarize renewals",
                    "Top customers by ARR",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setMessage(suggestion)}
                      className="rounded-full border border-stroke-soft px-3 py-1.5 text-label-xs text-text-sub transition-colors hover:bg-bg-weak hover:text-text-strong"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-[var(--radius-3)] px-4 py-2.5",
                        msg.role === "user"
                          ? "bg-primary text-white"
                          : "bg-bg-weak text-text-strong"
                      )}
                    >
                      <p className="text-paragraph-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-stroke-soft p-4">
            <div className="flex items-center gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <IconButton
                icon={<SentIcon size={18} />}
                label="Send message"
                variant="primary"
                styleType="filled"
                onClick={handleSend}
                disabled={!message.trim()}
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Button - Fancy Primary (hidden when expanded) */}
      {!isExpanded && (
        <div className="fixed bottom-6 right-6 z-[60]">
          {/* Ripple effect - only show when closed */}
          {!isOpen && (
            <>
              <span className="absolute inset-0 rounded-[var(--radius-2-5)] animate-[ripple_2s_ease-out_infinite] bg-primary/20" />
              <span className="absolute inset-0 rounded-[var(--radius-2-5)] animate-[ripple_2s_ease-out_infinite_0.6s] bg-primary/20" />
            </>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "relative inline-flex items-center justify-center gap-1 rounded-[var(--radius-2-5)] px-2.5 py-2.5 text-label-sm text-white transition-all active:scale-95",
              "border border-white/12",
              "focus-ring",
              !isOpen && "bg-primary",
              isOpen && "bg-text-strong hover:bg-text-sub"
            )}
            style={!isOpen ? { backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, var(--color-primary-base) 0%, var(--color-primary-base) 100%)" } : undefined}
          >
            {isOpen ? (
              <Cancel01Icon size={20} />
            ) : (
              <SparklesIcon size={20} className="fill-white" />
            )}
            <span className="px-1">{isOpen ? "Close" : "Ask Anything"}</span>
          </button>
        </div>
      )}
    </>
  );
}

export { AIChatButton };
