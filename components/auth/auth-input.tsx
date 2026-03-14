import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelRight?: React.ReactNode;
  error?: string;
}

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, labelRight, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <div className="flex items-center justify-between">
          <label className="text-[13px] font-medium text-text-primary">
            {label}
          </label>
          {labelRight}
        </div>
        <input
          ref={ref}
          className={cn(
            "h-11 w-full rounded-lg border-[1.5px] bg-surface-secondary px-3.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
              : "border-border-default focus:border-brand focus:ring-1 focus:ring-brand/30",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";
