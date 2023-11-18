"use client";

import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

export const CookieConsent = (props: any) => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between bg-gray-100 px-4 py-8">
        <span className="text-dark mr-16 text-base">
          This website uses cookies to improve user experience. By using our
          website you consent to all cookies in accordance with our Cookie
          Policy.
        </span>
        <button
          className="rounded bg-green-500 px-8 py-2 text-white"
          onClick={() => acceptCookie()}
        >
          Accept
        </button>
      </div>
    </div>
  );
};
