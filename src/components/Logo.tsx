import Link from "next/link";
import React from "react";

type Props = {
  withText?: boolean; // tampilkan tulisan "Property Renting"
  href?: string; // kemana logo diklik
  size?: number; // ukuran bubble (px)
  className?: string;
};

export default function Logo({
  withText = true,
  href = "/",
  size = 32,
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      aria-label="Property Renting"
      className={`flex items-center gap-2 group ${className}`}
    >
      {/* Logomark */}
      <span
        className="grid place-items-center rounded-xl bg-gradient-to-br
                   from-rose-500 to-sky-500 text-white shadow-sm
                   ring-1 ring-black/10 transition-transform group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* House + keyhole */}
        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" aria-hidden>
          <path
            d="M12 3l8 6v9a2 2 0 0 1-2 2h-4v-6H10v6H6a2 2 0 0 1-2-2V9l8-6z"
            fill="currentColor"
          />
          {/* keyhole */}
          <path
            d="M12 12.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5z"
            fill="#fff"
          />
          <rect
            x="11.4"
            y="12.6"
            width="1.2"
            height="2.2"
            rx="0.6"
            fill="#fff"
          />
        </svg>
      </span>

      {/* Wordmark */}
      {withText && (
        <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Property{" "}
          <span className="text-neutral-900 dark:text-neutral-100 opacity-80">
            Renting
          </span>
        </span>
      )}
    </Link>
  );
}
