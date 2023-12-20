import { SingleCard } from "../cards/SingleCard";

export const Information = () => {
  return (
    <>
      <section className="bg-gray-2 dark:bg-dark pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid grid-cols-2 gap-8">
            <SingleCard
              image="/pokoj1.jpg"
              CardTitle="50+ Best creative website themes & templates"
              titleHref="/#"
              //   btnHref="/#"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              //   Button="View Details"
            />
            <SingleCard
              image="/pokoj1.jpg"
              CardTitle="Creative Card Component designs graphic elements"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              //   Button="View Details"
            />
            <SingleCard
              image="/pokoj1.jpg"
              CardTitle="The ultimate UX and UI guide to card design"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              //   Button="View Details"
            />
            <SingleCard
              image="/pokoj1.jpg"
              CardTitle="The ultimate UX and UI guide to card design"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              // Button="View Details"
            />
          </div>
        </div>
      </section>
    </>
  );
};
