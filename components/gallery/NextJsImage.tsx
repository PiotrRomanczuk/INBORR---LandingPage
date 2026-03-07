import Image from "next/image";
import type { SlideImage, ContainerRect } from "yet-another-react-lightbox";
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from "yet-another-react-lightbox";

interface NextJsSlideImage extends SlideImage {
  blurDataURL?: string;
}

export default function NextJsImage({
  slide,
  rect,
}: {
  slide: NextJsSlideImage;
  rect: ContainerRect;
}) {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isImageSlide(slide)) return undefined;

  // Use provided dimensions or fall back to 4:3 ratio based on container
  const slideWidth = slide.width ?? rect.width;
  const slideHeight = slide.height ?? Math.round(rect.width * 0.75);

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slideHeight) * slideWidth),
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slideWidth) * slideHeight),
      )
    : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt={slide.alt ?? "Zdjecie apartamentu"}
        src={slide.src}
        loading="lazy"
        draggable={false}
        placeholder={slide.blurDataURL ? "blur" : undefined}
        sizes={`${Math.ceil((width / rect.width) * 100)}vw`}
        style={{ objectFit: cover ? "cover" : "contain" }}
      />
    </div>
  );
}
