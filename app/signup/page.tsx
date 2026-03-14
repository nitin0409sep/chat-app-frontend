import { AuthInput } from "@/components/auth/auth-input";
import { AuthLayout } from "@/components/auth/auth-layout";

export default function SignupPage() {
  return (
    <AuthLayout
      title="ChatFlow"
      subtitle="Create your account"
      submitLabel="Sign Up"
      switchText="Already have an account?"
      switchLabel="Log in"
      switchHref="/login"
    >
      <AuthInput
        label="Full Name"
        type="text"
        placeholder="John Doe"
      />
      <AuthInput
        label="Email"
        type="email"
        placeholder="you@example.com"
      />
      <AuthInput
        label="Password"
        type="password"
        placeholder="••••••••"
      />
      <AuthInput
        label="Confirm Password"
        type="password"
        placeholder="••••••••"
      />
    </AuthLayout>
  );
}
