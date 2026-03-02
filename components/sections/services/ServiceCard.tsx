import { ReactNode } from "react";

export const ServiceCard = ({
  icon,
  title,
  details,
  ariaLabel,
}: {
  icon: ReactNode;
  title: string;
  details: string;
  ariaLabel: string;
}) => {
  return (
    <div className="w-full">
      <div
        className={`
          flex h-auto min-h-[250px] sm:min-h-[280px] md:min-h-[300px] flex-col justify-center rounded-2xl border-4 bg-background
          p-10 text-center
          transition duration-500 hover:shadow-2xl
          md:px-7 xl:px-10
        `}
        aria-label={ariaLabel}
      >
        <div className="mb-8 flex items-center justify-center text-primary">
          <span className="scale-[2]">{icon}</span>
        </div>

        <div className="flex flex-1 flex-col">
          <h4 className="text-foreground mb-3.5 justify-center text-2xl font-semibold">
            {title}
          </h4>
          <p className="text-muted-foreground line-clamp-4">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};
