import React from "react";
import { Link } from "react-router-dom";

class SliderArea extends React.Component {
  componentWillMount() {}
  componentWillUnmount() {}
  render() {
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
                    <h3>LİMONCUOĞLU</h3>
                    <h2>Hukuk Bürosu</h2>
                    <div className="video_service_btn">
                      <Link to="/Contact" className="boxed-btn3">
                        İletişim
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
                    <h3>Hizmetlerimiz</h3>
                    <h2>ve Çalışma Alanlarımız</h2>
                    <div className="video_service_btn">
                      <a href="#" className="boxed-btn3">
                        Daha Fazla
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
                    <h3>Ekibimiz</h3>
                    <div className="video_service_btn">
                      <a href="#" className="boxed-btn3">
                        Daha Fazla
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
                    <h3>Bültenlerimiz</h3>
                    <h2>ve Yazılarımız</h2>
                    <div className="video_service_btn">
                      <a href="#" className="boxed-btn3">
                        Daha Fazla
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
