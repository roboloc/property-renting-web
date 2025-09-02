// src/features/home/components/SectionRow.tsx
"use client";
import Link from "next/link";
import ListingCard from "./ListingCard";

export type CardItem = {
  id: string | number;
  title: string;
  price: number;
  nights: number;
  rating: number;
  badge?: string;
  image: string;
};

const SectionRow: React.FC<{
  title: string;
  items: Array<{
    id: string | number;
    title: string;
    price: number;
    nights: number;
    rating: number;
    badge?: string;
    image: string;
  }>;
}> = ({ title, items }) => (
  <section className="mt-8">
    <div className="flex items-baseline justify-between mb-3">
      <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
      <Link href="#" className="text-sm text-rose-600 hover:underline">
        See more
      </Link>
    </div>

    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
      {items.map(({ id, ...rest }) => (
        <ListingCard key={id} {...rest} />
      ))}
    </div>
  </section>
);

export default SectionRow;
