/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 shadow-lg lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="m-12 flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <Image
              className="h-12 self-start"
              src="/logo.png"
              alt=""
              width={60}
              height={20}
            />
            <blockquote className="text-lg leading-8 text-gray-900">
              <p>
                "Bardzo przytulne i wygodne mieszkanie, Pani Bożena jest bardzo
                komunikatywną osobą. Dobra lokalizacja mieszkania - m2, tramwaj
                i autobusy pod ręką. Polecam to miejsce. Przy następnej wizycie
                w stolicy również je wybiorę :)"
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
              <Image
                className="h-14 w-14 rounded-full bg-gray-50"
                src="/logo.png"
                alt=""
                width={60}
                height={20}
              />
              <div className="text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <div className="mt-1 text-gray-500">CEO of Tuple</div>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
