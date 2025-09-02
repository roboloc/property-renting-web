import { RoomImage } from "./roomImage";

export interface Room {
  id: number;
  name: string;
  stock: number;
  price: number;
  propertyId: number;
  createdAt: Date;
  updatedAt: Date;

  roomImages: RoomImage[];
}
