import { TypeAnimation } from "react-type-animation";

export const TextAnimation = () => {
  return (
    <div className="h-32">
      <TypeAnimation
        sequence={[
          "Miło Cię widzieć",
          //    - komfort i przyjemność w sercu Warszawy!
          1000,
          `U nas poczujesz się jak w domu`,
          //  - wynajmij z nami!
          1000,
          "Twoje miejsce w Warszawie",
          //  - z nami zawsze blisko wszystkiego!
          1000,
      
        ]}
        //  Pull request genereator, I'm a pull request hand;es
        speed={30}
        className="min-h-[3.5rem] text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-5xl"
        repeat={Infinity}
        preRenderFirstString
      />
    </div>
  );
};
