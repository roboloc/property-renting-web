import { User } from "./user";

export interface Tenant {
  id: number;
  name: string;
  profilePic: string | null;
  phone: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;

  user?: Omit<User, "password">;
}
