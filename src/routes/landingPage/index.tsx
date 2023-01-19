import React from "react";
// import Header from "../../components/header";
// import Logo from "../../components/logo";
import Hero from "../../components/hero";
import About from "../../components/aboutSection";
import Facts from "../../components/factsAndFigures";
import Products from "../../components/productSection";
import Services from "../../components/services";
import Gallery from "../../components/gallery";

const index = () => {
  return (
    <>
      <Hero />
      <About />
      <Facts />
      <Products />
      <Services />
      <Gallery />
    </>
  );
};

export default index;
