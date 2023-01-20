import React from "react";
// import Header from "../../components/header";
// import Logo from "../../components/logo";
import Hero from "../../components/hero";
import About from "../../components/aboutSection";
import Facts from "../../components/factsAndFigures";
import Products from "../../components/productSection";
import Services from "../../components/services";
import Gallery from "../../components/gallery";
import Team from "../../components/teamSection";
import Review from "../../components/reviewSection";

const index = () => {
  return (
    <>
      <Hero />
      <About />
      <Facts />
      <Products />
      <Services />
      <Gallery />
      <Team />
      <Review />
    </>
  );
};

export default index;
