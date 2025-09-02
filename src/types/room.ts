import { Property } from "./property";
import { RoomImage } from "./roomImage";

export interface Room {
  id: number;
  name: string;
  stock: number;
  price: number;
  propertyId: number;

  createdAt: Date;
  updatedAt: Date;

  // relasi yang kamu include di service saat ini
  roomImages: RoomImage[];
  property?: Property;
}
