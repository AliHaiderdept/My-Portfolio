
"use client";
import { useRef } from "react";
import { useSectionReveal } from "../useSectionReveal";

export default function Contact() {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, "form");

	return (
		<>
		<main className="relative z-10">
    <section ref={sectionRef} id="contact" className="title-section">
		<div className="title-inner mx-4 sm:mx-6 md:mx-12 mt-12 grid grid-cols-[40px_minmax(0,1fr)] sm:grid-cols-[60px_minmax(0,1fr)] gap-4 sm:gap-8 lg:gap-12 items-start">
        <div className="title-index font-geist-sans shrink-0"
    aria-hidden="true">05
  </div>
  <div className="title-copy min-w-0 w-full md:mx-10 lg:mx-12 sm:mx-8">
    <span className="title-label font-geist-sans block"> Contacts</span>
    <p className="title-title">Let&apos;s work <br className="hidden sm:block" />on your projects.</p>
  </div>
</div>

     <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto w-full max-w-2xl mt-12 space-y-5 border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-slate-500/10 backdrop-blur-xl sm:p-8"
    >
      <div>
        <label className="mb-2 block font-geist-mono text-sm text-neutral-300">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-slate-400/60 focus:shadow-lg focus:shadow-slate-500/10"
        />
      </div>

      <div>
        <label className="mb-2 block font-geist-mono text-sm text-neutral-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-slate-400/60 focus:shadow-lg focus:shadow-slate-500/10"
        />
      </div>

      <div>
        <label className="mb-2 block font-geist-mono text-sm text-neutral-300">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          rows={5}
          required
          className="w-full resize-y border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-slate-400/60 focus:shadow-lg focus:shadow-slate-500/10"
        />
      </div>

      <button
        type="submit"
        className="w-full border border-white/20 bg-white/10 px-5 py-3 font-geist-mono text-sm text-white shadow-lg shadow-slate-500/10 backdrop-blur-md transition hover:bg-white/15 hover:shadow-slate-400/20 active:scale-[0.99]"
      >
        Submit Message →
      </button>
    </form>
			</section>
			</main>
			</>
	)
}

