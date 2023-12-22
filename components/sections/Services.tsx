import { ServiceCard } from "../cards/ServiceCard";

export const Services = () => {
  return (
    <section className="dark:bg-dark pb-12 lg:pb-[90px] lg:pt-[60px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="text-dark mb-3 pt-6 text-3xl font-bold leading-[1.2] dark:text-white sm:text-4xl md:text-[40px]">
                Co zapewniamy
              </h2>
              <p className="text-body-color dark:text-dark-6 text-base">
                Ponizej znajduje sie lista uslug, które oferujemy w kazdym z
                naszych apartamentow
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Bezpłatne Wi-Fi"
            details="Zapewniamy szybki i nieograniczony dostęp do bezpłatnego Wi-Fi dla wszystkich naszych gości."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img"
                width="52"
                height="60"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>Wifi</title>
                <desc>A solid styled icon from Orion Icon Library.</desc>
                <path
                  data-name="layer2"
                  d="M32 46.766a6.08 6.08 0 0 0-4.481 1.976 1 1 0 0 0 .024 1.375l3.743 3.817a1 1 0 0 0 1.427 0l3.744-3.817a1 1 0 0 0 .024-1.375A6.085 6.085 0 0 0 32 46.766zm-13.573-6.915l3.951 4.515a14.616 14.616 0 0 1 19.243 0l3.952-4.515a20.616 20.616 0 0 0-27.146 0z"
                  fill="#202020"
                ></path>
                <path
                  data-name="layer1"
                  d="M10.168 30.407l3.954 4.514a27.162 27.162 0 0 1 35.759.002l3.952-4.515a33.163 33.163 0 0 0-43.665-.001z"
                  fill="#202020"
                ></path>
                <path
                  data-name="layer1"
                  d="M32 9.766A45.566 45.566 0 0 0 1.98 21.041l3.951 4.515a39.603 39.603 0 0 1 52.136-.001l3.951-4.516A45.567 45.567 0 0 0 32 9.766z"
                  fill="#202020"
                ></path>
              </svg>
            }
          />
          <ServiceCard
            title="Ogrzewanie i klimatyzacja"
            details="Twój komfort jest naszym priorytetem. Nasze apartamenty są wyposażone w zaawansowane systemy ogrzewania i klimatyzacji, abyś zawsze czuł się idealnie w każdej sytuacji."
            icon={
              <svg
                width="52"
                height="60"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clipRule="evenodd"
                  d="M9.89195 14.625C10.9995 10.1252 13.769 7.875 18.1996 7.875C24.8458 7.875 25.6765 12.9375 28.9996 13.7812C31.2151 14.3439 33.1535 13.5002 34.815 11.25C33.7075 15.7498 30.9379 18 26.5073 18C19.8611 18 19.0304 12.9375 15.7073 12.0938C13.4918 11.5311 11.5535 12.3748 9.89195 14.625ZM1.58423 24.75C2.69174 20.2502 5.46132 18 9.89195 18C16.5381 18 17.3689 23.0625 20.692 23.9062C22.9075 24.4689 24.8458 23.6252 26.5073 21.375C25.3998 25.8748 22.6302 28.125 18.1996 28.125C11.5535 28.125 10.7227 23.0625 7.39963 22.2188C5.18405 21.6561 3.24576 22.4998 1.58423 24.75Z"
                  fill="black"
                />
              </svg>
            }
          />
          <ServiceCard
            title="Wyposażenie kuchenne"
            details="W naszych apartamentach znajdziesz kompleksowe wyposażenie kuchenne, które umożliwi Ci samodzielne przygotowywanie posiłków."
            icon={
              <svg
                width="52"
                height="60"
                viewBox="0 0 36 36"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2063 1.9126H5.0625C3.15 1.9126 1.575 3.4876 1.575 5.4001V12.5438C1.575 14.4563 3.15 16.0313 5.0625 16.0313H12.2063C14.1188 16.0313 15.6938 14.4563 15.6938 12.5438V5.45635C15.75 3.4876 14.175 1.9126 12.2063 1.9126ZM13.2188 12.6001C13.2188 13.1626 12.7688 13.6126 12.2063 13.6126H5.0625C4.5 13.6126 4.05 13.1626 4.05 12.6001V5.45635C4.05 4.89385 4.5 4.44385 5.0625 4.44385H12.2063C12.7688 4.44385 13.2188 4.89385 13.2188 5.45635V12.6001Z"
                  fill="black"
                />
                <path
                  d="M30.9375 1.9126H23.7937C21.8812 1.9126 20.3062 3.4876 20.3062 5.4001V12.5438C20.3062 14.4563 21.8812 16.0313 23.7937 16.0313H30.9375C32.85 16.0313 34.425 14.4563 34.425 12.5438V5.45635C34.425 3.4876 32.85 1.9126 30.9375 1.9126ZM31.95 12.6001C31.95 13.1626 31.5 13.6126 30.9375 13.6126H23.7937C23.2312 13.6126 22.7812 13.1626 22.7812 12.6001V5.45635C22.7812 4.89385 23.2312 4.44385 23.7937 4.44385H30.9375C31.5 4.44385 31.95 4.89385 31.95 5.45635V12.6001Z"
                  fill="black"
                />
                <path
                  d="M12.2063 19.8564H5.0625C3.15 19.8564 1.575 21.4314 1.575 23.3439V30.4877C1.575 32.4002 3.15 33.9752 5.0625 33.9752H12.2063C14.1188 33.9752 15.6938 32.4002 15.6938 30.4877V23.4002C15.75 21.4314 14.175 19.8564 12.2063 19.8564ZM13.2188 30.5439C13.2188 31.1064 12.7688 31.5564 12.2063 31.5564H5.0625C4.5 31.5564 4.05 31.1064 4.05 30.5439V23.4002C4.05 22.8377 4.5 22.3877 5.0625 22.3877H12.2063C12.7688 22.3877 13.2188 22.8377 13.2188 23.4002V30.5439Z"
                  fill="black"
                />
                <path
                  d="M30.9375 19.8564H23.7937C21.8812 19.8564 20.3062 21.4314 20.3062 23.3439V30.4877C20.3062 32.4002 21.8812 33.9752 23.7937 33.9752H30.9375C32.85 33.9752 34.425 32.4002 34.425 30.4877V23.4002C34.425 21.4314 32.85 19.8564 30.9375 19.8564ZM31.95 30.5439C31.95 31.1064 31.5 31.5564 30.9375 31.5564H23.7937C23.2312 31.5564 22.7812 31.1064 22.7812 30.5439V23.4002C22.7812 22.8377 23.2312 22.3877 23.7937 22.3877H30.9375C31.5 22.3877 31.95 22.8377 31.95 23.4002V30.5439Z"
                  fill="black"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};
