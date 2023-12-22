import { ImageSide } from "./ImageSide";
import { ImageSideTilt } from "./ImageSideTilt.jsx";
import { TextInfoSide } from "./TextInfoSide";

export default function Content() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* <ImageSide /> */}
          <ImageSideTilt />
          <TextInfoSide />
        </div>
      </div>
    </section>
  );
}
