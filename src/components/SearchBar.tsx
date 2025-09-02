"use client";
import Link from "next/link";
import React from "react";

const SearchPill: React.FC<{
  label: string;
  value?: string;
  href?: string;
}> = ({ label, value, href = "#" }) => (
  <Link
    href={href}
    className="group flex-1 basis-[180px] rounded-full
               bg-white/80 dark:bg-neutral-900
               border border-neutral-200 dark:border-neutral-800
               px-4 py-3 shadow-sm transition-colors
               hover:bg-white focus:outline-none
               focus:ring-2 focus:ring-rose-500/40"
  >
    <div className="text-[10px] uppercase tracking-wide text-neutral-600 dark:text-neutral-400 transition-colors group-hover:!text-neutral-600">
      {label}
    </div>
    <div className="text-sm font-medium truncate text-neutral-800 dark:text-neutral-100 transition-colors group-hover:!text-neutral-900 dark:group-hover:!text-neutral-900">
      {value || `Add ${label.toLowerCase()}`}
    </div>
  </Link>
);

const SearchBar: React.FC = () => (
  <div className="w-full max-w-5xl mx-auto mt-0">
    <div
      className="flex flex-wrap md:flex-nowrap items-center gap-2 p-2
                    rounded-full bg-white/80 dark:bg-neutral-900
                    border border-neutral-200 dark:border-neutral-800
                    shadow-lg backdrop-blur"
    >
      <SearchPill label="Where" value="Search destinations" />
      <div className="hidden md:block w-px h-8 bg-neutral-200/70 dark:bg-neutral-800/70" />
      <SearchPill label="Check in" />
      <div className="hidden md:block w-px h-8 bg-neutral-200/70 dark:bg-neutral-800/70" />
      <SearchPill label="Check out" />
      <div className="hidden md:block w-px h-8 bg-neutral-200/70 dark:bg-neutral-800/70" />
      <SearchPill label="Who" value="Add guests" />

      <button
        aria-label="Search"
        className="shrink-0 size-10 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 mx-auto"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      </button>
    </div>
  </div>
);

export default SearchBar;
