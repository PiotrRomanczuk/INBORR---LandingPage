import { apartmentsList } from "@/app/apartamenty/apartmentsList";
import { CardApartment } from "@/components/cards/CardApartment";

export const Apartments = () => {
  return (
    <section className="my-6 flex flex-col justify-between gap-12 lg:flex-row lg:rounded-2xl ">
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
