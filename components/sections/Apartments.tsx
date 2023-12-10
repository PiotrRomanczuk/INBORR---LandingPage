import { apartmentsList } from "@/app/apartamenty/apartmentsList";
import { CardApartment } from "@/components/cards/CardApartment";

export const Apartments = () => {
  return (
    <section className="z-10 mx-auto mb-40 flex min-w-full items-center lg:w-full lg:max-w-5xl">
      <div className="align-center mx-auto grid justify-center gap-10 border-4 border-black xl:grid-cols-2">
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
    </section>
  );
};
