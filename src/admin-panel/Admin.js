import React, { useState } from "react";
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import withAuth from "./withAuth";
import { useHistory } from "react-router-dom";
import HakkımızdaAdmin from "./HakkımızdaAdmin";
import EkibimizAdmin from "./EkibimizAdmin";
import AnasayfaAdmin from "./AnasayfaAdmin";
import BültenlerAdmin from "./BültenlerAdmin";
import HizmetlerimizAdmin from "./HizmetlerimizAdmin";
import İletişimAdmin from "./İletişimAdmin";
// import { firebase, auth, firestore } from "../firebase/firebase";

function Admin() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const history = useHistory();
  const [main, setMain] = useState("Anasayfa");
  // const [mainPart, setMainPart] = useState(0);

  // const getSom = async () => {
  //   let ref = await firebase
  //     .firestore()
  //     .collection("deneme")
  //     .doc("test")
  //     .get()
  //     .then((s) => setasd(s.data().isim));
  // };

  const handleButtonPress = () => {
    setToggleMenu(!toggleMenu);
  };

  function handleSignOff() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      });
  }

  let mainPart = "loading";

  switch (main) {
    case "Anasayfa":
      mainPart = <AnasayfaAdmin></AnasayfaAdmin>;
      break;
    case "Hakkımızda":
      mainPart = <HakkımızdaAdmin></HakkımızdaAdmin>;
      break;
    case "Ekibimiz":
      // mainPart = <EkibimizAdmin></EkibimizAdmin>;
      mainPart = "Coming Soon";
      break;
    case "Bültenler":
      mainPart = <BültenlerAdmin></BültenlerAdmin>;
      break;
    case "Hizmetlerimiz":
      mainPart = <HizmetlerimizAdmin></HizmetlerimizAdmin>;
      break;
    case "İletişim":
      mainPart = <İletişimAdmin></İletişimAdmin>;
      break;
    default:
      break;
  }

  return (
    <div className={toggleMenu ? "d-flex toggled" : "d-flex"} id="wrapper">
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Limoncuoğlu Admin </div>
        <div className="list-group list-group-flush">
          <a
            onClick={() => setMain("Anasayfa")}
            className={
              main == "Anasayfa"
                ? "list-group-item list-group-item-action bg-light side-active"
                : "list-group-item list-group-item-action bg-light"
            }
          >
            Anasayfa
          </a>
          <a
            onClick={() => setMain("Hakkımızda")}
            className={
              main == "Hakkımızda"
                ? "list-group-item list-group-item-action bg-light side-active"
                : "list-group-item list-group-item-action bg-light"
            }
          >
            Hakkımızda
          </a>
          <a
            onClick={() => setMain("Ekibimiz")}
            className={
              main == "Ekibimiz"
                ? "list-group-item list-group-item-action bg-light side-active"
                : "list-group-item list-group-item-action bg-light"
            }
          >
            Ekibimiz
          </a>
          <a
            onClick={() => setMain("Bültenler")}
            className={
              main == "Bültenler"
                ? "list-group-item list-group-item-action bg-light side-active"
                : "list-group-item list-group-item-action bg-light"
            }
          >
            Bültenler
          </a>
          <a
            onClick={() => setMain("Hizmetlerimiz")}
            className={
              main == "Hizmetlerimiz"
                ? "list-group-item list-group-item-action bg-light side-active"
                : "list-group-item list-group-item-action bg-light"
            }
          >
            Hizmetlerimiz
          </a>
          <a
            onClick={() => setMain("İletişim")}
            className={
              main == "İletişim"
                ? "list-group-item list-group-item-action bg-light side-active"
                : "list-group-item list-group-item-action bg-light"
            }
          >
            İletişim
          </a>
        </div>
      </div>
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button
            className="btn btn-primary"
            id="menu-toggle"
            onClick={handleButtonPress}
          >
            {toggleMenu ? "Menüyü göster" : "Menüyü gizle"}
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <button
                  className="btn btn-warning"
                  onClick={() => handleSignOff()}
                >
                  Çıkış yap <span className="sr-only">(current)</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">{mainPart}</div>
      </div>
    </div>
  );
}

export default withAuth(Admin);
