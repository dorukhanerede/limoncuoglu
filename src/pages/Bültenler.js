import React from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function Bültenler(language) {
  return <section>{PageHeader("bültenler", language)}</section>;
}

export default Bültenler;
