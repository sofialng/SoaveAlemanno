// CloudflareAnalytics.jsx
import { useEffect } from "react";

const COOKIE_KEY = "cookie_consent";
const SCRIPT_ID = "cf-web-analytics";
const BEACON_TOKEN = import.meta.env.VITE_CF_BEACON_TOKEN;

function isAnalyticsAllowed() {
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    const consent = raw ? JSON.parse(raw) : null;
    return !!consent?.analytics;
  } catch {
    return false;
  }
}

function loadScript() {
  if (document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.defer = true;
  script.setAttribute(
    "data-cf-beacon",
    JSON.stringify({ token: BEACON_TOKEN })
  );
  document.body.appendChild(script);
}

function removeScript() {
  const script = document.getElementById(SCRIPT_ID);
  if (script) script.remove();
}

export default function CloudflareAnalytics() {
  useEffect(() => {
    const sync = () => {
      if (isAnalyticsAllowed()) loadScript();
      else removeScript();
    };

    sync(); // stato iniziale al mount
    window.addEventListener("cookie-consent-changed", sync);
    return () => window.removeEventListener("cookie-consent-changed", sync);
  }, []);

  return null;
}