import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="space-between flex items-center justify-center gap-4 sm:gap-8 md:gap-12 bg-muted py-6 text-foreground ">
      <Link href="/kontakt" className="hover:text-muted-foreground transition-colors duration-300">
        biuro@inborr.pl
      </Link>
      <a href="tel:+48 608 555 713" className="hover:text-muted-foreground transition-colors duration-300">
        +48 608 555 713
      </a>
      <Link href="/regulamin" className="hover:text-muted-foreground transition-colors duration-300">
        Regulamin
      </Link>
    </footer>
  );
};
