import React from "react";
import { FaBedPulse, FaWifi } from "react-icons/fa";
import { MdCoffee } from "react-icons/md";
import CardHorizontal from "../reusable/CardHorizontal";
import { IconContext } from "react-icons";

export const Information = () => {
  const handleClick = () => {
    console.log("first");
  };

  TODO: "export a card component";

  return (
    <div className="flex w-full flex-row items-center justify-center gap-12 bg-black">
      <div className="flex flex-col rounded-md bg-white p-4 text-black shadow-md">
        {/* Uncomment the following block if you have imageSrc and title variables */}
        {/* <img src={imageSrc} alt={title} className="h-8 rounded-md" /> */}
        <div className="border-bla flex h-24 justify-center border">
          {/* Use IconContext.Provider for styling icons */}
          {/* <IconContext.Provider value={{ color: "blue", className: "h-12" }}> */}
          <FaWifi />
          {/* </IconContext.Provider> */}
        </div>
        <div className="m-12">
          <h3 className="text-xl font-semibold">Szybkie wi-fi</h3>
        </div>
      </div>
      {/* Remove semicolons */}
      {/* <FaBedPulse />
      <MdCoffee /> */}
    </div>
  );
};
