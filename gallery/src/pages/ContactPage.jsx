import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Contact Us</h2>
      {sent ? (
        <div className="text-green-600 font-semibold">
          ✅ Message sent successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            className="border w-full p-2 mb-3 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            className="border w-full p-2 mb-3 rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            className="border w-full p-2 mb-3 rounded"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded w-full hover:bg-indigo-700"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
