// /Users/entheos/Documents/Backyard Bounty/components/PageViewTracker.jsx
import { useEffect } from "react";

export default function PageViewTracker() {
  useEffect(() => {
    if (navigator.doNotTrack === "1") return;
    if (window.location.pathname === "/stats") return;

    fetch("/api/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: window.location.pathname }),
      keepalive: true,
    }).catch(() => {});
  }, []);

  return null;
}
