import Image from "next/image";
import { lazy } from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] flex flex-1 items-center justify-center bg-blue-400">
      <Image
        alt="logo"
        src="/logo.png"
        width={460}
        height={200}
        loading="lazy"
      />
      ;
    </div>
  );
}
