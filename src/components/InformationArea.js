import React from "react";

class InformationArea extends React.Component {
  render() {
    return (
      <div className="Information_area overlay">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-8">
              <div className="info_text text-center">
                <h3>Sorularınız için</h3>
                <p>Bizimle iletişime geçin!</p>
                <a className="boxed-btn3" href="#">
                  0232 464 00 54
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InformationArea;
