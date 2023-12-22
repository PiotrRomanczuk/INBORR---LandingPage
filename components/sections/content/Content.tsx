import { ImageSide } from "./ImageSide";
import { TextInfoSide } from "./TextInfoSide";

export default function Content() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <ImageSide />
          <TextInfoSide />
        </div>
      </div>
    </div>
  );
}
