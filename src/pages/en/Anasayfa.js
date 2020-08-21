import React from "react";
import ServiceArea from "../../components/ServiceArea";
import AboutInfoArea from "../../components/AboutInfoArea";
import InformationArea from "../../components/InformationArea";

class Anasayfa extends React.Component {
  // const script = document.createElement("script");
  // script.id = "myScript";
  // script.src = "js/jquery.slicknav.min.js";
  // script.async = true;

  // document.body.appendChild(script);

  // console.log(script);
  render() {
    return (
      <section>
        <AboutInfoArea language={this.props.language} />
        <InformationArea language={this.props.language} />
        <ServiceArea language={this.props.language} />
      </section>
    );
  }
}

export default Anasayfa;
