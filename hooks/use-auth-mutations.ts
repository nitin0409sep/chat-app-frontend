"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  loginWithEmail,
  signupWithEmail,
  loginWithGoogle,
  loginWithGithub,
} from "@/lib/auth";
import { getFirebaseErrorMessage } from "@/lib/firebase-errors";
import type { LoginFormData, SignupFormData } from "@/lib/validations/auth";

export function useLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginFormData) => loginWithEmail(data.email, data.password),
    onSuccess: () => {
      toast.success("Logged in successfully");
      router.replace("/chat");
    },
    onError: (error) => {
      toast.error(getFirebaseErrorMessage(error));
    },
  });
}

export function useSignupMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: SignupFormData) => signupWithEmail(data.email, data.password),
    onSuccess: () => {
      toast.success("Account created successfully");
      router.replace("/chat");
    },
    onError: (error) => {
      toast.error(getFirebaseErrorMessage(error));
    },
  });
}

export function useSocialLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: (provider: "google" | "github") => {
      if (provider === "google") return loginWithGoogle();
      return loginWithGithub();
    },
    onSuccess: () => {
      toast.success("Logged in successfully");
      router.replace("/chat");
    },
    onError: (error) => {
      toast.error(getFirebaseErrorMessage(error));
    },
  });
}
