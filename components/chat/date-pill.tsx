import { cn } from "@/lib/utils";

interface DatePillProps {
  date: string;
  compact?: boolean;
}

export function DatePill({ date, compact = false }: DatePillProps) {
  return (
    <div className="flex justify-center w-full">
      <span
        className={cn(
          "bg-border-default text-text-secondary font-medium rounded-full",
          compact ? "text-[10px] px-2.5 py-0.5" : "text-xs px-3 py-1"
        )}
      >
        {date}
      </span>
    </div>
  );
}
