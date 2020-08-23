import React from "react";
import PageHeader from "../components/PageHeader";
import ServiceArea from "../components/ServiceArea";
import InformationArea from "../components/InformationArea";

function Hizmetlerimiz(language) {
  return (
    <section>
      {PageHeader("hizmetlerimiz", language)}
      <ServiceArea language={language}></ServiceArea>
      <InformationArea language={language}></InformationArea>
    </section>
  );
}

export default Hizmetlerimiz;
