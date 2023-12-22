export const ServiceCard = ({
  icon,
  title,
  details,
}: {
  icon: React.ReactNode;
  title: string;
  details: string;
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="shadow-2 dark:bg-dark-2 mb-9 h-full rounded-[20px] bg-white p-10 transition duration-500 hover:shadow-lg md:px-7 xl:px-10">
          <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
            {icon}
          </div>
          <h4 className="text-dark mb-[14px] text-2xl font-semibold dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
