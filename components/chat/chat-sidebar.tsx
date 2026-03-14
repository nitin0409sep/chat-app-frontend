"use client";
import { cn } from "@/lib/utils";
import { Search, SquarePen, LogOut } from "lucide-react";
import { ChatItem } from "./chat-item";
import { contacts, currentUser } from "@/lib/data";
import { signOut } from "@/lib/auth";

interface ChatSidebarProps {
  compact?: boolean;
  className?: string;
}

export function ChatSidebar({ compact = false, className }: ChatSidebarProps) {
  const avatarSize = compact ? 36 : 40;

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-white border-r border-border-default shrink-0",
        compact ? "w-[300px]" : "w-[360px]",
        className,
      )}
    >
      {/* Header */}
      <div
        className={cn(
          "flex items-center justify-between w-full shrink-0",
          compact ? "px-4 pt-4 pb-3" : "px-5 pt-5 pb-4",
        )}
      >
        <div className="flex items-center gap-3">
          <div
            className="shrink-0 rounded-full bg-brand"
            style={{ width: avatarSize, height: avatarSize }}
          />
          <div className="flex flex-col gap-0.5">
            <span
              className={cn("font-semibold text-text-primary", compact ? "text-sm" : "text-base")}
            >
              {currentUser.name}
            </span>
            <span className={cn("font-medium text-online", compact ? "text-[11px]" : "text-xs")}>
              {currentUser.status}
            </span>
          </div>
        </div>
        <button
          className={cn(
            "flex items-center justify-center rounded-lg bg-brand text-white hover:bg-brand/90 transition-colors",
            compact ? "size-8" : "size-9",
          )}
        >
          <SquarePen className={cn(compact ? "size-4" : "size-[18px]")} />
        </button>
      </div>

      {/* Search */}
      <div className={cn("w-full shrink-0", compact ? "px-4" : "px-5")}>
        <div
          className={cn(
            "flex items-center gap-2 bg-surface-secondary rounded-[10px] w-full",
            compact ? "h-9 px-2.5 gap-1.5" : "h-10 px-3",
          )}
        >
          <Search className={cn("text-text-muted shrink-0", compact ? "size-3.5" : "size-4")} />
          <span className={cn("text-text-muted", compact ? "text-[13px]" : "text-sm")}>
            {compact ? "Search..." : "Search conversations..."}
          </span>
        </div>
      </div>

      {/* Chat List */}
      <div className={cn("flex-1 flex flex-col overflow-y-auto", compact ? "pt-2.5" : "pt-3")}>
        {contacts.map((contact) => (
          <ChatItem key={contact.id} contact={contact} compact={compact} />
        ))}
      </div>

      {/* Logout */}
      <div
        className={cn(
          "shrink-0 border-t border-border-default",
          compact ? "px-4 py-3" : "px-5 py-4",
        )}
      >
        <button
          type="button"
          onClick={signOut}
          className={cn(
            "flex items-center gap-2 w-full rounded-lg text-text-secondary hover:bg-surface-secondary hover:text-red-500 transition-colors",
            compact ? "px-3 py-2 text-[13px]" : "px-3.5 py-2.5 text-sm",
          )}
        >
          <LogOut className={cn(compact ? "size-4" : "size-4.5")} />
          Log out
        </button>
      </div>
    </div>
  );
}
