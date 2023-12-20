import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export const ContactData = () => {
  return (
    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
      <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"></div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
        Skontaktuj się z nami
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Masz pytania, sugestie lub chcesz się z nami skontaktować? Wypełnij
        formularz, a my postaramy się odpowiedzieć najszybciej, jak to możliwe.
      </p>
      <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
        {/* <div className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Address</span>
            <BuildingOffice2Icon
              className="h-7 w-6 text-gray-400"
              aria-hidden="true"
            />
          </dt>
          <dd>
            Ul.Ludwiki 4 lok.34,
            <br />
            Warszawa, 01-226
          </dd>
        </div> */}
        <div className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Telephone</span>
            <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
          </dt>
          <dd>
            <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
              +48 608 555 713
            </a>
          </dd>
        </div>
        <div className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Email</span>
            <EnvelopeIcon
              className="h-7 w-6 text-gray-400"
              aria-hidden="true"
            />
          </dt>
          <dd>
            <a className="hover:text-gray-900" href="mailto:hello@example.com">
              kontakt@inborr.com
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
};
