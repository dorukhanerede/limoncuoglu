import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import firebase from "firebase";

class Hakkımızda extends React.Component {
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
      .doc("hakkımızda")
      .get()
      .then((snap) => {
        this.setState({
          tr: {
            header: snap.data().başlık,
            p1: snap.data().p1,
            p2: snap.data().p2,
            p3: snap.data().p3,
          },
          en: {
            header: snap.data().başlıkEN,
            p1: snap.data().p1EN,
            p2: snap.data().p2EN,
            p3: snap.data().p3EN,
          },
          fr: {
            header: snap.data().başlıkFR,
            p1: snap.data().p1FR,
            p2: snap.data().p2FR,
            p3: snap.data().p3FR,
          },
        });
      })
      .then(() => this.setState({ loading: false }));
  }

  render() {
    let header = this.state[this.props.language].header,
      p1 = this.state[this.props.language].p1,
      p2 = this.state[this.props.language].p2,
      p3 = this.state[this.props.language].p3;

    return (
      <section>
        {PageHeader("hakkımızda", this.props.language)}
        <section className="sample-text-area">
          <div className="container box_1170">
            {this.state.loading ? (
              <div className="loader"></div>
            ) : (
              <section>
                <h3 className="text-heading">{header}</h3>
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
              </section>
            )}
          </div>
        </section>
      </section>
    );
  }
}

export default Hakkımızda;
