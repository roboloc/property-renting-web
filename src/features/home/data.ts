export type HomeItem = {
  id: string;
  title: string;
  price: number;
  nights: number;
  rating: number;
  badge?: string;
  image: string;
};

export const bandungHomes: HomeItem[] = [
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

export const tangerangHomes: HomeItem[] = [
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
