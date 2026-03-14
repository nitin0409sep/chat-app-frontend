import { MessageCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { SocialButtons } from "./social-buttons";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  submitLabel: string;
  switchText: string;
  switchLabel: string;
  switchHref: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
  error?: string | null;
  children: React.ReactNode;
  socialLoading?: boolean;
  onSocialLogin?: (provider: "google" | "github") => void;
}

export function AuthLayout({
  title,
  subtitle,
  submitLabel,
  switchText,
  switchLabel,
  switchHref,
  onSubmit,
  isLoading = false,
  error,
  children,
  socialLoading = false,
  onSocialLogin,
}: AuthLayoutProps) {
  const isDisabled = isLoading || socialLoading;

  return (
    <div className="flex min-h-dvh items-center justify-center bg-white p-6">
      <form
        onSubmit={onSubmit}
        noValidate
        className="w-full max-w-[380px] rounded-2xl border-[1.5px] border-border-default bg-white p-8 flex flex-col gap-6"
      >
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

        {/* Server/Auth Error */}
        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2.5 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Form Fields */}
        <div className="flex flex-col gap-4">{children}</div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isDisabled}
          className="flex items-center justify-center gap-2 w-full h-11 rounded-lg bg-brand text-white text-sm font-semibold hover:bg-brand/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading && <Loader2 className="size-4 animate-spin" />}
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
        <SocialButtons
          disabled={isDisabled}
          onLogin={onSocialLogin}
        />

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
      </form>
    </div>
  );
}
