"use client";

import React from "react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

const FALLBACKS: Record<string, string[]> = {
  s1: [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
  ],
  s2: [
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
  ],
  s3: [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
  ],
};

const DEFAULT_FALLBACK =
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop";

// ====== data slide promonya (silakan ubah sesuka hati) ======
const slides = [
  {
    id: "s1",
    title: "Bandung Weekend Deals",
    subtitle: "Hemat hingga 20% untuk stay Jumat–Minggu",
    ctaHref: "/deals?city=bandung",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1600&auto=format&fit=crop",
    badge: "Promo",
  },
  {
    id: "s2",
    title: "New in Tangerang",
    subtitle: "Unit baru dekat BSD & AEON, banyak pilihan ✨",
    ctaHref: "/search?city=tangerang",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
    badge: "Baru",
  },
  {
    id: "s3",
    title: "Long-Stay Savings",
    subtitle: "Nginep 7+ malam diskon tambahan 15%",
    ctaHref: "/deals?type=long-stay",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    badge: "Hemat",
  },
];

export default function Hero() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [index, setIndex] = React.useState(0);
  const count = slides.length;

  const goto = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = (i + count) % count;
    const child = el.children[clamped] as HTMLElement;
    if (child) el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    setIndex(clamped);
  };

  const next = () => goto(index + 1);
  const prev = () => goto(index - 1);

  // autoplay 5s, pause saat hover
  React.useEffect(() => {
    const el = trackRef.current;
    let paused = false;
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);

    el?.addEventListener("mouseenter", onEnter);
    el?.addEventListener("mouseleave", onLeave);

    const id = setInterval(() => {
      if (!paused) next();
    }, 5000);

    return () => {
      clearInterval(id);
      el?.removeEventListener("mouseenter", onEnter);
      el?.removeEventListener("mouseleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const onScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    const el = e.currentTarget;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    setIndex(i);
  };

  return (
    <section className="relative">
      {/* ====== Carousel track ====== */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {slides.map((s) => (
            <div
              key={s.id}
              className="relative w-full shrink-0 snap-start aspect-[32/9] md:aspect-[28/9] lg:aspect-[24/7] max-h-[420px] md:max-h-[380px] lg:max-h-[360px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover"
                data-fb-index="0"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  const used = Number(el.dataset.fbIndex || "0");
                  const list = FALLBACKS[s.id] || [];
                  const nextUrl = list[used] ?? DEFAULT_FALLBACK;

                  if (el.src !== nextUrl) {
                    el.src = nextUrl;
                    el.dataset.fbIndex = String(used + 1);
                  }
                }}
              />

              {/* overlay biar teks kebaca (dark-mode friendly) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-transparent dark:from-black/60" />

              {/* teks + CTA */}
              <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
                <div className="text-white drop-shadow-sm">
                  {s.badge && (
                    <span className="inline-block rounded-full bg-white/20 px-2 py-1 text-[11px] font-medium">
                      {s.badge}
                    </span>
                  )}
                  <h1 className="mt-2 text-2xl font-semibold md:text-4xl">
                    {s.title}
                  </h1>
                  <p className="mt-2 text-sm opacity-95 md:text-base">
                    {s.subtitle}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href={s.ctaHref}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                    >
                      Lihat promosi
                    </Link>
                    <Link
                      href="/search"
                      className="rounded-full bg-neutral-900/80 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-neutral-900"
                    >
                      Jelajahi properti
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* panah kiri/kanan */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-neutral-900 shadow ring-1 ring-black/10 hover:bg-white"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-neutral-900 shadow ring-1 ring-black/10 hover:bg-white"
        >
          ›
        </button>

        {/* dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goto(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-3 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating SearchBar di bawah hero */}
      <div className="mx-auto -mt-6 md:-mt-8 px-4 max-w-6xl">
        <SearchBar />
      </div>
    </section>
  );
}
