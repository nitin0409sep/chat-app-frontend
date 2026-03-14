"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthInput } from "@/components/auth/auth-input";
import { AuthLayout } from "@/components/auth/auth-layout";
import {
  loginSchema,
  type LoginFormData,
} from "@/lib/validations/auth";
import {
  useLoginMutation,
  useSocialLoginMutation,
} from "@/hooks/use-auth-mutations";
import { getFirebaseErrorMessage } from "@/lib/firebase-errors";

export default function LoginPage() {
  const {
    
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useLoginMutation();
  const socialMutation = useSocialLoginMutation();

  const mutationError = loginMutation.error ?? socialMutation.error;
  const errorMessage = mutationError
    ? getFirebaseErrorMessage(mutationError)
    : null;

  return (
    <AuthLayout
      title="ChatFlow"
      subtitle="Welcome back"
      submitLabel="Log In"
      switchText="Don't have an account?"
      switchLabel="Sign up"
      switchHref="/signup"
      onSubmit={handleSubmit((data) => loginMutation.mutate(data))}
      isLoading={loginMutation.isPending}
      socialLoading={socialMutation.isPending}
      error={errorMessage}
      onSocialLogin={(provider) => socialMutation.mutate(provider)}
    >
      <AuthInput
        label="Email"
        type="email"
        placeholder="you@example.com"
        error={errors.email?.message}
        {...register("email")}
      />
      <AuthInput
        label="Password"
        type="password"
        placeholder="••••••••"
        error={errors.password?.message}
        labelRight={
          <Link
            href="#"
            className="text-[13px] font-medium text-brand hover:underline"
          >
            Forgot password?
          </Link>
        }
        {...register("password")}
      />
    </AuthLayout>
  );
}
