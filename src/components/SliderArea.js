import React from "react";

class SliderArea extends React.Component {
  render() {
    return (
      <div className="slider_area">
        <div className="slider_active owl-carousel">
          <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text ">
                    <h3>
                      Limoncuoğlu <br />
                      Hukuk Bürosu
                  </h3>
                    <div className="video_service_btn">
                      <a href="#" className="boxed-btn3">
                        İletişim
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
                    <h3>
                      Çalışma Alanlarımız
                  </h3>
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
                    <h3>
                      Ekibimiz
                  </h3>
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
                    <h3>
                      Bültenlerimiz ve Yazılarımız <br />
                  </h3>
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
      </div>);
  }
}

export default SliderArea;