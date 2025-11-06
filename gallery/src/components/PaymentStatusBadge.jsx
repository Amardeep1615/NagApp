import React from "react";

export default function PaymentStatusBadge({ status }) {
  const color =
    status === "Paid"
      ? "bg-green-100 text-green-700"
      : status === "Pending"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
      {status}
    </span>
  );
}
