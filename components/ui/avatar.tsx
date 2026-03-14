import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  online?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const sizeClasses = {
  sm: "size-6",
  md: "size-10",
  lg: "size-12",
} as const;

const onlineDotSize = {
  sm: "size-2",
  md: "size-3",
  lg: "size-3.5",
} as const;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function Avatar({
  name,
  color = "bg-brand",
  size = "md",
  online,
  icon,
  className,
}: AvatarProps) {
  return (
    <div className={cn("relative shrink-0", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-full text-white font-semibold",
          sizeClasses[size],
          color,
          size === "sm" && "text-[10px]",
          size === "md" && "text-sm",
          size === "lg" && "text-base"
        )}
      >
        {icon || getInitials(name)}
      </div>
      {online && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full bg-online border-2 border-white",
            onlineDotSize[size]
          )}
        />
      )}
    </div>
  );
}
