import { TypeAnimation } from "react-type-animation";

export const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Twój dom na chwilę",
        //    - komfort i przyjemność w sercu Warszawy!
        1000,
        "Warszawska chwila luksusu",
        //  - wynajmij z nami!
        1000,
        "Twoje miejsce w Warszawie",
        //  - z nami zawsze blisko wszystkiego!
        1000,
        "Z nami zawsze z poczuciem domu",
        //  - !
        1000,
        "Wynajmij komfort w Warszawie",
        //  - z nami każdy moment staje się wyjątkowy!
        1000,
      ]}
      //  Pull request genereator, I'm a pull request hand;es
      speed={30}
      className="min-h-[3.5rem] text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-5xl"
      repeat={Infinity}
      preRenderFirstString
    />
  );
};

