import { useTranslations } from "next-intl";
import {
  ArrowUp10,
  BedDouble,
  Maximize,
  Users,
  type LucideIcon,
} from "lucide-react";

interface SpecsStripProps {
  area: number;
  bedrooms: number;
  floor: number;
  sleeps: number;
}

interface SpecItemProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
}

function SpecItem({ icon: Icon, label, value }: SpecItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-skyline-blue-soft text-skyline-blue">
        <Icon className="h-4 w-4" strokeWidth={1.8} />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-[.16em] text-skyline-muted">
          {label}
        </div>
        <div className="mt-0.5 text-[14px] font-semibold text-skyline-ink">
          {value}
        </div>
      </div>
    </div>
  );
}

export function SpecsStrip({ area, bedrooms, floor, sleeps }: SpecsStripProps) {
  const t = useTranslations("apartmentPage");
  return (
    <div className="grid grid-cols-2 gap-4 rounded-xl border border-skyline-line bg-white p-6 sm:grid-cols-4">
      <SpecItem icon={Maximize} label={t("specsArea")} value={`${area} m²`} />
      <SpecItem icon={BedDouble} label={t("specsBedrooms")} value={bedrooms} />
      <SpecItem icon={ArrowUp10} label={t("specsFloor")} value={floor} />
      <SpecItem icon={Users} label={t("specsGuests")} value={sleeps} />
    </div>
  );
}
