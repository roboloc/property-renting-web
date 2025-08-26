"use client";
import React from "react";
import Link from "next/link";

// ---- Mock Data ----
const bandungHomes = [
  {
    id: "bdg-1",
    title: "Apartment in Kecamatan Coblong",
    price: 1081836,
    nights: 2,
    rating: 4.97,
    badge: "Guest favorite",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "bdg-2",
    title: "Home in Sukajadi",
    price: 5877062,
    nights: 2,
    rating: 4.97,
    badge: "Guest favorite",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "bdg-3",
    title: "Apartment in Lengkong",
    price: 1280000,
    nights: 2,
    rating: 5.0,
    badge: "Guest favorite",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "bdg-4",
    title: "Home in Lembang",
    price: 4454014,
    nights: 2,
    rating: 4.97,
    badge: "Guest favorite",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop",
  },
];

const tangerangHomes = [
  {
    id: "tng-1",
    title: "Studio near BSD",
    price: 812854,
    nights: 2,
    rating: 4.93,
    badge: "Guest favorite",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "tng-2",
    title: "Minimalist Condo in Gading Serpong",
    price: 1164001,
    nights: 2,
    rating: 4.98,
    badge: "Guest favorite",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "tng-3",
    title: "Warm Apartment near AEON",
    price: 980000,
    nights: 2,
    rating: 4.92,
    badge: "Guest favorite",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "tng-4",
    title: "Family Home at Paramount",
    price: 1680000,
    nights: 2,
    rating: 4.95,
    badge: "Guest favorite",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1400&auto=format&fit=crop",
  },
];

// ---- UI Components ----
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
    <div
      className="text-[10px] uppercase tracking-wide
                 text-neutral-600 dark:text-neutral-400
                 transition-colors
                 group-hover:!text-neutral-600"
    >
      {label}
    </div>

    <div
      className="text-sm font-medium truncate
                 text-neutral-800 dark:text-neutral-100
                 transition-colors
                 group-hover:!text-neutral-900 dark:group-hover:!text-neutral-900"
    >
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
        className="shrink-0 size-10 rounded-full
                   bg-rose-500 text-white hover:bg-rose-600
                   transition-colors"
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

const ListingCard: React.FC<{
  image: string;
  title: string;
  price: number;
  nights: number;
  rating: number;
  badge?: string;
}> = ({ image, title, price, nights, rating, badge }) => (
  <div className="w-[280px] snap-start">
    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />

      {badge && (
        <span
          className="absolute left-2 top-2 rounded-full bg-white/95 text-[11px] font-medium px-2 py-1
                     text-neutral-900 shadow ring-1 ring-black/10"
        >
          {badge}
        </span>
      )}

      <button
        aria-label="Save to wishlist"
        className="absolute right-3 top-3 grid place-items-center size-9 rounded-full
                   bg-white/95 text-neutral-700 shadow ring-1 ring-black/10
                   hover:text-rose-600 hover:bg-white transition"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 21s-7.5-4.35-9.5-8.5C1 9 3.5 6 6.75 6a5 5 0 015.25 3.5A5 5 0 0117.25 6C20.5 6 23 9 21.5 12.5 19.5 16.65 12 21 12 21z" />
        </svg>
      </button>
    </div>

    <div className="mt-2 text-sm">
      <div className="flex items-center justify-between">
        <p className="font-medium truncate pr-2">{title}</p>
        <span className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M12 .587l3.668 7.43 8.2 1.192-5.934 5.786 1.4 8.172L12 18.897l-7.334 3.87 1.4-8.172L.132 9.21l8.2-1.192z" />
          </svg>
          {rating.toFixed(2)}
        </span>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400">
        Rp{price.toLocaleString("id-ID")} for {nights} nights
      </p>
    </div>
  </div>
);

const SectionRow: React.FC<{ title: string; items: typeof bandungHomes }> = ({
  title,
  items,
}) => (
  <section className="mt-8">
    <div className="flex items-baseline justify-between mb-3">
      <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
      <Link href="#" className="text-sm text-rose-600 hover:underline">
        See more
      </Link>
    </div>
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
      {items.map((it) => (
        <ListingCard key={it.id} {...it} />
      ))}
    </div>
  </section>
);

// ---- Page ----
export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Top bar */}

      {/* Hero */}
      <section className="relative">
        <div className="bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,63,94,0.25),transparent_50%),radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_50%)]">
          <div className="mx-auto max-w-6xl w-full px-4 py-6 md:py-8">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Sections */}
      <main className="mx-auto max-w-6xl w-full px-4 pb-20">
        <SectionRow title="Popular homes in Bandung" items={bandungHomes} />
        <SectionRow
          title="Available in Kabupaten Tangerang this weekend"
          items={tangerangHomes}
        />
      </main>
    </div>
  );
}
