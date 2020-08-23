import React from "react";
import PageHeader from "../components/PageHeader";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

function İletişim(language) {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 38.4300824, lng: 27.1359505 }}
      >
        <Marker position={{ lat: 38.4300824, lng: 27.1359505 }} />
      </GoogleMap>
    ))
  );

  let adres1, adres2, adres3, phone1, phone2, p;
  let emails = [
    "sabit.emre@hotmail.com",
    "sabit.limoncuoglu@gmail.com",
    "ilaydamelisalan@gmail.com",
    "korinna66@hotmail.com",
    "efelimoncuoglu@gmail.com",
  ];

  switch (language) {
    case "tr":
      adres1 = "1378 Sokak, No: 4/1";
      adres2 = "Kordon İşhanı Kat 3/308-309";
      adres3 = "Alsancak - Izmir, 35210";
      phone1 = "0 232 464 00 54";
      phone2 = "Pazartesi - Cuma 9:00 ile 18:00 arası";
      p =
        "Sizlere hizmet etmeyi diler, istenildiği zaman tarafımıza ulaşabilmeniz için büromuz bilgilerini aşağıda bilgilerinize sunarız.";
      break;
    case "en":
      adres1 = "1378 Sokak, No: 4/1";
      adres2 = "Kordon İşhanı Kat 3/308-309";
      adres3 = "Alsancak - Izmir, 35210";
      phone1 = "0 232 464 00 54";
      phone2 = "Mon to Fri 9am to 6pm";
      p =
        "We wish to serve you, and provide our office information below so that you can reach us at any time.";
      break;
    case "fr":
      adres1 = "1378 Sokak, No: 4/1";
      adres2 = "Kordon İşhanı Kat 3/308-309";
      adres3 = "Alsancak - Izmir, 35210";
      phone1 = "0 232 464 00 54";
      phone2 = "Mon to Fri 9am to 6pm";
      p = "baguet";
    default:
      adres1 = "1378 Sokak, No: 4/1";
      adres2 = "Kordon İşhanı Kat 3/308-309";
      adres3 = "Alsancak - Izmir, 35210";
      phone1 = "0 232 464 00 54";
      phone2 = "Mon to Fri 9am to 6pm";
      p =
        "Sizlere hizmet etmeyi diler, istenildiği zaman tarafımıza ulaşabilmeniz için büromuz bilgilerini aşağıda bilgilerinize sunarız.";
  }

  return (
    <section>
      {PageHeader("iletişim", language)}
      <div className="sample-text-area">
        <div className="container">
          <h4>{p}</h4>
          <br></br>
          <br></br>
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
                    <h3>{adres1}</h3>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Limoncuo%C4%9Flu+Hukuk+B%C3%BCrosu/@38.4300824,27.1359505,15z/data=!4m5!3m4!1s0x0:0x21ef66952e9149c4!8m2!3d38.4300824!4d27.1359505"
                  >
                    <h3>{adres2}</h3>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Limoncuo%C4%9Flu+Hukuk+B%C3%BCrosu/@38.4300824,27.1359505,15z/data=!4m5!3m4!1s0x0:0x21ef66952e9149c4!8m2!3d38.4300824!4d27.1359505"
                  >
                    <p>{adres3}</p>
                  </a>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet"></i>
                </span>
                <div className="media-body">
                  <a href={"tel:+9" + phone1}>
                    <h3>{phone1}</h3>
                  </a>
                  <p>{phone2}</p>
                </div>
              </div>
            </div>
            <div className="justify-content-between">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email"></i>
                </span>
                <div className="media-body justify-content-between">
                  {emails.map((item, i) => {
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
          <MapWithAMarker
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

export default İletişim;
