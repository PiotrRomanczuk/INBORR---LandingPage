import Image from "next/image";

export type PlaceCardProps = {
  name: string;
  cat: string;
  dist: string;
  time: string;
  blurb: string;
  imageSrc: string;
};

export default function PlaceCard({
  name,
  cat,
  dist,
  time,
  blurb,
  imageSrc,
}: PlaceCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-skyline-line bg-skyline-paper">
      <div className="relative aspect-[4/3]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-skyline-blue">
          {cat}
        </span>
        <span
          className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-white backdrop-blur"
          style={{ background: "rgba(14,24,40,.7)" }}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          {time}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[18px] font-semibold leading-tight tracking-tight text-skyline-ink">
            {name}
          </h3>
          <span className="whitespace-nowrap text-[11px] font-medium tabular-nums text-skyline-muted">
            {dist}
          </span>
        </div>
        <p className="mt-2 text-[12px] leading-relaxed text-skyline-muted">
          {blurb}
        </p>
      </div>
    </article>
  );
}
