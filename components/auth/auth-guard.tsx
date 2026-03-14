"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-provider";

interface AuthGuardProps {
  children: React.ReactNode;
  mode: "protected" | "guest"; /** "protected" = must be logged in, "guest" = must NOT be logged in */
} 

export function AuthGuard({ children, mode }: AuthGuardProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (mode === "protected" && !user) {
      router.replace("/login");
    }

    if (mode === "guest" && user) {
      router.replace("/chat");
    }
  }, [user, loading, mode, router]);

  if (loading) {
    return (
      <div className="flex h-dvh items-center justify-center">
        <div className="size-8 animate-spin rounded-full border-2 border-border-default border-t-brand" />
      </div>
    );
  }

  if (mode === "protected" && !user) return null;
  if (mode === "guest" && user) return null;

  return <>{children}</>;
}
