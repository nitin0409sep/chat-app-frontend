import { cn } from "@/lib/utils";
import type { Message } from "@/lib/data";

interface ChatBubbleProps {
  message: Message;
  showAvatar?: boolean;
  avatarColor?: string;
  compact?: boolean;
}

export function ChatBubble({
  message,
  showAvatar = false,
  avatarColor = "bg-avatar-purple",
  compact = false,
}: ChatBubbleProps) {
  const isSent = message.sender === "me";
  const avatarSize = compact ? 24 : 28;

  return (
    <div
      className={cn(
        "flex w-full",
        isSent ? "justify-end" : "items-end gap-2"
      )}
    >
      {/* Avatar for received messages */}
      {!isSent && showAvatar && (
        <div
          className={cn("shrink-0 rounded-full", avatarColor)}
          style={{ width: avatarSize, height: avatarSize }}
        />
      )}

      {/* Bubble + Time */}
      <div
        className={cn(
          "flex flex-col gap-1",
          isSent ? "items-end" : "items-start"
        )}
      >
        <div
          className={cn(
            "px-3.5 py-2.5",
            compact ? "px-3 py-2 max-w-[260px]" : "max-w-[340px]",
            isSent
              ? "bg-brand text-white rounded-2xl rounded-br-sm"
              : "bg-white text-text-primary border border-border-default rounded-2xl rounded-bl-sm"
          )}
        >
          <p
            className={cn(
              "text-sm leading-relaxed",
              compact && "text-[13px]"
            )}
          >
            {message.content}
          </p>
        </div>
        <span
          className={cn(
            "text-text-muted",
            compact ? "text-[10px]" : "text-[11px]"
          )}
        >
          {message.time}
        </span>
      </div>
    </div>
  );
}
