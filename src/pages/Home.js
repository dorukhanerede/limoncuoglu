import React from "react";
import SliderArea from "../components/SliderArea";
import ServiceArea from "../components/ServiceArea";
import Header from "../components/Header";
import AboutInfoArea from "../components/AboutInfoArea";
import InformationArea from "../components/InformationArea";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  return (
    <section>
      <AboutInfoArea />
      <InformationArea />
      <ServiceArea />
    </section>
  );
}

export default Home;
