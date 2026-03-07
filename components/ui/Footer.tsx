import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-muted py-8 text-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-semibold">INBORR</p>
            <p className="text-sm text-muted-foreground">
              Apartamenty na wynajem w Warszawie
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <a
              href="mailto:biuro@inborr.pl"
              className="text-sm transition-colors duration-300 hover:text-muted-foreground"
            >
              biuro@inborr.pl
            </a>
            <a
              href="tel:+48608555713"
              className="text-sm transition-colors duration-300 hover:text-muted-foreground"
            >
              +48 608 555 713
            </a>
            <Link
              href="/regulamin"
              className="text-sm transition-colors duration-300 hover:text-muted-foreground"
            >
              Regulamin
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} INBORR. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};
