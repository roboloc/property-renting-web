// export interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   profilePic: string | null;
//   createdAt: Date;
//   updatedAt: Date;
// }

export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  profilePic: string | null;
  role: "CUSTOMER" | "TENANT";
  provider: "GOOGLE" | "CREDENTIALS";
  createdAt: Date;
  updatedAt: Date;
}
