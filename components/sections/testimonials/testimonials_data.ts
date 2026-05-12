export interface ITestimonialMeta {
  bodyKey: number;
  author: {
    name: string;
    handle: string;
    initials: string;
    accentColor: string;
  };
}

export const TESTIMONIALS_META: ITestimonialMeta[] = [
  {
    bodyKey: 0,
    author: {
      name: "Magda K.",
      handle: "magda",
      initials: "MK",
      accentColor: "bg-rose-500",
    },
  },
  {
    bodyKey: 1,
    author: {
      name: "Paweł T.",
      handle: "pawel",
      initials: "PT",
      accentColor: "bg-blue-500",
    },
  },
  {
    bodyKey: 2,
    author: {
      name: "Piotr R.",
      handle: "piotr",
      initials: "PR",
      accentColor: "bg-emerald-500",
    },
  },
  {
    bodyKey: 3,
    author: {
      name: "Marzena L.",
      handle: "marzena",
      initials: "ML",
      accentColor: "bg-amber-500",
    },
  },
];
