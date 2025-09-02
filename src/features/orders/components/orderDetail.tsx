"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import useGetOrderByUuid from "../api/useGetOrderByUUID";

// --- Status Badge Classes ---
const statusClass = (status?: string) => {
  switch (status) {
    case "PAID":
    case "DONE":
      return "bg-green-100 text-green-800 border-green-300";
    case "WAITING_FOR_PAYMENT":
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "WAITING_FOR_CONFIRMATION":
      return "bg-blue-100 text-blue-800 border-blue-300";
    case "REJECTED":
    case "EXPIRED":
      return "bg-red-100 text-red-800 border-red-300";
    default:
      return "bg-gray-100 text-gray-800 border-gray-300";
  }
};

// --- Calendar Icon ---
const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

export default function OrderDetail() {
  const { uuid } = useParams();
  const {
    data: transaction,
    isLoading,
    isError,
  } = useGetOrderByUuid(String(uuid));

  if (isLoading)
    return (
      <p className="flex h-screen items-center justify-center text-gray-500">
        Loading order...
      </p>
    );
  if (isError)
    return (
      <p className="flex h-screen items-center justify-center text-red-500">
        Failed to fetch order
      </p>
    );
  if (!transaction)
    return (
      <p className="flex h-screen items-center justify-center text-gray-500">
        Order not found
      </p>
    );

  const room = transaction.room;
  const property = room?.property;
  const roomImageUrl = room?.roomImages?.[0]?.url || "/placeholder.png";

  const start = transaction.startDate ? new Date(transaction.startDate) : null;
  const end = transaction.endDate ? new Date(transaction.endDate) : null;
  const totalPrice = transaction.total || 0;

  return (
    <div className="w-fullfont-sans min-h-screen">
      <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column: Room & Booking */}
          <div className="space-y-8 lg:col-span-2">
            {/* Room / Property Card */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="relative h-80 w-full lg:h-96">
                <Image
                  src={roomImageUrl}
                  alt={room?.name || property?.title || "Room Image"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  {property?.title ?? "Property Title"}
                </h1>
                <p className="mt-2 text-lg text-gray-600">
                  Room: {room?.name ?? "Room Name"}
                </p>
              </div>
            </div>

            {/* Booking Details */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Your Booking</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-gray-100 p-3">
                    <CalendarIcon className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Start Date</p>
                    <p className="font-semibold text-gray-800">
                      {start ? format(start, "dd MMMM yyyy") : "-"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-gray-100 p-3">
                    <CalendarIcon className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">End Date</p>
                    <p className="font-semibold text-gray-800">
                      {end ? format(end, "dd MMMM yyyy") : "-"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="top-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Status</span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClass(transaction.status)}`}
                  >
                    {transaction.status?.replace(/_/g, " ") || "UNKNOWN"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Order ID</span>
                  <span className="truncate font-mono text-sm text-gray-700">
                    {transaction.uuid}
                  </span>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <h3 className="text-xl font-semibold text-gray-900">
                Price Details
              </h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Total Price</span>
                  <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
                </div>
              </div>

              <hr className="my-6 border-t-2 border-dashed border-gray-200" />

              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
              </div>

              <button className="mt-8 w-full rounded-lg bg-orange-500 py-4 text-center font-semibold text-white transition hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none">
                Upload Your Payment Proof
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
