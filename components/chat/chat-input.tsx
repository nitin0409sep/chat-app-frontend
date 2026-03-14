import { cn } from "@/lib/utils";
import { Smile, Paperclip, Send } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

interface ChatInputProps {
  compact?: boolean;
  placeholder?: string;
}

export function ChatInput({
  compact = false,
  placeholder = "Type a message...",
}: ChatInputProps) {
  const btnSize = compact ? 32 : 36;
  const sendSize = compact ? 38 : 44;
  const iconSize = compact ? 18 : 20;

  return (
    <div
      className={cn(
        "flex items-center w-full border-t border-border-default bg-white shrink-0",
        compact ? "gap-2 px-3 py-2.5" : "gap-3 px-6 py-4"
      )}
    >
      <button
        className="shrink-0 flex items-center justify-center rounded-lg text-text-muted hover:text-text-secondary transition-colors"
        style={{ width: btnSize, height: btnSize }}
      >
        <Smile style={{ width: iconSize, height: iconSize }} />
      </button>
      <button
        className="shrink-0 flex items-center justify-center rounded-lg text-text-muted hover:text-text-secondary transition-colors"
        style={{ width: btnSize, height: btnSize }}
      >
        <Paperclip style={{ width: iconSize, height: iconSize }} />
      </button>
      <div
        className={cn(
          "flex-1 flex items-center bg-surface-secondary",
          compact ? "rounded-[20px] h-[38px] px-3.5" : "rounded-[22px] h-11 px-4"
        )}
      >
        <span className="text-sm text-text-muted">{placeholder}</span>
      </div>
      <button
        className={cn(
          "shrink-0 flex items-center justify-center rounded-full bg-brand text-white hover:bg-brand/90 transition-colors"
        )}
        style={{ width: sendSize, height: sendSize }}
      >
        <Send style={{ width: iconSize, height: iconSize }} />
      </button>
    </div>
  );
}
