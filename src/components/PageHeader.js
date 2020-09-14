import React from "react";

function PageHeader(headerName, language) {
  let headerText;
  switch (headerName) {
    case "bültenler":
      if (language == "tr") headerText = headerName;
      else if (language == "en") headerText = "News";
      else headerText = "Les Bulletins";
      break;
    case "ekibimiz":
      if (language == "tr") headerText = headerName;
      else if (language == "en") headerText = "Our Team";
      else headerText = "Notre équipe";
      break;
    case "hakkımızda":
      if (language == "tr") headerText = headerName;
      else if (language == "en") headerText = "About";
      else headerText = "à Propos de Nous";
      break;
    case "hizmetlerimiz":
      if (language == "tr") headerText = headerName;
      else if (language == "en") headerText = "Services";
      else headerText = "Nos Services";
      break;
    case "iletişim":
      if (language == "tr") headerText = headerName;
      else if (language == "en") headerText = "Contact";
      else headerText = "Contact";
      break;
    default:
      headerText = window.location.pathname;
      break;
  }

  return (
    <div className="bradcam_area bradcam_bg_1">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="bradcam_text">
              <h3>{headerText}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
