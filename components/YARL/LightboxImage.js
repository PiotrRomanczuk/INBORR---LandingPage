"use client";

import React from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "./NextJsImage";

import image1 from "public/chlodna/1.jpeg";
import image2 from "public/chlodna/2.jpeg";
import image3 from "public/chlodna/3.jpeg";

export const LightboxImage = () => {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={[image1, image2, image3]}
      render={{ slide: NextJsImage }}
    />
  );
};
