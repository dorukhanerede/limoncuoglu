import React from "react";

class AboutInfoArea extends React.Component {
  render() {
    return(
    <div className="about_info_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="about_text">
              <h3>Neden Limoncuğlu Hukuk</h3>
              <p>
                1969 yılından beri faaliyet veren büromuz, sektördeki kurumsallaşma akımına kapılmayarak, 
                kurumsal hukuk bürolarından çok daha az avukat ile en az onlar kadar hızlı ve verimli çalışmasıyla, 
                müvekkileriyle son derece samimi ve bir o kadar da ilgili avukatlık ve danışmanlık hizmeti vermektedir.
              </p>
              <a href="#" className="boxed-btn3">
                About Us
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about_thumb">
              <img src="img/service/about.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default AboutInfoArea;