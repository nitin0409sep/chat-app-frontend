"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  loginWithEmail,
  signupWithEmail,
  loginWithGoogle,
  loginWithGithub,
} from "@/lib/auth";
import type { LoginFormData, SignupFormData } from "@/lib/validations/auth";

export function useLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginFormData) =>
      loginWithEmail(data.email, data.password),
    onSuccess: () => router.replace("/chat"),
  });
}

export function useSignupMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: SignupFormData) =>
      signupWithEmail(data.email, data.password),
    onSuccess: () => router.replace("/chat"),
  });
}

export function useSocialLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: (provider: "google" | "github") => {
      if (provider === "google") return loginWithGoogle();
      return loginWithGithub();
    },
    onSuccess: () => router.replace("/chat"),
  });
}
