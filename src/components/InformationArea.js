import React from "react";

class InformationArea extends React.Component {
  render() {
    let header;
    let p1;

    switch (this.props.language) {
      case "tr":
        header = "Sorularınız için";
        p1 = "Bizimle iletişime geçin!";
        break;

      case "en":
        header = "For Any Information";
        p1 = "Call us!";
        break;

      case "fr":
        header = "fransızca";
        p1 = "fransızca";

        break;
    }

    return (
      <div className="Information_area overlay">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-8">
              <div className="info_text text-center">
                <h3>{header}</h3>
                <p>{p1}</p>
                <a className="boxed-btn3" href="tel:+902324640054">
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
