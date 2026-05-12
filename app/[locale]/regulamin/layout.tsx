import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin | Inborr Apartamenty",
  description: "Regulamin wynajmu apartamentów Inborr w Warszawie. Zasady rezerwacji, anulowania i pobytu.",
};

export default function RegulaminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
