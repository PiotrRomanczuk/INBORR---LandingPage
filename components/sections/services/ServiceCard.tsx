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
          dark:bg-secondary flex h-auto min-h-[250px] sm:min-h-[280px] md:min-h-[300px] cursor-pointer flex-col justify-center rounded-2xl border-4 bg-white
          p-10 text-center
          transition duration-500 hover:shadow-2xl
          md:px-7 xl:px-10
        `}
        role="button"
        aria-label={ariaLabel}
        tabIndex={0}
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
