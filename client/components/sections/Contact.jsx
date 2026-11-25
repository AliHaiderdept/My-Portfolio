
"use client";
import { useRef, useState } from "react";
import { useSectionReveal } from "../useSectionReveal";

export default function Contact() {
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  useSectionReveal(sectionRef, "form");

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Step 1: FormData se fields uthate hain, taa-ke form submit ke baad reset ho sake.
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      // Step 2: Frontend env URL use karta hai; local development ke liye localhost fallback hai.
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const result = await response.json();

      // Step 3: API ki validation ya database error user ko saaf dikhate hain.
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Message send nahi ho saka.");
      }

      // Step 4: Success par fields clear karke confirmation show karte hain.
      form.reset();
      setStatus({ type: "success", message: result.message });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Server se rabta nahi ho saka. Dobara koshish karein.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="title-section">
      <div className="title-inner mt-12 grid grid-cols-[40px_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-8 lg:gap-12">
        <div className="title-index shrink-0 font-geist-sans" aria-hidden="true">
          05
        </div>
        <div className="title-copy min-w-0 w-full">
          <span className="title-label block font-geist-sans">Contacts</span>
          <p className="title-title">
            Let&apos;s work <br className="hidden sm:block" />on your projects.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        aria-busy={isSubmitting}
        className="contact-form mx-auto mt-12 w-full max-w-2xl space-y-5 border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-slate-500/10 backdrop-blur-xl sm:p-8"
      >
        <div>
          <label htmlFor="contact-name" className="mb-2 block font-geist-mono text-sm text-neutral-300">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            maxLength={80}
            required
            className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-slate-400/60 focus:shadow-lg focus:shadow-slate-500/10"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block font-geist-mono text-sm text-neutral-300">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            maxLength={160}
            required
            className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-slate-400/60 focus:shadow-lg focus:shadow-slate-500/10"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block font-geist-mono text-sm text-neutral-300">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell me about your project..."
            rows={5}
            maxLength={4000}
            required
            className="w-full resize-y border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-slate-400/60 focus:shadow-lg focus:shadow-slate-500/10"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full border border-white/20 bg-white/10 px-5 py-3 font-geist-mono text-sm text-white shadow-lg shadow-slate-500/10 backdrop-blur-md transition hover:bg-white/15 hover:shadow-slate-400/20 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Submit Message →"}
        </button>

        {status && (
          <p
            role={status.type === "error" ? "alert" : "status"}
            className={status.type === "success" ? "text-sm text-green-400" : "text-sm text-red-400"}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}
