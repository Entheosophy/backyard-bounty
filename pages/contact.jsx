// pages/contact.jsx
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
    });

    if (res.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-md mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="opacity-80 mb-6">
        Want to place an order or say hi to Uncle Tim? Fill out the form below or email us directly.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full px-4 py-2 border rounded bg-transparent text-[var(--scene-text)] placeholder-[var(--scene-text)]"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded bg-transparent text-[var(--scene-text)] placeholder-[var(--scene-text)]"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className="w-full px-4 py-2 border rounded h-32 bg-transparent text-[var(--scene-text)] placeholder-[var(--scene-text)]"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className={`bg-amber-500 hover:bg-amber-600 text-[var(--scene-text)] px-4 py-2 rounded ${
            status === "sending" ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "sent" && (
          <p className="text-green-600 pt-2">Thanks! Uncle Tim will be in touch.</p>
        )}
        {status === "error" && (
          <p className="text-red-600 pt-2">Oops! Something went wrong. Try again later.</p>
        )}
      </form>
    </section>
  );
}
