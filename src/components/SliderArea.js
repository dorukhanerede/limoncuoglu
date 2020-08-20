import React from "react";
import { Link } from "react-router-dom";

class SliderArea extends React.Component {
  render() {
    let header1, header2, header3, header4;
    let subheader1, subheader2, subheader3, subheader4;
    let buton1, buton2, buton3, buton4;

    switch (this.props.language) {
      case "tr":
        header1 = "LİMONCUOĞLU";
        subheader1 = "Hukuk Bürosu";
        buton1 = "İletişim";

        header2 = "Hizmetlerimiz";
        subheader2 = "ve Çalışma Alanlarımız";
        buton2 = "Daha Fazla";

        header3 = "Ekibimiz";
        buton3 = "Daha Fazla";

        header4 = "Bültenlerimiz";
        subheader4 = "ve Yazılarımız";
        buton4 = "Daha Fazla";
        break;

      case "en":
        header1 = "LİMONCUOĞLU";
        subheader1 = "Law Office";
        buton1 = "Contact";

        header2 = "Our Services";
        // subheader2 = "ve Çalışma Alanlarımız";
        buton2 = "Learn More";

        header3 = "Our Team";
        buton3 = "Learn More";

        header4 = "News";
        subheader4 = "and Blogs";
        buton4 = "Learn More";
        break;

      case "fr":
        header1 = "fransızca";
        subheader1 = "fransızca";
        buton1 = "İletişim";

        header2 = "Hizmetlerimiz";
        subheader2 = "ve Çalışma Alanlarımız";
        buton2 = "Daha Fazla";

        header3 = "Ekibimiz";
        buton3 = "Daha Fazla";

        header4 = "Bültenlerimiz";
        subheader4 = "ve Yazılarımız";
        buton4 = "Daha Fazla";
        break;
    }

    return (
      <div
        className="slider_area"
        // style={{ display: this.props.isHome ? "" : "none" }}
      >
        <div className="slider_active owl-carousel">
          <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text ">
                    <h3>{header1}</h3>
                    <h2>{subheader1}</h2>
                    <div className="video_service_btn">
                      <Link to="/Contact" className="boxed-btn3">
                        {buton1}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider  d-flex align-items-center slider_bg_2 overlay2">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text ">
                    <h3>{header2}</h3>
                    <h2>{subheader2}</h2>
                    <div className="video_service_btn">
                      <a href="#" className="boxed-btn3">
                        {buton2}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text ">
                    <h3>{header3}</h3>
                    <div className="video_service_btn">
                      <a href="#" className="boxed-btn3">
                        {buton3}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider  d-flex align-items-center slider_bg_2 overlay2">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text ">
                    <h3>{header4}</h3>
                    <h2>{subheader4}</h2>
                    <div className="video_service_btn">
                      <a href="#" className="boxed-btn3">
                        {buton4}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderArea;
