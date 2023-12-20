import { ContactData } from "./ContactData";
import { ContactForm } from "./ContactForm";

export default function Home() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <ContactData />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
