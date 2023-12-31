import { apartmentsList } from "@/app/apartamenty/apartmentsList";
import { CardApartment } from "@/components/cards/CardApartment";

export const Apartments = () => {
  return (
    <section className="my-6 flex flex-col justify-between gap-4 md:gap-10 lg:flex-row lg:gap-20 lg:rounded-2xl ">
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
    </section>
  );
};
