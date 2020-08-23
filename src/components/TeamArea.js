import React from "react";

class TeamArea extends React.Component {
  render() {
    let header;

    let founders = [
      {
        tr: {
          name: "İbrahim Önder Limoncuoğlu",
          title: "Avukat",
          email: "mail@mail.com",
        },
        en: {
          name: "İbrahim Önder Limoncuoğlu",
          title: "Attorney",
          email: "mail@mail.com",
        },
        fr: {
          name: "İbrahim Önder Limoncuoğlu",
          title: "FR Avukat",
          email: "mail@mail.com",
        },
      },
    ];

    let foundingSectionTitle;
    let attorneySectionTitle;
    let partnerSectionTitle;

    let partners = [
      {
        tr: {
          name: "Sabit Emre Limoncuoğlu",
          title: "Avukat",
          email: "mail@mail.com",
          info:
            "1993 yılında 9 Eylül Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. 1995 yılından itibaren Limoncuoğlu Hukuk Bürosu’nda fiili olarak avukatlık yapmaktadır.",
          img: "img/team/3.png",
        },
        en: {
          name: "Sabit Emre Limoncuoğlu",
          title: "Attorney",
          email: "mail@mail.com",
          info:
            "He graduated from 9 Eylül University Faculty of Law in 1993. Since 1995, he has been working as a lawyer at Limoncuoğlu Law Firm.",
          img: "img/team/3.png",
        },
        fr: {
          name: "Sabit Emre Limoncuoğlu",
          title: "FR Avukat",
          email: "mail@mail.com",
          info:
            "Il est diplômé de la 9 faculté de droit de l'Université d'Eylül en 1993. Depuis 1995, il travaille comme avocat au cabinet d'avocats Limoncuoğlu.",
          img: "img/team/3.png",
        },
      },
    ];

    let attorneys = [
      {
        tr: {
          name: "İlayda Melis Alan",
          title: "Avukat",
          email: "mail@mail.com",
          info:
            "2018 yılında İzmir Ekonomi Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. 2019 yılından itibaren büromuzda fiilen avukatlık yapmaktadır.",
          img: "img/team/2.png",
        },
        en: {
          name: "İlayda Melis Alan",
          title: "Attorney",
          email: "mail@mail.com",
          info:
            "She graduated from Izmir University of Economics Faculty of Law in 2018. Since 2019, he has been practicing lawyer in our office.",
          img: "img/team/2.png",
        },
        fr: {
          name: "İlayda Melis Alan",
          title: "FR Avukat",
          email: "mail@mail.com",
          info:
            "Il est diplômé de la faculté de droit de l'Université d'économie d'Izmir en 2018. Depuis 2019, il travaille comme avocat dans notre cabinet.",
          img: "img/team/2.png",
        },
      },
      {
        tr: {
          name: "Yiğit Efe Limoncuoğlu",
          title: "Stajyer Avukat",
          email: "efelimcuoglu@gmail.com",
          info:
            "2019 yılında İstanbul Bilgi Üniversitesi Hukuk Fakültesinden mezun olmuştur. Öğrenimini İstanbul’da tamamladıktan sonra avukatlık stajı için İzmir’e dönmüştür. Avukatlık stajı ile beraber İzmir Ekonomi Üniversitesi Hukuk Fakültesi Özel Hukuk Yüksek Lisans Programına kaydolarak yüksek lisans eğitimi almaktadır.",
          img: "img/team/efe2.jpeg",
        },
        en: {
          name: "Yiğit Efe Limoncuoğlu",
          title: "Intern Attorney",
          email: "efelimcuoglu@gmail.com",
          info:
            "He graduated from Istanbul Bilgi University Faculty of Law in 2019. After completing his education in Istanbul, he returned to Izmir for his lawyer internship. Along with his law internship, he enrolled in Izmir University of Economics Faculty of Law, Private Law Graduate Program and received his master's degree.",
          img: "img/team/efe2.jpeg",
        },
        fr: {
          name: "Yiğit Efe Limoncuoğlu",
          title: "FR Stajyer Avukat",
          email: "efelimcuoglu@gmail.com",
          info:
            "Elle est diplômée de la faculté de droit de l'Université Bilgi d'Istanbul en 2019. Après avoir terminé ses études à Istanbul, il est retourné à Izmir pour son stage d'avocat. Parallèlement à son stage en droit, il s'est inscrit à la faculté de droit de l'Université d'économie d'Izmir, au programme d'études supérieures en droit privé et a obtenu sa maîtrise.",
          img: "img/team/efe2.jpeg",
        },
      },
    ];

    switch (this.props.language) {
      case "tr":
        header = "Sorularınız için";
        foundingSectionTitle = "Kurucumuz";
        attorneySectionTitle = "Kadromuz";
        partnerSectionTitle = "Partner";
        break;

      case "en":
        header = "For Any Information";
        foundingSectionTitle = "Founder";
        attorneySectionTitle = "Our Team";
        partnerSectionTitle = "Partner";
        break;

      case "fr":
        header = "fransızca";
        foundingSectionTitle = "FR Kurucumuz";
        attorneySectionTitle = "FR Kadromuz";
        partnerSectionTitle = "FR Partner";
        break;
    }

    return (
      <div className="team_area">
        <div className="container">
          <div className="border_bottom">
            <div className="row">
              <div className="col-xl-12">
                <div className="section_title mb-40 text-center">
                  <h3>{foundingSectionTitle}</h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-around">
              {founders.map((item, i) => {
                return (
                  <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single_team">
                      <div className="team_thumb">
                        <img src="img/team/3.png" alt="" />
                      </div>
                      <div className="team_info text-center">
                        <h3>{item[this.props.language].name}</h3>
                        <p>{item[this.props.language].title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="section_title mb-40 text-center">
                  <h3>{partnerSectionTitle}</h3>
                </div>
              </div>
            </div>

            <div className="row justify-content-around">
              {partners.map((item, i) => {
                let element = item[this.props.language];
                return (
                  <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single_team">
                      <div className="team_thumb">
                        <img src={element.img} alt="" />
                      </div>
                      <div className="team_info text-center">
                        <h3>{element.name}</h3>
                        <p>{element.title}</p>
                        <p className="text-left">{element.info}</p>
                        <br></br>
                        <p>{element.email}</p>
                        <div className="social_link">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="section_title mb-40 text-center">
                  <h3>{attorneySectionTitle}</h3>
                </div>
              </div>
            </div>

            <div className="row justify-content-around">
              {attorneys.map((item, i) => {
                let element = item[this.props.language];
                return (
                  <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single_team">
                      <div className="team_thumb">
                        <img src={element.img} alt="" />
                      </div>
                      <div className="team_info text-center">
                        <h3>{element.name}</h3>
                        <p>{element.title}</p>
                        <p className="text-left">{element.info}</p>
                        <br></br>
                        <p>{element.email}</p>
                        <div className="social_link">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamArea;
