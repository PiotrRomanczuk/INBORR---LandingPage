import type { ITestimonialMeta } from "./testimonials_data";

export function Testimonial({
  testimonial,
  body,
}: {
  testimonial: ITestimonialMeta;
  body: string;
}) {
  return (
    <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
      <figure className="rounded-2xl bg-card p-8 text-sm/6">
        <blockquote className="text-card-foreground">
          <p>{body}</p>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-x-4">
          <div
            className={`flex size-10 items-center justify-center rounded-full text-sm font-semibold text-white ${testimonial.author.accentColor}`}
            aria-hidden="true"
          >
            {testimonial.author.initials}
          </div>
          <div>
            <div className="font-semibold text-card-foreground">
              {testimonial.author.name}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
