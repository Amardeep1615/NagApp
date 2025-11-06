import React from "react";

export default function PriceTag({ price }) {
  return (
    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-semibold">
      ₹{price}
    </span>
  );
}
