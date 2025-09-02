import { axiosInstance } from "@/lib/axios";
import { Transaction } from "@/types/transaction";
import { PageableResponse, PaginationQueries } from "@/types/pagination";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

interface GetOrdersQuery extends PaginationQueries {
  serach?: string;
}

const useGetOrders = (queries?: GetOrdersQuery) => {
  const session = useSession();
  return useQuery({
    queryKey: ["transactions", queries],
    queryFn: async () => {
      const { data } = await axiosInstance.get<PageableResponse<Transaction>>(
        "/transactions",
        {
          params: queries,
          headers: {
            Authorization: `Bearer ${session.data?.user.accessToken}`,
          },
        },
      );

      return data;
    },
  });
};

export default useGetOrders;
