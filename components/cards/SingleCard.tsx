import Image from "next/image";

export const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
} //   btnHref,
: {
  image: string;
  Button?: React.ReactNode;
  CardDescription: string;
  CardTitle: string;
  titleHref?: string;
  //   btnHref?: string;
}) => {
  return (
    <div className="shadow-md hover:shadow-xl dark:bg-secondary mb-10 overflow-hidden rounded-lg bg-white duration-300">
      <Image src={image} alt="" width={1000} height={800} className="w-full" />
      <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
        <h3>
          <a
            href={titleHref ? titleHref : "/#"}
            className="text-foreground mb-4 block text-xl font-semibold hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
            {CardTitle}
          </a>
        </h3>
        <p className="text-muted-foreground mb-7 text-base leading-relaxed">
          {CardDescription}
        </p>

        {/* {Button && (
          <a
            href={btnHref ? btnHref : "#"}
            className="border-border text-muted-foreground inline-block rounded-full border px-7 py-2 text-base font-medium transition hover:border-primary hover:bg-primary hover:text-white"
          >
            {Button}
          </a>
        )} */}
      </div>
    </div>
  );
};
