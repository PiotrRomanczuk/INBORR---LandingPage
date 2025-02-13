import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="space-between flex items-center justify-center gap-12 bg-gray-200 py-6 text-black ">
      <Link href="/kontakt" className="hover:text-gray-500 transition-colors duration-300">
        biuro@inborr.pl
      </Link>
      <a href="tel:+48 608 555 713" className="hover:text-gray-500 transition-colors duration-300">
        +48 608 555 713
      </a>
      <Link href="/regulamin" className="hover:text-gray-500 transition-colors duration-300">
        Regulamin
      </Link>
    </footer>
  );
};
