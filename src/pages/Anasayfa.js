import React from "react";
import ServiceArea from "../components/ServiceArea";
import AboutInfoArea from "../components/AboutInfoArea";
import InformationArea from "../components/InformationArea";
import SliderArea from "../components/SliderArea";

function Anasayfa(language) {
  return (
    <section>
      <SliderArea language={language} />
      <AboutInfoArea language={language} />
      <InformationArea language={language} />
      <ServiceArea language={language} />
    </section>
  );
}

export default Anasayfa;
