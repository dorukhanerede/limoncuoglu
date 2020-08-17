import React from "react";
import SliderArea from "../components/SliderArea";
import ServiceArea from "../components/ServiceArea";
import Header from "../components/Header";
import AboutInfoArea from "../components/AboutInfoArea";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <SliderArea />
        {/* <ServiceArea /> */}
        <AboutInfoArea />
      </div>
    );
  }
}

export default Home;
