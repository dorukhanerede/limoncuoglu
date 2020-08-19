import React from "react";
import { Link } from "react-router-dom";

class AboutInfoArea extends React.Component {
  render() {
    return (
      <div className="about_info_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-6">
              <div className="about_text">
                <h3>Limoncuğlu Hukuk Bürosu</h3>
                <p>
                  Limoncuoğlu Hukuk Bürosu olarak 1969 yılından beri, İzmir ve
                  çevresi ağırlıklı olmak üzere hukuki danışmanlık hizmeti
                  vermekteyiz.
                </p>
                <p>
                  İzmir’in önde gelen hukuk bürolarından biri olarak, başta
                  Ticaret ve Şirketler Hukuku olmak üzere, Avrupa Topluluğu
                  Mevzuatı, SPK Mevzuatı, Toplu Sözleşme ve Çalışma hayatı ile
                  ilgili mevzuat ve Banka ile ilgili mevzuat konusunda bilgi,
                  deneyime sahip olup, Uluslararası Ticaret Odası Türkiye
                  Temsilciliği’nin bu konudaki çalışmalarına İzmir Ticaret Odası
                  adına katılmış bulunmaktayız.
                </p>
                {/* <p>
                  1969 yılından beri faaliyet veren büromuz, sektördeki
                  kurumsallaşma akımına kapılmayarak, kurumsal hukuk
                  bürolarından çok daha az avukat ile en az onlar kadar hızlı ve
                  verimli çalışmasıyla, müvekkileriyle son derece samimi ve bir
                  o kadar da ilgili avukatlık ve danışmanlık hizmeti
                  vermektedir.
                </p> */}
                {/* <p>
                  Hedefimiz, kurucumuz Av. İbrahim Önder Limoncuoğlu'nun 1969
                  yılından günümüze kadar taşıyıp koruduğu hukuk misyonunu ve
                  vizyonunu sürdürerek, müvekkillerimize en yüksek verim ve
                  kalitede hizmet vermektir.
                </p> */}
                <Link to="/About" className="boxed-btn3">
                  Devamını Gör <i className="ti-angle-right" />
                </Link>
              </div>
            </div>
            {/* <div className="col-xl-6 col-lg-6">
            <div className="about_thumb">
              <img src="img/service/about.png" alt="" />
            </div>
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutInfoArea;
