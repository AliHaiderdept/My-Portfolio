"use client";

import { Facebook, Github, Instagram, Mail, Paperclip, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Reveal from "./Reveal";
import Tilt3D from "./Tilt3D";

export const socials = [
  {
    label: "Email",
    handle: "alihaidermillinium@gmail.com",
    href: "mailto:alihaidermillinium@gmail.com",
    Icon: Mail
  },
  {
    label: "GitHub",
    handle: "github.com/AliHaiderdept",
    href: "https://github.com/AliHaiderdept",
    Icon: Github
  },
  {
    label: "Instagram",
    handle: "instagram.com/alihaiderr.r",
    href: "https://instagram.com/alihaiderr.r",
    Icon: Instagram
  },
  {
    label: "Facebook",
    handle: "facebook.com/alihaiderofficial952",
    href: "https://www.facebook.com/alihaiderofficial952",
    Icon: Facebook
  }
];

export default function Contact() {
  const [fileName, setFileName] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    setSending(true);

    try {
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          fileName
        })
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.ok === false) {
        throw new Error(result.message || "Request failed");
      }

      toast.success("Message sent successfully!");
      form.reset();
      setFileName("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Say hello</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">Open to internships, freelance builds and collaboration.</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <Tilt3D max={4}>
              <form className="glass-card contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input name="name" required placeholder="Your name" autoComplete="name" />
                  <input name="email" type="email" required placeholder="Your email" autoComplete="email" />
                </div>

                <textarea name="message" required rows={6} placeholder="Tell me about your project…" />

                <div className="form-actions">
                  <label className="attach-button">
                    <Paperclip size={16} /> {fileName ? "Change file" : "Attach file"}
                    <input
                      type="file"
                      className="visually-hidden"
                      onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
                    />
                  </label>

                  {fileName && <span className="file-name">{fileName}</span>}

                  <button type="submit" className="button button-primary submit-button" disabled={sending}>
                    {sending ? "Sending…" : "Send message"} <Send size={16} />
                  </button>
                </div>
              </form>
            </Tilt3D>
          </Reveal>

          <div className="social-list">
            {socials.map(({ label, handle, href, Icon }, index) => (
              <Reveal key={label} delay={index * 70}>
                <Tilt3D max={9}>
                  <a
                    className="glass-card social-card"
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                  >
                    <span className="icon-box">
                      <Icon size={19} />
                    </span>
                    <span className="social-text">
                      <strong>{label}</strong>
                      <span>{handle}</span>
                    </span>
                  </a>
                </Tilt3D>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
