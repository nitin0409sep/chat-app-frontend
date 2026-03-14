"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthInput } from "@/components/auth/auth-input";
import { AuthLayout } from "@/components/auth/auth-layout";
import {
  signupSchema,
  type SignupFormData,
} from "@/lib/validations/auth";
import {
  useSignupMutation,
  useSocialLoginMutation,
} from "@/hooks/use-auth-mutations";
import { getFirebaseErrorMessage } from "@/lib/firebase-errors";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const signupMutation = useSignupMutation();
  const socialMutation = useSocialLoginMutation();

  const mutationError = signupMutation.error ?? socialMutation.error;
  const errorMessage = mutationError
    ? getFirebaseErrorMessage(mutationError)
    : null;

  return (
    <AuthLayout
      title="ChatFlow"
      subtitle="Create your account"
      submitLabel="Sign Up"
      switchText="Already have an account?"
      switchLabel="Log in"
      switchHref="/login"
      onSubmit={handleSubmit((data) => signupMutation.mutate(data))}
      isLoading={signupMutation.isPending}
      socialLoading={socialMutation.isPending}
      error={errorMessage}
      onSocialLogin={(provider) => socialMutation.mutate(provider)}
    >
      <AuthInput
        label="Full Name"
        type="text"
        placeholder="John Doe"
        error={errors.fullName?.message}
        {...register("fullName")}
      />
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
        {...register("password")}
      />
      <AuthInput
        label="Confirm Password"
        type="password"
        placeholder="••••••••"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />
    </AuthLayout>
  );
}
