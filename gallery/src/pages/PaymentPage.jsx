import React, { useState } from "react";
import { CreditCard } from "lucide-react";

export default function PaymentPage() {
  const [status, setStatus] = useState("pending");

  const handlePayment = () => setTimeout(() => setStatus("success"), 1500);

  return (
    <div className="max-w-lg mx-auto mt-16 bg-white shadow-2xl rounded-2xl p-8 relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>

      <h2 className="text-3xl font-bold mb-4 text-green-600 flex items-center gap-2">
        <CreditCard size={28} /> Artwork Payment
      </h2>
      <p className="text-gray-700 mb-2">
        You are purchasing: <strong>“Golden Sunset”</strong>
      </p>
      <p className="text-gray-700 mb-6">Price: ₹499</p>

      {status === "pending" ? (
        <button
          onClick={handlePayment}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition flex items-center justify-center gap-2"
        >
          <CreditCard size={20} /> Pay Now
        </button>
      ) : (
        <div className="text-green-600 font-semibold text-center text-lg">
          ✅ Payment Successful! Download available in your gallery.
        </div>
      )}
    </div>
  );
}
