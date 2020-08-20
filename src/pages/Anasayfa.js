import React from "react";
import ServiceArea from "../components/ServiceArea";
import AboutInfoArea from "../components/AboutInfoArea";
import InformationArea from "../components/InformationArea";

function Anasayfa(language) {
  return (
    <section>
      <AboutInfoArea language={language} />
      <InformationArea language={language} />
      <ServiceArea language={language} />
    </section>
  );
}

export default Anasayfa;
