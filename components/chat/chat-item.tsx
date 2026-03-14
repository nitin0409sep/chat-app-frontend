import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Users } from "lucide-react";
import type { ChatContact } from "@/lib/data";

interface ChatItemProps {
  contact: ChatContact;
  compact?: boolean;
}

export function ChatItem({ contact, compact = false }: ChatItemProps) {
  const avatarSize = compact ? 42 : 48;

  return (
    <div
      className={cn(
        "flex items-center gap-3 cursor-pointer transition-colors w-full",
        compact ? "gap-2.5 px-4 py-2.5" : "px-5 py-3",
        contact.active ? "bg-chat-active" : "hover:bg-surface-secondary"
      )}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <div
          className={cn(
            "flex items-center justify-center rounded-full text-white font-semibold",
            contact.avatarColor
          )}
          style={{ width: avatarSize, height: avatarSize }}
        >
          {contact.isGroup ? (
            <Users className={cn(compact ? "size-5" : "size-[22px]")} />
          ) : (
            <span className={cn(compact ? "text-sm" : "text-base")}>
              {contact.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          )}
        </div>
        {contact.online && (
          <span
            className={cn(
              "absolute bottom-0 right-0 rounded-full bg-online border-2 border-white",
              compact ? "size-[11px]" : "size-3"
            )}
          />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "font-semibold text-text-primary truncate",
              compact ? "text-sm" : "text-[15px]"
            )}
          >
            {contact.name}
          </span>
          <div className="flex items-center gap-2 shrink-0">
            <span
              className={cn(
                "text-text-muted",
                compact ? "text-[11px]" : "text-xs"
              )}
            >
              {contact.time}
            </span>
            {contact.unreadCount && (
              <span className="flex items-center justify-center size-5 rounded-full bg-brand text-white text-[11px] font-semibold">
                {contact.unreadCount}
              </span>
            )}
          </div>
        </div>
        <span
          className={cn(
            "truncate",
            compact ? "text-xs" : "text-[13px]",
            contact.unreadCount
              ? "text-text-primary font-medium"
              : "text-text-secondary"
          )}
        >
          {contact.lastMessage}
        </span>
      </div>
    </div>
  );
}
