// import { axiosInstance } from "@/lib/axios";
// import { Transaction } from "@/types/transaction";
// import { useQuery } from "@tanstack/react-query";
// import { useSession } from "next-auth/react";

// const useGetOrderByUuid = (uuid: string) => {
//   const session = useSession();

//   return useQuery({
//     queryKey: ["transaction", uuid],
//     queryFn: async () => {
//       if (!uuid) throw new Error("Transaction UUID is required");

//       const { data } = await axiosInstance.get<Transaction>(
//         `/transactions/${uuid}`,
//         {
//           headers: {
//             Authorization: `Bearer ${session.data?.user.accessToken}`,
//           },
//         },
//       );

//       return data;
//     },
//     enabled: !!uuid, // only run query if uuid is defined
//   });
// };

// export default useGetOrderByUuid;

import { axiosInstance } from "@/lib/axios";
import { Transaction } from "@/types/transaction";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const useGetOrderByUuid = (uuid: string) => {
  const session = useSession();

  return useQuery({
    queryKey: ["transaction", uuid],
    queryFn: async () => {
      if (!uuid) throw new Error("Transaction UUID is required");

      const { data } = await axiosInstance.get<{ transaction: Transaction }>(
        `/transactions/${uuid}`,
        {
          headers: {
            Authorization: `Bearer ${session.data?.user.accessToken}`,
          },
        },
      );

      // unwrap the transaction object
      return data.transaction;
    },
    enabled: !!uuid,
  });
};

export default useGetOrderByUuid;
