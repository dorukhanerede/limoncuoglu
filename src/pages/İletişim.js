import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import firebase from "firebase";
import { render } from "@testing-library/react";

class İletişim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      emails: [],
      adres1: "",
      adres2: "",
      telNo: "",
      çalışmaSaatleri: "",
    };
  }

  async componentWillMount() {
    firebase
      .firestore()
      .collection("limoncuoglu")
      .doc("iletişim")
      .get()
      .then((snap) => {
        let emailstr = snap.data().emails;
        emailstr = emailstr.trim();
        let emailArr = emailstr.split(",");
        this.setState({
          emails: emailArr,
          adres1: snap.data().adres1,
          adres2: snap.data().adres2,
          telNo: snap.data().telNo,
          çalışmaSaatleri: {
            tr: snap.data().çalışmaSaatleri,
            en: snap.data().çalışmaSaatleriEn,
            fr: snap.data().çalışmaSaatleriFr,
          },
        });
      })
      .then(() => this.setState({ loading: false }));
  }

  MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 38.4300824, lng: 27.1359505 }}
      >
        <Marker position={{ lat: 38.4300824, lng: 27.1359505 }} />
      </GoogleMap>
    ))
  );

  render() {
    let p;
    switch (this.props.language) {
      case "tr":
        p =
          "Sizlere hizmet etmeyi diler, istenildiği zaman tarafımıza ulaşabilmeniz için büromuz bilgilerini aşağıda bilgilerinize sunarız.";
        break;
      case "en":
        p =
          "We wish to serve you, and provide our office information below so that you can reach us at any time.";
        break;
      case "fr":
        p =
          "Notre informations de contact est sous dessous. Vous pouvez nous atteindre en cas de besoin. Nous esperons de vous aider.";
        break;
      default:
        p =
          "Sizlere hizmet etmeyi diler, istenildiği zaman tarafımıza ulaşabilmeniz için büromuz bilgilerini aşağıda bilgilerinize sunarız.";
    }
    return (
      <section>
        {PageHeader("iletişim", this.props.language)}
        <div className="sample-text-area">
          <div className="container">
            <h4>{p}</h4>
            <br></br>
            <br></br>
            {this.state.loading ? (
              <section className="justify-content-center">
                <div className="loader"></div>
              </section>
            ) : (
              <div className="row justify-content-around">
                <div className="justify-content-between">
                  <div className="media contact-info">
                    <span className="contact-info__icon">
                      <i className="ti-home"></i>
                    </span>
                    <div className="media-body">
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/place/Limoncuo%C4%9Flu+Hukuk+B%C3%BCrosu/@38.4300824,27.1359505,15z/data=!4m5!3m4!1s0x0:0x21ef66952e9149c4!8m2!3d38.4300824!4d27.1359505"
                      >
                        <h3>{this.state.adres1}</h3>
                      </a>
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/place/Limoncuo%C4%9Flu+Hukuk+B%C3%BCrosu/@38.4300824,27.1359505,15z/data=!4m5!3m4!1s0x0:0x21ef66952e9149c4!8m2!3d38.4300824!4d27.1359505"
                      >
                        <p>{this.state.adres2}</p>
                      </a>
                    </div>
                  </div>
                  <div className="media contact-info">
                    <span className="contact-info__icon">
                      <i className="ti-tablet"></i>
                    </span>
                    <div className="media-body">
                      <a href={"tel:+9" + this.state.telNo}>
                        <h3>{this.state.telNo}</h3>
                      </a>
                      <p>{this.state.çalışmaSaatleri[this.props.language]}</p>
                    </div>
                  </div>
                </div>
                <div className="justify-content-between">
                  <div className="media contact-info">
                    <span className="contact-info__icon">
                      <i className="ti-email"></i>
                    </span>
                    <div className="media-body justify-content-between">
                      {this.state.emails.map((item, i) => {
                        return (
                          <section key={"mail_" + i}>
                            <a href={"mailto:" + item}>
                              <h3>{item}</h3>
                            </a>
                            <br></br>
                          </section>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <this.MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkZ42F6QYoXbQ28liLyDr_Z1MHsBDaqHA&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `500px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default İletişim;
