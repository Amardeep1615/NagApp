import React, { useState } from "react";
import { Send } from "lucide-react";

export default function TicketPage() {
  const [ticket, setTicket] = useState({ name: "", email: "", description: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>

      <h2 className="text-3xl font-bold mb-6 text-indigo-600 flex items-center gap-2">
        🎨 Request Custom Artwork
      </h2>

      {submitted ? (
        <p className="text-green-600 font-semibold text-center">
          ✅ Ticket submitted! We’ll contact you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-xl focus:ring-2 focus:ring-indigo-400"
            value={ticket.name}
            onChange={(e) => setTicket({ ...ticket, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-xl focus:ring-2 focus:ring-indigo-400"
            value={ticket.email}
            onChange={(e) => setTicket({ ...ticket, email: e.target.value })}
          />
          <textarea
            placeholder="Describe your desired artwork"
            className="border p-3 rounded-xl focus:ring-2 focus:ring-indigo-400"
            rows="4"
            value={ticket.description}
            onChange={(e) => setTicket({ ...ticket, description: e.target.value })}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition flex items-center justify-center gap-2"
          >
            <Send size={20} /> Submit Ticket
          </button>
        </form>
      )}
    </div>
  );
}
