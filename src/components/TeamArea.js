import React from "react";

function TeamArea() {
  return (
    <div className="team_area">
      <div className="container">
        <div className="border_bottom">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title mb-40 text-center">
                <h3>Kurucumuz</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single_team">
                <div className="team_thumb">
                  <img src="img/team/3.png" alt="" />
                </div>
                <div className="team_info text-center">
                  <h3>İbrahim Önder Limoncuoğlu</h3>
                  <p>Avukat</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title mb-40 text-center">
                <h3>Kadromuz</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single_team">
                <div className="team_thumb">
                  <img src="img/team/3.png" alt="" />
                </div>
                <div className="team_info text-center">
                  <h3>Sabit Emre Limoncuoğlu</h3>
                  <p>Avukat</p>
                  <section>
                    <p className="text-left">
                      1993 yılında 9 Eylül Üniversitesi Hukuk Fakültesi’nden
                      mezun olmuştur. 1995 yılından itibaren Limoncuoğlu Hukuk
                      Bürosu’nda fiili olarak avukatlık yapmaktadır.{" "}
                    </p>
                  </section>

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
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single_team">
                <div className="team_thumb">
                  <img src="img/team/2.png" alt="" />
                </div>
                <div className="team_info text-center">
                  <h3>İlayda Melis Alan</h3>
                  <p>Avukat</p>
                  <section className="text-left">
                    <p>
                      <section className="text-left">
                        <p>
                          2018 yılında İzmir Ekonomi Üniversitesi Hukuk
                          Fakültesi’nden mezun olmuştur. 2019 yılından itibaren
                          büromuzda fiilen avukatlık yapmaktadır.
                        </p>
                      </section>
                    </p>
                  </section>
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
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single_team">
                <div className="team_thumb">
                  <img src="img/team/efe2.jpeg" alt="" />
                </div>
                <div className="team_info text-center">
                  <h3>Yiğit Efe Limoncuoğlu</h3>
                  <p>Stajyer Avukat</p>
                  <section className="text-left">
                    <p>
                      2019 yılında İstanbul Bilgi Üniversitesi Hukuk
                      Fakültesinden mezun olmuştur. Öğrenimini İstanbul’da
                      tamamladıktan sonra avukatlık stajı için İzmir’e
                      dönmüştür. Avukatlık stajı ile beraber İzmir Ekonomi
                      Üniversitesi Hukuk Fakültesi Özel Hukuk Yüksek Lisans
                      Programına kaydolarak yüksek lisans eğitimi almaktadır.
                    </p>
                  </section>
                  <br></br>
                  <p>efelimcuoglu@gmail.com</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamArea;
