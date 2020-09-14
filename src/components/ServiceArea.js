import React from "react";
import firebase from "firebase";

class ServiceArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      services: {},
      icons: {}
    };
  }

  componentWillMount() {

    firebase
      .firestore()
      .collection("hizmetlerimiz").orderBy("serviceData.order", "asc").get().then(col => {
        let services = {};
        col.docs.forEach(doc => {
          services = { ...services, [doc.id]: doc.data() }
        })
        this.setState({ services: services });
      });

      this.getStorage();
  }


  getStorage() {
    const ref = firebase.storage().ref("hizmetlerimiz");
    let icons = {};
    ref.listAll().then((result) => {
      result.items.forEach((element) => {
        element
          .getDownloadURL()
          .then((img) => {
            const elementName = element.name;
            icons = { ...icons, [elementName]: img };
          })
          .then(() => {
            this.setState({ icons: icons, loading: false });
          })
          .catch((err) => console.log(err));
      });
      if (result.items.length == 0) this.setState({ loading: false });
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
        header = "Nos Services";
        break;
      default:
        header = "Hizmetlerimiz";
    }

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

          {this.state.loading ? <div className="loader"></div> : <div className="row justify-content-center">
            {Object.keys(this.state.services).map((doc, e) => {
              return (
                <div key={"service_" + e} className="col-xl-3 col-md-6 col-lg-3">
                  <div className="single_service text-center">
                    <div className={"service_icon service_icon_" + (e % 4)}>
                      <img src={this.state.icons[this.state.services[doc].serviceData.icon]} alt={"service_image_" + e}height="39.626px" style={{ filter: "brightness(0) invert(1)" }} />
                    </div>
                    <h3>{this.state.services[doc][this.props.language].header}</h3>
                    <p>{this.state.services[doc][this.props.language].info}</p>
                  </div>
                </div>
              );
            })}
          </div>}
        </div>
      </div>
    );
  }
}

export default ServiceArea;
