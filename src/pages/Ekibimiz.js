import React from "react";
import PageHeader from "../components/PageHeader";
import TeamArea from "../components/TeamArea";

function Ekibimiz(language) {
  return (
    <section>
      {PageHeader("ekibimiz", language)}
      <TeamArea language={language} />
    </section>
  );
}

export default Ekibimiz;
