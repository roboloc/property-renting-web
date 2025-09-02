import { User } from "next-auth";
import { Room } from "./room";
import { Properties } from "./property";
import { RoomImage } from "./roomImage";

export interface Transaction {
  id: number;
  uuid: string;
  userId: number;
  roomId: number;
  status:
    | "WAITING_FOR_PAYMENT"
    | "WAITING_FOR_CONFIRMATION"
    | "PAID"
    | "REJECTED"
    | "EXPIRED";
  startDate: Date;
  endDate: Date;
  paymentProof: string | null;
  total: number;
  expiredAt: Date;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  room: Room & {
    property: Properties;
    roomImage: RoomImage[];
    // roomImage: RoomImages; // 👈 property lives under room
  };
}
