import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="space-between flex items-center justify-center gap-12 bg-gray-200 py-6 text-black ">
      <Link href="/kontakt">biuro@inborr.pl</Link>
      <a href="tel:+48 608 555 713">+48 608 555 713</a>
    </footer>
  );
};
