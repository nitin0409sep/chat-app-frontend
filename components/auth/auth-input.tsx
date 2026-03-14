import { cn } from "@/lib/utils";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelRight?: React.ReactNode;
}

export function AuthInput({
  label,
  labelRight,
  className,
  ...props
}: AuthInputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex items-center justify-between">
        <label className="text-[13px] font-medium text-text-primary">
          {label}
        </label>
        {labelRight}
      </div>
      <input
        className={cn(
          "h-11 w-full rounded-lg border-[1.5px] border-border-default bg-surface-secondary px-3.5 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-colors",
          className
        )}
        {...props}
      />
    </div>
  );
}
