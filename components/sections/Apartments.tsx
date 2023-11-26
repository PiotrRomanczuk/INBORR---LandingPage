import { apartmentsList } from "@/app/apartamenty/apartmentsList";
import { CardHorizontal } from "@/components/reusable/CardHorizontal";
import { CardVertical } from "@/components/reusable/CardVertical";
export const Apartments = () => {
  return (
    <div className=" z-10 mx-auto min-w-full  lg:w-full lg:max-w-5xl ">
      <div className="align-center mx-auto flex flex-col justify-center gap-12 px-10 py-20 md:px-0">
        {apartmentsList.map((apartment) => (
          <CardHorizontal
            key={apartment.name}
            title={apartment.name}
            description={apartment.description}
            imageSrc={apartment.mainPic}
          />
        ))}
      </div>
    </div>
  );
};