import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Gallery = () => {
  const data = [
    {
      link: "https://www.namerah.com/wp-content/uploads/1000lit-7.5HP-D-min.png",
      image:
        "https://img.freepik.com/icones-gratuites/photo_318-224222.jpg?t=st=1692184185~exp=1692184785~hmac=9574e270a720386c1cab75eb8df937f8a31e20fbfcfebe219b3c4dd3705bc975",
      comment: `1`,
    },
    {
      link: "https://www.namerah.com/wp-content/uploads/1000lit-7.5HP-D-min.png",
      image:
        "https://img.freepik.com/icones-gratuites/photo_318-224222.jpg?t=st=1692184185~exp=1692184785~hmac=9574e270a720386c1cab75eb8df937f8a31e20fbfcfebe219b3c4dd3705bc975",
      comment: `2`,
    },
    // {
    //   link: "https://www.namerah.com/wp-content/uploads/1000lit-7.5HP-D-min.png",
    //   image:
    //     "https://img.freepik.com/icones-gratuites/photo_318-224222.jpg?t=st=1692184185~exp=1692184785~hmac=9574e270a720386c1cab75eb8df937f8a31e20fbfcfebe219b3c4dd3705bc975",
    //   comment: `3`,
    // },
    // {
    //   link: "https://www.namerah.com/wp-content/uploads/1000lit-7.5HP-D-min.png",
    //   image:
    //     "https://img.freepik.com/icones-gratuites/photo_318-224222.jpg?t=st=1692184185~exp=1692184785~hmac=9574e270a720386c1cab75eb8df937f8a31e20fbfcfebe219b3c4dd3705bc975",
    //   comment: `4`,
    // },
    // {
    //   link: "https://www.namerah.com/wp-content/uploads/1000lit-7.5HP-D-min.png",
    //   image:
    //     "https://img.freepik.com/icones-gratuites/photo_318-224222.jpg?t=st=1692184185~exp=1692184785~hmac=9574e270a720386c1cab75eb8df937f8a31e20fbfcfebe219b3c4dd3705bc975",
    //   comment: `5`,
    // },
    // {
    //   link: "https://www.namerah.com/wp-content/uploads/1000lit-7.5HP-D-min.png",
    //   image:
    //     "https://img.freepik.com/icones-gratuites/photo_318-224222.jpg?t=st=1692184185~exp=1692184785~hmac=9574e270a720386c1cab75eb8df937f8a31e20fbfcfebe219b3c4dd3705bc975",
    //   comment: `6`,
    // },
  ];
  return (
    <>
      <div className="">
        <div className="container mx-auto p-6">
          <div className="py-2">
            <h1 className="text-center text-4xl">My App</h1>
          </div>
          <div className="mb-12 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {data.map((x, idx) => {
              return (
                <>
                  <article
                    key={idx}
                    className="group mb-6  transform cursor-pointer rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <Link
                      href={x.link}
                      className="absolute bottom-0 left-0 right-0 top-0 opacity-0"
                    />
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 w-full transform rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                      <Link
                        className="absolute left-0 top-0 flex h-full  w-full transform items-center justify-center rounded-2xl bg-purple-500 bg-opacity-80 text-xl text-white opacity-0 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                        href={x.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visite Website
                      </Link>
                    </div>
                    <h3 className="text-xl font-medium leading-8">
                      <Link
                        href="https://animeflyx.vercel.app/"
                        className="relative block transition-colors duration-200 group-hover:text-purple-500"
                      >
                        {/* <span dangerouslySetInnerHTML={{ __html: x.comment }} /> */}
                      </Link>
                    </h3>
                  </article>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
