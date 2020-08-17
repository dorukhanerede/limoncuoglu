import React from "react";

class Footer extends React.Component {
  render() {
    return <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <div className="footer_logo">
                  <a href="#">
                    <img src="img/footer_logo.png" alt="" />
                  </a>
                </div>
                <p>
                  <a href="#">conbusi@support.com</a> <br />
                  +10 873 672 6782 <br />
                  600/D, Green road, NewYork
                </p>
                <div className="socail_links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ti-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter-alt" />
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
            <div className="col-xl-2 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Services</h3>
                <ul>
                  <li>
                    <a href="#">Marketing &amp; SEO</a>
                  </li>
                  <li>
                    <a href="#"> Startup</a>
                  </li>
                  <li>
                    <a href="#">Finance solution</a>
                  </li>
                  <li>
                    <a href="#">Food</a>
                  </li>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-lg-2">
              <div className="footer_widget">
                <h3 className="footer_title">Useful Links</h3>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#"> Contact</a>
                  </li>
                  <li>
                    <a href="#">Appointment</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer_widget">
                <h3 className="footer_title">Subscribe</h3>
                <form action="#" className="newsletter_form">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit">Subscribe</button>
                </form>
                <p className="newsletter_text">
                  Esteem spirit temper too say adieus who direct esteem esteems
                  luckily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right_text">
        <div className="container">
          <div className="footer_border" />
          <div className="row">
            <div className="col-xl-12">
              <p className="copy_right text-center">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
  }
}

export default Footer;