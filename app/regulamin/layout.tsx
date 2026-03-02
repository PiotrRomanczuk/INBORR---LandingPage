import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin | Inborr - Apartamenty w Warszawie",
  description:
    "Regulamin korzystania z apartamentow InBoRR. Zasady rezerwacji, pobytu i anulowania.",
};

export default function RegulaminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
