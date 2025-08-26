"use client";

import React, { useState } from "react";

const FormLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setIsLoading(true);
      // TODO: ganti dengan call ke API login kamu
      await new Promise((r) => setTimeout(r, 600));
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur p-6 sm:p-8">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-blue-500 text-white font-semibold">
              PR
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-neutral-500">
              Sign in to continue to Property Renting
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-lg border border-red-200/60 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-neutral-300/80 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-500/70 focus:border-rose-500 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                >
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-xs text-rose-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-neutral-300/80 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900 px-3 py-2.5 pr-10 text-sm outline-none focus:ring-2 focus:ring-rose-500/70 focus:border-rose-500 transition"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                  {showPassword ? (
                    // eye-off
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M3 3l18 18" />
                      <path d="M10.58 10.58a3 3 0 104.24 4.24" />
                      <path d="M9.88 4.24A9.77 9.77 0 0121 12c-.5.86-1.16 1.69-1.96 2.45M6.53 6.53A9.77 9.77 0 003 12c.5.86 1.16 1.69 1.96 2.45" />
                    </svg>
                  ) : (
                    // eye
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="size-4 rounded border-neutral-300 text-rose-600 focus:ring-rose-500"
                />
                Remember me
              </label>
              <a
                href="/register"
                className="text-xs text-neutral-500 hover:underline"
              >
                Create account
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-rose-600 text-white text-sm font-medium py-2.5 hover:bg-rose-700 active:bg-rose-800 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {isLoading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-neutral-200 dark:border-neutral-800" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-neutral-900 px-2 text-xs text-neutral-500">
                or continue with
              </span>
            </div>
          </div>

          <div className="mt-3">
            <button
              type="button"
              className="w-full rounded-xl border border-neutral-300/80 dark:border-neutral-700 
               bg-white/70 dark:bg-neutral-950/30 px-4 py-2.5 text-sm 
               hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
              onClick={() => alert("TODO: Google OAuth")}
            >
              Continue with Google
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-neutral-500">
          By signing in, you agree to our{" "}
          <a className="underline hover:no-underline" href="/terms">
            Terms
          </a>{" "}
          &{" "}
          <a className="underline hover:no-underline" href="/privacy">
            Privacy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default FormLogin;
