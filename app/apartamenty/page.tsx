import CardHorizontal from "../components/reusable/CardHorizontal";
import { apartmentList } from "../apartmentsList";

export default function Home() {
  return (
    <div className="mx-auto h-full min-w-full bg-white">
      <div className="">
        <div className="2xl:px-90 z-10 mx-auto min-w-full md:px-16 lg:w-full lg:max-w-5xl lg:px-24 xl:px-56">
          <div className="align-center mx-auto flex flex-col justify-center gap-12 px-6 py-20 ">
            {/* <CardHorizontal title="Hello" description="lol" />
            <CardHorizontal title="Hello" description="lol" />
            <CardHorizontal title="Hello" description="lol" />
            <CardHorizontal title="Hello" description="lol" /> */}

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
      </div>
    </div>
  );
}
