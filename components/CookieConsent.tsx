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
    <div className="fixed inset-0 z-10 bg-blue-300 bg-opacity-70">
      <div className="fixed bottom-0 flex w-full gap-4 bg-gray-100 px-4 py-8">
        <span className="text-dark mr-16 flex  justify-between text-xs">
          Ta stronka uźywa ciasteczek (cookies) do przechowywania informacji o
          Twoich preferencjach i wizycie na stronie.
          <button
            className=" rounded bg-blue-500 px-2 text-white"
            onClick={() => acceptCookie()}
          >
            Accept
          </button>
        </span>
      </div>
    </div>
  );
};
