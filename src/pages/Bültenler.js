import React from "react";
import PageHeader from "../components/PageHeader";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import InformationArea from "../components/InformationArea";

class Bültenler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      bültenler: [],
    };
  }
  async componentWillMount() {
    await firebase
      .storage()
      .ref("bültenler")
      .listAll()
      .then((result) => {
        result.items.forEach((element) => {
          let pdf;
          element.getDownloadURL().then((url) => {
            pdf = url;
            this.setState({
              bültenler: [
                ...this.state.bültenler,
                { bültenName: element.name, url: pdf },
              ],
            });
          });
        });
      });
  }

  render() {
    return (
      <section>
        {PageHeader("bültenler", this.props.language)}
        <div className="service_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section_title text-center mb-50">
                  <h3>Bültenlerimiz...</h3>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              {this.state.bültenler.map((e, index) => {
                return (
                  <div key={index} className="col-xl-3 col-md-6 col-lg-3">
                    <div className="single_service text-center">
                      <a href={e.url} target="_blank">
                        <div className="service_icon">
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            size="5x"
                            color="#F40F02"
                          ></FontAwesomeIcon>
                        </div>
                        <h3>{e.bültenName}</h3>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <InformationArea language={this.props.language}></InformationArea>
      </section>
    );
  }
}
export default Bültenler;
