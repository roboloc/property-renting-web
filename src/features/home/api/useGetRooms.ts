"use client";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import type { Room } from "@/types/room";

type PageableResponse<T> = { data: T[] };

interface GetRoomsQuery {
  page?: number;
  take?: number;
  search?: string;
  category?: string;
  sortBy?: "latest" | "oldest" | "price";
}

const useGetRooms = (queries?: GetRoomsQuery) => {
  return useQuery<Room[]>({
    queryKey: ["rooms", queries ?? {}],
    queryFn: async () => {
      const res = await axiosInstance.get<PageableResponse<Room>>("/rooms", {
        params: queries ?? {},
      });
      return res.data.data ?? []; // <-- balikkan array
    },
    initialData: [], // <-- aman di first render
  });
};

export default useGetRooms;
