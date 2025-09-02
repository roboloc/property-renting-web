import { Room } from "./room";
import { RoomImage } from "./roomImage";

export interface Properties {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: "HOUSE" | "APARTMENT" | "HOTEL";
  latitute: number;
  longtitude: number;
  status: "PUBLISHED" | "DRAFT";
  tenantId: number;
  createdAt: Date;
  updatedAt: Date;
}
