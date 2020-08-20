import React from "react";
import { Link } from "react-router-dom";

class AboutInfoArea extends React.Component {
  render() {
    //vars
    let header;
    let p1;
    let p2;
    let devamıGörButon;

    switch (this.props.language) {
      case "tr":
        header = "Limoncuoğlu Hukuk Bürosu";
        p1 = (
          <p>
            Limoncuoğlu Hukuk Bürosu'na hoşgeldiniz. 1969 yılından beri faaliyet
            veren büromuz, sektördeki kurumsallaşma akımına kapılmayarak,
            kurumsal hukuk bürolarından çok daha az avukat ile en az onlar kadar
            hızlı ve verimli çalışmasıyla, müvekkilleriyle son derece samimi ve
            bir o kadar da ilgili avukatlık ve danışmanlık hizmeti vermektedir.
          </p>
        );
        p2 = (
          <p>
            Hedefimiz, kurucumuz Av. İbrahim Önder Limoncuoğlu'nun 1969 yılından
            günümüze kadar taşıyıp koruduğu hukuk misyonunu ve vizyonunu
            sürdürerek, müvekkillerimize en yüksek verim ve kalitede hizmet
            vermektir.
          </p>
        );
        devamıGörButon = "Devamını Gör";
        break;

      case "en":
        header = "Limoncuoğlu Law Office";
        p1 = (
          <p>
            Welcome to Limoncuoğlu Law Firm. Our office, which has been
            operating since 1969, does not get caught up in the
            institutionalization trend in the sector, and provides extremely
            sincere and relevant attorneyship and consultancy services with its
            clients, with much less lawyers than corporate law firms, and at
            least as fast and efficient as them.
          </p>
        );
        p2 = (
          <p>
            Our target is our founder Av. To serve our clients with the highest
            efficiency and quality by maintaining the legal mission and vision
            that İbrahim Önder Limoncuoğlu has carried and protected since 1969.
          </p>
        );
        devamıGörButon = "See more";
        break;

      case "fr":
        header = "Limoncuoğlu Hukuk Bürosu";
        p1 = <p>Fransızca</p>;
        p2 = <p>Fransızca</p>;
        devamıGörButon = "Le Baguet";
        break;
    }

    return (
      <div className="about_info_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-6">
              <div className="about_text">
                <h3>{header}</h3>
                {p1}
                {p2}
                <Link to="/Hakkımızda" className="boxed-btn3">
                  {devamıGörButon} <i className="ti-angle-right" />
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
