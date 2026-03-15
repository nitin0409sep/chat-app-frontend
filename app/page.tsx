"use client";

import { MessageCircle, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";
import { AuthGuard } from "@/components/auth/auth-guard";

const features = [
  {
    icon: Zap,
    title: "Real-time Messaging",
    description: "Instant message delivery with live typing indicators.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "End-to-end authentication powered by Firebase.",
  },
  {
    icon: Users,
    title: "Team Conversations",
    description: "Create group chats and collaborate seamlessly.",
  },
];

export default function LandingPage() {
  return (
    <AuthGuard mode="guest">
      <div className="flex min-h-dvh flex-col bg-white">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-border-default">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center size-9 rounded-lg bg-brand">
              <MessageCircle className="size-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-text-primary tracking-tight">ChatFlow</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-text-primary hover:text-brand transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-lg bg-brand text-white text-sm font-semibold hover:bg-brand/90 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </header>

        {/* Hero */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
          <div className="flex flex-col items-center gap-6 max-w-xl text-center">
            <div className="flex items-center justify-center size-16 rounded-2xl bg-brand">
              <MessageCircle className="size-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight">
              Chat, Connect, <span className="text-brand">Collaborate</span>
            </h1>
            <p className="text-base text-text-secondary max-w-md">
              A modern real-time chat app built for teams and friends. Fast, secure, and simple.
            </p>
            <div className="flex gap-3 mt-2">
              <Link
                href="/signup"
                className="px-6 py-3 rounded-lg bg-brand text-white text-sm font-semibold hover:bg-brand/90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="px-6 py-3 rounded-lg border border-border-default text-sm font-semibold text-text-primary hover:bg-surface-secondary transition-colors"
              >
                Log In
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-3xl w-full">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-3 rounded-xl border border-border-default p-6 text-center"
              >
                <div className="flex items-center justify-center size-10 rounded-lg bg-brand/10">
                  <feature.icon className="size-5 text-brand" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary">{feature.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-4 border-t border-border-default text-center text-xs text-text-muted">
          ChatFlow &mdash; Built with Next.js &amp; Firebase
        </footer>
      </div>
    </AuthGuard>
  );
}
