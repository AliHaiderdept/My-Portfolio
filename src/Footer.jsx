import { useEffect, useState } from "react";

function Footer() {
  const [displayDate, setDisplayDate] = useState("Loading date...");
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const formatDate = (dateValue) =>
      new Date(dateValue).toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      });

    const loadDate = async () => {
      try {
        const response = await fetch("https://worldtimeapi.org/api/ip");
        if (!response.ok) {
          throw new Error("Date API request failed");
        }

        const data = await response.json();
        if (isMounted) {
          setDisplayDate(formatDate(data.datetime));
        }
      } catch {
        if (isMounted) {
          setDisplayDate(formatDate(Date.now()));
        }
      }
    };

    loadDate();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="site-footer" aria-label="Portfolio footer">
      <p className="site-footer-main">{displayDate} • © Ali Haider Portfolio | All Rights Are Reserved </p>

      <p className={`site-footer-status ${isOnline ? "is-online" : "is-offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </footer>
  );
}

export default Footer;