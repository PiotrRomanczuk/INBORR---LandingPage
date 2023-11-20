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
      <div className="fixed bottom-0 left-0 right-0 mx-28 flex items-center justify-between bg-gray-100 px-4 py-8">
        <span className="text-dark mr-16 text-base">
          Cookies pozwalają nam zmieniać tę stronę dla Ciebie, czyli
          spersonalizować ją. Możemy też ulepszać nasze kampanie reklamowe i
          mniej irytować Cię nietrafionymi reklamami. <br />
          Administratorem Twoich danych osobowych jest INBORR z siedzibą w
          Warszawie. Cele przetwarzania danych osobowych, okresy przechowywania
          opisane są w Polityce Prywatności.
        </span>
        <button
          className="rounded bg-blue-500 px-8 py-2 text-white"
          onClick={() => acceptCookie()}
        >
          Accept
        </button>
      </div>
    </div>
  );
};
