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
      <div className="w-full px-6 py-4 md:w-1/2 md:py-2 lg:w-1/3 lg:py-0">
        <div className="dark:bg-dark-2 mb-9 h-full flex-col rounded-[20px] border-2  bg-white p-10  transition duration-500 hover:shadow-2xl md:px-7 xl:px-10">
          <div className="mx-auto mb-8 flex h-[70px] w-full items-center justify-center rounded-2xl text-blue-300">
            {icon}
          </div>
          <div className="text-center">
            <h4 className="text-dark mb-[14px] text-2xl font-semibold dark:text-white">
              {title}
            </h4>

            <p className="text-body-color dark:text-dark-6">{details}</p>
          </div>
        </div>
      </div>
    </>
  );
};
