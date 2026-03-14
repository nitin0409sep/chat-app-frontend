import { cn } from "@/lib/utils";

interface TypingIndicatorProps {
  name: string;
  avatarColor?: string;
  compact?: boolean;
}

export function TypingIndicator({
  name,
  avatarColor = "bg-avatar-purple",
  compact = false,
}: TypingIndicatorProps) {
  const avatarSize = compact ? 24 : 28;
  const dotSize = compact ? "size-1.5" : "size-2";

  return (
    <div className="flex items-center gap-2 w-full">
      <div
        className={cn("shrink-0 rounded-full", avatarColor)}
        style={{ width: avatarSize, height: avatarSize }}
      />
      <div
        className={cn(
          "flex items-center gap-1.5 bg-white border border-border-default",
          compact
            ? "rounded-[14px] rounded-bl-sm px-3 py-2"
            : "rounded-2xl rounded-bl-sm px-4 py-2.5"
        )}
      >
        <span className={cn("rounded-full bg-text-muted", dotSize, "animate-bounce [animation-delay:0ms]")} />
        <span className={cn("rounded-full bg-border-default", dotSize, "animate-bounce [animation-delay:150ms]")} />
        <span className={cn("rounded-full bg-border-default", dotSize, "animate-bounce [animation-delay:300ms]")} />
      </div>
      <span
        className={cn(
          "text-text-muted italic",
          compact ? "text-[10px]" : "text-xs"
        )}
      >
        {name} is typing...
      </span>
    </div>
  );
}
