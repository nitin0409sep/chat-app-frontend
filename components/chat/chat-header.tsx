import { cn } from "@/lib/utils";
import { Phone, Video, EllipsisVertical, ChevronLeft } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

interface ChatHeaderProps {
  name: string;
  online?: boolean;
  avatarColor?: string;
  compact?: boolean;
  showBackButton?: boolean;
  onBack?: () => void;
}

export function ChatHeader({
  name,
  online = true,
  avatarColor = "bg-avatar-purple",
  compact = false,
  showBackButton = false,
  onBack,
}: ChatHeaderProps) {
  const avatarSize = compact ? 34 : showBackButton ? 34 : 40;
  const iconSize = compact || showBackButton ? 16 : 18;

  return (
    <div
      className={cn(
        "flex items-center justify-between w-full border-b border-border-default bg-white shrink-0",
        compact ? "px-5 py-3.5" : showBackButton ? "px-4 py-3" : "px-6 py-4"
      )}
    >
      {/* Left: Avatar + Info */}
      <div className="flex items-center gap-3">
        {showBackButton && (
          <button onClick={onBack} className="text-brand -ml-1">
            <ChevronLeft className="size-6" />
          </button>
        )}
        <div
          className={cn("shrink-0 rounded-full", avatarColor)}
          style={{ width: avatarSize, height: avatarSize }}
        />
        <div className="flex flex-col gap-0.5">
          <span
            className={cn(
              "font-semibold text-text-primary",
              compact || showBackButton ? "text-[15px]" : "text-base"
            )}
          >
            {name}
          </span>
          {online && (
            <div className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-online" />
              <span
                className={cn(
                  "text-text-secondary",
                  compact || showBackButton ? "text-[11px]" : "text-xs"
                )}
              >
                Online
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Right: Action Buttons */}
      <div className={cn("flex items-center", compact ? "gap-1.5" : "gap-2")}>
        <IconButton size={compact || showBackButton ? "sm" : "md"}>
          <Phone style={{ width: iconSize, height: iconSize }} />
        </IconButton>
        <IconButton size={compact || showBackButton ? "sm" : "md"}>
          <Video style={{ width: iconSize, height: iconSize }} />
        </IconButton>
        {!showBackButton && (
          <IconButton size={compact || showBackButton ? "sm" : "md"}>
            <EllipsisVertical style={{ width: iconSize, height: iconSize }} />
          </IconButton>
        )}
      </div>
    </div>
  );
}
