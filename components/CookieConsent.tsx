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
    <div className="fixed inset-0 z-10 bg-blue-200 bg-opacity-70">
      <div className="fixed bottom-0 flex w-full justify-between gap-4 bg-gray-100 px-4 py-8 text-black">
        <span className="text-dark flex text-xs">
          Ta stronka uźywa ciasteczek (cookies) do przechowywania informacji o
          Twoich preferencjach i wizycie na stronie.
        </span>
        <button
          className=" mr-4 rounded bg-blue-500 px-2 text-white hover:bg-blue-700 lg:mr-16"
          onClick={() => acceptCookie()}
        >
          Accept
        </button>
      </div>
    </div>
  );
};
