// src/pages/Contact.jsx
export default function Contact() {
    return (
      <section className="max-w-md mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="opacity-80 mb-6">
          Want to place an order or say hi to Uncle Tim? Fill out the form below or email us directly.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded bg-transparent text-[var(--scene-text)] placeholder-[var(--scene-text)]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded bg-transparent text-[var(--scene-text)] placeholder-[var(--scene-text)]"
          />
          <textarea
            placeholder="Message"
            className="w-full px-4 py-2 border rounded h-32 bg-transparent text-[var(--scene-text)] placeholder-[var(--scene-text)]"
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-[var(--scene-text)] px-4 py-2 rounded"
          >
            Send
          </button>
        </form>
      </section>
    );
  }
  