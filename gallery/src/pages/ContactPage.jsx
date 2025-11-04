import React, { useState } from "react";

export default function ContactPage() {
  const [msg, setMsg] = useState("");
  const send = (e) => {
    e.preventDefault();
    alert("Message sent (demo): " + msg);
    setMsg("");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form onSubmit={send} className="mt-4 bg-white p-4 rounded shadow space-y-3">
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full p-2 border rounded" placeholder="Your message to TMK / Nani" />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
      </form>
    </div>
  );
}
