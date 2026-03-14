import Link from "next/link";
import { AuthInput } from "@/components/auth/auth-input";
import { AuthLayout } from "@/components/auth/auth-layout";

export default function LoginPage() {
  return (
    <AuthLayout
      title="ChatFlow"
      subtitle="Welcome back"
      submitLabel="Log In"
      switchText="Don't have an account?"
      switchLabel="Sign up"
      switchHref="/signup"
    >
      <AuthInput
        label="Email"
        type="email"
        placeholder="you@example.com"
      />
      <AuthInput
        label="Password"
        type="password"
        placeholder="••••••••"
        labelRight={
          <Link
            href="#"
            className="text-[13px] font-medium text-brand hover:underline"
          >
            Forgot password?
          </Link>
        }
      />
    </AuthLayout>
  );
}
