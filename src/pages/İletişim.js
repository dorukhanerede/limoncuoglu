import React from "react";
import PageHeader from "../components/PageHeader";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

function İletişim(language) {
  const MyMapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 38.4300824, lng: 27.1359505 }}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: 38.4300824, lng: 27.1359505 }} />
        )}
      </GoogleMap>
    ))
  );

  let adres1, adres2, adres3, phone1, phone2, mail1, mail2, p;

  switch (language) {
    case "tr":
      adres1 = "1378 Sokak, No: 4/1";
      adres2 = "Kordon İşhanı Kat 3/308-309";
      adres3 = "Alsancak - Izmir, 35210";
      phone1 = "+90 232 464 00 54";
      phone2 = "Pazartesi - Cuma 9:00 ile 18:00 arası";
      mail1 = "efelimoncuoglu@gmail.com";
      mail2 = "Mail ile istediğiniz zaman ulaşabilirsiniz";
      p =
        "Sizlere hizmet etmeyi diler, istenildiği zaman tarafımıza ulaşabilmeniz için büromuz bilgilerini aşağıda bilgilerinize sunarız.";
      break;
    case "en":
      adres1 = "1378 Sokak, No: 4/1";
      adres2 = "Kordon İşhanı Kat 3/308-309";
      adres3 = "Alsancak - Izmir, 35210";
      phone1 = "+90 232 464 00 54";
      phone2 = "Mon to Fri 9am to 6pm";
      mail1 = "efelimoncuoglu@gmail.com";
      mail2 = "Send us your query anytime!";
      p =
        "We wish to serve you, and provide our office information below so that you can reach us at any time.";
      break;
    case "fr":
      adres1 = "1378 Sokak, No: 4/1";
      adres2 = "Kordon İşhanı Kat 3/308-309";
      adres3 = "Alsancak - Izmir, 35210";
      phone1 = "+90 232 464 00 54";
      phone2 = "Mon to Fri 9am to 6pm";
      mail1 = "efelimoncuoglu@gmail.com";
      mail2 = "Send us your query anytime!";
      p = "baguet";
    default:
      adres1 = "1378 Sokak, No: 4/1";
      adres2 = "Kordon İşhanı Kat 3/308-309";
      adres3 = "Alsancak - Izmir, 35210";
      phone1 = "+90 232 464 00 54";
      phone2 = "Mon to Fri 9am to 6pm";
      mail1 = "efelimoncuoglu@gmail.com";
      mail2 = "Mail ile istediğiniz zaman ulaşabilirsiniz";
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
          <div className="row justify-content-between">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-home"></i>
              </span>
              <div className="media-body">
                <h3>{adres1}</h3>
                <h3>{adres2}</h3>
                <p>{adres3}</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-tablet"></i>
              </span>
              <div className="media-body">
                <h3>{phone1}</h3>
                <p>{phone2}</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-email"></i>
              </span>
              <div className="media-body">
                <h3>{mail1}</h3>
                <p>{mail2}</p>
              </div>
            </div>
          </div>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          ></MyMapComponent>
        </div>
      </div>
    </section>
  );
}

export default İletişim;
