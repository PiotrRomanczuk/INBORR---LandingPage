import { apartmentList } from "@/app/apartmentsList";
import { CardHorizontal } from "../reusable/CardHorizontal";
import { CardVertical } from "../reusable/CardVertical";
export const Apartments = () => {
  return (
    <div className=" z-10 mx-auto min-w-full  lg:w-full lg:max-w-5xl ">
      <div className="align-center mx-auto flex flex-col justify-center gap-12 py-20 ">
        {apartmentList.map((apartment) => (
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
