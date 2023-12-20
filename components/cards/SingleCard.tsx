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
    <div className="shadow-1 hover:shadow-3 dark:bg-dark-2 dark:hover:shadow-3 mb-10 overflow-hidden rounded-lg bg-white duration-300 dark:shadow-card">
      <Image src={image} alt="" width={1000} height={800} className="w-full" />
      <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
        <h3>
          <a
            href={titleHref ? titleHref : "/#"}
            className="text-dark mb-4 block text-xl font-semibold hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
            {CardTitle}
          </a>
        </h3>
        <p className="text-body-color dark:text-dark-6 mb-7 text-base leading-relaxed">
          {CardDescription}
        </p>

        {/* {Button && (
          <a
            href={btnHref ? btnHref : "#"}
            className="border-gray-3 text-body-color dark:border-dark-3 dark:text-dark-6 inline-block rounded-full border px-7 py-2 text-base font-medium transition hover:border-primary hover:bg-primary hover:text-white"
          >
            {Button}
          </a>
        )} */}
      </div>
    </div>
  );
};
