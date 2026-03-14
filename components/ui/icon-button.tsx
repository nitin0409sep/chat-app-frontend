import { cn } from "@/lib/utils";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "primary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function IconButton({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg transition-colors shrink-0",
        variant === "default" && "bg-surface-secondary text-text-secondary hover:bg-border-default",
        variant === "ghost" && "text-text-muted hover:bg-surface-secondary",
        variant === "primary" && "bg-brand text-brand-foreground hover:bg-brand/90",
        size === "sm" && "size-8",
        size === "md" && "size-9",
        size === "lg" && "size-10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
