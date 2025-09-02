"use client";
import React from "react";
import type { HomeItem } from "../data";

type Props = Omit<HomeItem, "id">;

const ListingCard: React.FC<Props> = ({
  image,
  title,
  price,
  nights,
  rating,
  badge,
}) => (
  <div className="w-[280px] snap-start">
    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      {badge && (
        <span className="absolute left-2 top-2 rounded-full bg-white/95 text-[11px] font-medium px-2 py-1 text-neutral-900 shadow ring-1 ring-black/10">
          {badge}
        </span>
      )}
      <button
        aria-label="Save to wishlist"
        className="absolute right-3 top-3 grid place-items-center size-9 rounded-full bg-white/95 text-neutral-700 shadow ring-1 ring-black/10 hover:text-rose-600 hover:bg-white transition"
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

export default ListingCard;
