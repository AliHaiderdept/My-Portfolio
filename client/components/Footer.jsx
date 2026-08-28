"use client";

import { useEffect, useState } from "react";
import { socials } from "./Contact";

export default function Footer() {
  const [date, setDate] = useState("");
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    );

    const update = () => setOnline(navigator.onLine);
    update();

    window.addEventListener("online", update);
    window.addEventListener("offline", update);

    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-socials">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <div className="footer-meta">
          <span className={online ? "online-status" : "offline-status"}>
            <span className="status-dot" />
            {online ? "Online" : "Offline"}
          </span>
          <p>
            {date} · © {new Date().getFullYear()} Ali Haider · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
