import { apartmentsList } from "@/app/apartamenty/apartmentsList";
import { CardApartment } from "@/components/cards/CardApartment";

export const Apartments = () => {
  return (
    <div className=" z-10 mx-auto flex min-w-full items-center lg:w-full lg:max-w-5xl ">
      <div className="align-center mx-auto flex flex-col justify-center gap-12 px-6 py-20 md:px-0">
        {apartmentsList.map((apartment) => (
          <CardApartment
            key={apartment.name}
            title={apartment.name}
            location={apartment.location}
            description={apartment.description}
            imageSrc={apartment.mainPic}
            hrefLink={apartment.hrefLink}
          />
        ))}
      </div>
    </div>
  );
};
