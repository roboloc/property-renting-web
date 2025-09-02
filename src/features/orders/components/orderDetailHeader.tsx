// "use client";

// import { useParams } from "next/navigation";
// import useGetOrderByUuid from "../api/useGetOrderByUUID";
// import dayjs from "dayjs";

// const OrderDetailHeader = () => {
//   const { uuid } = useParams();
//   const {
//     data: orderData,
//     isLoading,
//     isError,
//   } = useGetOrderByUuid(String(uuid));

//   if (isLoading) return <p className="text-center">Loading order...</p>;
//   if (isError) return <p className="text-center">Failed to fetch order</p>;
//   if (!orderData?.transaction)
//     return <p className="text-center text-gray-500">Order not found</p>;

//   const order = orderData.transaction;

//   return (
//     <div className="mb-6 w-full rounded-2xl border border-gray-200 bg-white p-6 shadow">
//       <h2 className="mb-4 text-xl font-bold">Order Information</h2>
//       <div className="space-y-1 text-sm text-gray-700">
//         <p>UUID: {order.uuid}</p>
//         <p>ID: {order.id}</p>
//         <p>Status: {order.status}</p>
//         <p>Start: {dayjs(order.startDate).format("DD MMM YYYY")}</p>
//         <p>End: {dayjs(order.endDate).format("DD MMM YYYY")}</p>
//         <p>Created At: {dayjs(order.createdAt).format("DD MMM YYYY HH:mm")}</p>
//       </div>
//     </div>
//   );
// };

// export default OrderDetailHeader;
