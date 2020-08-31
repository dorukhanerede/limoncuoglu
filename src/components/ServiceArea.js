import React from "react";
import firebase from "firebase";

class ServiceArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      tr: "",
      en: "",
      fr: "",
    };
  }

  async componentWillMount() {
    const ref = await firebase.firestore().collection("hizmetlerimiz").get();

    ref.docs.forEach((doc) => {
      const docId = doc.id;
      const data = doc.data();
      let tempData = [];
      const size = Object.keys(data).length;

      Object.keys(data).forEach((el) => {
        const id = el;
        const elementData = data[id];
        tempData.push({
          [id]: elementData,
        });
      });
      // for (let index = 1; index <= size; index++) {
      //   tempData.push({

      // header: data["header" + index],
      // info: data["info" + index],
      // });
      // }
      this.setState({
        [docId]: tempData,
      });
    });
  }

  render() {
    let header;

    switch (this.props.language) {
      case "tr":
        header = "Hizmetlerimiz";
        break;
      case "en":
        header = "Services";
        break;
      case "fr":
        header = "fransızca";
        break;
      default:
        header = "Hizmetlerimiz";
    }

    let givenData = this.state[this.props.language];

    return (
      <div className="service_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-50">
                <h3>{header}</h3>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {Object.keys(givenData).map((e) => {
              const id = Object.keys(givenData[e]);
              const info = givenData[e][id];
              return (
                <div key={e} className="col-xl-3 col-md-6 col-lg-3">
                  <div className="single_service text-center">
                    <div className={"service_icon service_icon_" + (e % 4)}>
                      <img src="img/svg_icon/1.svg" alt="" />
                    </div>
                    <h3>{id.toString()} </h3>
                    <p>{info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceArea;
