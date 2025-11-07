import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function TicketPage() {
  const [ticket, setTicket] = useState({ name: "", email: "", description: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!ticket.name || !ticket.email || !ticket.description) {
      setError("⚠️ Please fill out all fields before submitting.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear
    -to-br from-indigo-100 via-white to-indigo-200 p-4">
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 relative overflow-hidden"
      >
        {/* Decorative Blur Effects */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-pink-400 opacity-20 blur-3xl rounded-full"></div>

        <h2 className="text-3xl font-bold mb-6 text-indigo-600 flex items-center gap-2 relative z-10">
          🎨 Request Custom Artwork
        </h2>

        <AnimatePresence>
          {submitted ? (
            <Motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center space-y-4"
            >
              <CheckCircle2 size={60} className="text-green-500" />
              <p className="text-green-600 font-semibold text-lg">
                ✅ Ticket submitted successfully!
              </p>
              <p className="text-gray-600">
                We’ll contact you soon with design updates. 🎨✨
              </p>
            </Motion.div>
          ) : (
            <Motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                value={ticket.name}
                onChange={(e) => setTicket({ ...ticket, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                value={ticket.email}
                onChange={(e) => setTicket({ ...ticket, email: e.target.value })}
              />
              <textarea
                placeholder="Describe your desired artwork"
                className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                rows="4"
                value={ticket.description}
                onChange={(e) => setTicket({ ...ticket, description: e.target.value })}
              />

              {error && (
                <p className="text-red-500 text-sm font-medium text-center">
                  {error}
                </p>
              )}

              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2 shadow-md"
              >
                <Send size={20} /> Submit Ticket
              </Motion.button>
            </Motion.form>
          )}
        </AnimatePresence>
      </Motion.div>
    </div>
  );
}
