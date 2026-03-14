import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { SocialButtons } from "./social-buttons";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  submitLabel: string;
  switchText: string;
  switchLabel: string;
  switchHref: string;
  children: React.ReactNode;
}

export function AuthLayout({
  title,
  subtitle,
  submitLabel,
  switchText,
  switchLabel,
  switchHref,
  children,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-white p-6">
      <div className="w-full max-w-[380px] rounded-2xl border-[1.5px] border-border-default bg-white p-8 flex flex-col gap-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center size-12 rounded-xl bg-brand">
            <MessageCircle className="size-6 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-text-primary tracking-tight">
            {title}
          </h1>
          <p className="text-sm text-text-secondary">{subtitle}</p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4">{children}</div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center w-full h-11 rounded-lg bg-brand text-white text-sm font-semibold hover:bg-brand/90 transition-colors"
        >
          {submitLabel}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border-default" />
          <span className="text-xs font-medium text-text-muted whitespace-nowrap">
            or continue with
          </span>
          <div className="flex-1 h-px bg-border-default" />
        </div>

        {/* Social Buttons */}
        <SocialButtons />

        {/* Switch Link */}
        <p className="text-center text-[13px] text-text-secondary">
          {switchText}{" "}
          <Link
            href={switchHref}
            className="font-semibold text-brand hover:underline"
          >
            {switchLabel}
          </Link>
        </p>
      </div>
    </div>
  );
}
