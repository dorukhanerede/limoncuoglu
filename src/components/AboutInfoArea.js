import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

class AboutInfoArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      tr: "",
      en: "",
      fr: "",
    };
  }

  componentWillMount() {
    firebase
      .firestore()
      .collection("limoncuoglu")
      .doc("anasayfa")
      .get()
      .then((snap) => {
        this.setState({
          tr: {
            header: snap.data().başlık,
            p1: snap.data().p1,
            p2: snap.data().p2,
          },
          en: {
            header: snap.data().başlıkEN,
            p1: snap.data().p1EN,
            p2: snap.data().p2EN,
          },
          fr: {
            header: snap.data().başlıkFR,
            p1: snap.data().p1FR,
            p2: snap.data().p2FR,
          },
        });
      })
      .then(() => this.setState({ loading: false }));
  }

  render() {
    let header = this.state[this.props.language].header;
    let p1 = this.state[this.props.language].p1;
    let p2 = this.state[this.props.language].p2;
    let devamıGörButon;

    switch (this.props.language) {
      case "tr":
        devamıGörButon = "Devamını Gör";
        break;

      case "en":
        devamıGörButon = "See more";
        break;

      case "fr":
        devamıGörButon = "Voir Plus";
        break;
    }

    return (
      <div className="about_info_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-6">
              {this.state.loading ? (
                <div className="loader"></div>
              ) : (
                <div className="about_text">
                  <h3>{header}</h3>
                  <p>{p1}</p>
                  <p>{p2}</p>
                  <Link to="/Hakkımızda" className="boxed-btn3">
                    {devamıGörButon} <i className="ti-angle-right" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutInfoArea;
