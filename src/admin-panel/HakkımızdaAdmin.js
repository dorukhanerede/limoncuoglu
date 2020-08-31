import React, { useState } from "react";
import firebase from "firebase";

class HakkımızdaAdmin extends React.Component {
  // const [başlık, setBaşlık] = useState("");
  // const [p1, setP1] = useState("");
  // const [p2, setP2] = useState("");
  // const [p3, setP3] = useState("");
  // const [isLoading, setLoading] = useState(true);
  // const [newBaşlık, setNewBaşlık] = useState("");
  // const [newp1, setNewp1] = useState("");
  // const [newp2, setNewp2] = useState("");
  // const [newp3, setNewp3] = useState("");
  // const [language, setLanguage] = useState("tr");

  // firebase
  //   .firestore()
  //   .collection("hakkımızda")
  //   .doc("tr")
  //   .get()
  //   .then((doc) => {
  //     setBaşlık(doc.data().başlık);
  //     setP1(doc.data().p1);
  //     setP2(doc.data().p2);
  //     setP3(doc.data().p3);
  //   })
  //   .then(() => setLoading(false));

  // const handleSave = () => {
  //   console.log(p2);
  //   firebase
  //     .firestore()
  //     .collection("hakkımızda")
  //     .doc("tr")
  //     .update({
  //       başlık: başlık,
  //       p1: p1,
  //       p2: p2,
  //       p3: p3,
  //     })
  //     .then(() => console.log("done"));
  // };

  // const handleOnchange = (val) => {
  //   setP2(val);
  // };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      başlık: "",
      p1: "",
      p2: "",
      p3: "",
      başlıkEN: "",
      p1EN: "",
      p2EN: "",
      p3EN: "",
      başlıkFR: "",
      p1FR: "",
      p2FR: "",
      p3FR: "",
      tr: "",
      en: "",
      fr: "",
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("limoncuoglu")
      .doc("hakkımızda")
      .get()
      .then((doc) => {
        // setBaşlık(doc.data().başlık);
        // setP1(doc.data().p1);
        // setP2(doc.data().p2);
        // setP3(doc.data().p3);
        this.setState({
          başlık: doc.data().başlık,
          p1: doc.data().p1,
          p2: doc.data().p2,
          p3: doc.data().p3,
          başlıkEN: doc.data().başlıkEN,
          p1EN: doc.data().p1EN,
          p2EN: doc.data().p2EN,
          p3EN: doc.data().p3EN,
          başlıkFR: doc.data().başlıkFR,
          p1FR: doc.data().p1FR,
          p2FR: doc.data().p2FR,
          p3FR: doc.data().p3FR,
        });
      })
      .then(() => this.setState({ loading: false }));
  }

  handleSave = (
    başlık,
    p1,
    p2,
    p3,
    başlıkEN,
    p1EN,
    p2EN,
    p3EN,
    başlıkFR,
    p1FR,
    p2FR,
    p3FR
  ) => {
    firebase
      .firestore()
      .collection("limoncuoglu")
      .doc("hakkımızda")
      .update({
        başlık: başlık,
        p1: p1,
        p2: p2,
        p3: p3,
        başlıkEN: başlıkEN,
        p1EN: p1EN,
        p2EN: p2EN,
        p3EN: p3EN,
        başlıkFR: başlıkFR,
        p1FR: p1FR,
        p2FR: p2FR,
        p3FR: p3FR,
      })
      .then(() => alert("Kaydedildi"));
  };

  render() {
    let localBaşlık = this.state.başlık,
      localP1 = this.state.p1,
      localP2 = this.state.p2,
      localP3 = this.state.p3;
    let localBaşlıkEN = this.state.başlıkEN,
      localP1EN = this.state.p1EN,
      localP2EN = this.state.p2EN,
      localP3EN = this.state.p3EN;
    let localBaşlıkFR = this.state.başlıkFR,
      localP1FR = this.state.p1FR,
      localP2FR = this.state.p2FR,
      localP3FR = this.state.p3FR;
    return (
      <section>
        {this.state.loading ? (
          <section className="justify-content-center">
            <div className="loader"></div>
          </section>
        ) : (
          <section className="pt-3">
            {/* <div className="col-lg-5">
              <div className="form-group">
                <h2>Başlık</h2>
                <textarea
                  className="form-control"
                  rows="3"
                  defaultValue={this.state.başlık}
                  onChange={(e) => (localBaşlık = e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <h3>Paragraf 1</h3>
                <textarea
                  className="form-control"
                  rows="5"
                  defaultValue={this.state.p1}
                  onChange={(e) => (localP1 = e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <h3>Paragraf 2</h3>
                <textarea
                  className="form-control"
                  rows="10"
                  onChange={(e) => {
                    localP2 = e.target.value;
                  }}
                  defaultValue={this.state.p2}
                />
              </div>
              <div className="form-group">
                <h3>Paragraf 3</h3>
                <textarea
                  className="form-control"
                  rows="10"
                  defaultValue={this.state.p3}
                  onChange={(e) => (localP3 = e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary mr-3"
                  onClick={() =>
                    this.handleSave(localBaşlık, localP1, localP2, localP3)
                  }
                >
                  Kaydet
                </button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="form-group">
                <h2>Başlık</h2>
                <textarea
                  className="form-control"
                  rows="3"
                  defaultValue={this.state.başlık}
                  onChange={(e) => (localBaşlık = e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <h3>Paragraf 1</h3>
                <textarea
                  className="form-control"
                  rows="5"
                  defaultValue={this.state.p1}
                  onChange={(e) => (localP1 = e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <h3>Paragraf 2</h3>
                <textarea
                  className="form-control"
                  rows="10"
                  onChange={(e) => {
                    localP2 = e.target.value;
                  }}
                  defaultValue={this.state.p2}
                />
              </div>
              <div className="form-group">
                <h3>Paragraf 3</h3>
                <textarea
                  className="form-control"
                  rows="10"
                  defaultValue={this.state.p3}
                  onChange={(e) => (localP3 = e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary mr-3"
                  onClick={() =>
                    this.handleSave(localBaşlık, localP1, localP2, localP3)
                  }
                >
                  Kaydet
                </button>
              </div>
            </div> */}
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Türkçe
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div className="form-group">
                      <h2>Başlık</h2>
                      <input
                        className="form-control"
                        defaultValue={this.state.başlık}
                        onChange={(e) => (localBaşlık = e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <h3>Paragraf 1</h3>
                      <textarea
                        className="form-control"
                        rows="5"
                        defaultValue={this.state.p1}
                        onChange={(e) => (localP1 = e.target.value)}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <h3>Paragraf 2</h3>
                      <textarea
                        className="form-control"
                        rows="10"
                        onChange={(e) => {
                          localP2 = e.target.value;
                        }}
                        defaultValue={this.state.p2}
                      />
                    </div>
                    <div className="form-group">
                      <h3>Paragraf 3</h3>
                      <textarea
                        className="form-control"
                        rows="10"
                        defaultValue={this.state.p3}
                        onChange={(e) => (localP3 = e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      İngilizce
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div className="form-group">
                      <h2>Başlık</h2>
                      <input
                        className="form-control"
                        defaultValue={this.state.başlıkEN}
                        onChange={(e) => (localBaşlıkEN = e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <h3>Paragraf 1</h3>
                      <textarea
                        className="form-control"
                        rows="5"
                        defaultValue={this.state.p1EN}
                        onChange={(e) => (localP1EN = e.target.value)}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <h3>Paragraf 2</h3>
                      <textarea
                        className="form-control"
                        rows="10"
                        onChange={(e) => {
                          localP2EN = e.target.value;
                        }}
                        defaultValue={this.state.p2EN}
                      />
                    </div>
                    <div className="form-group">
                      <h3>Paragraf 3</h3>
                      <textarea
                        className="form-control"
                        rows="10"
                        defaultValue={this.state.p3EN}
                        onChange={(e) => (localP3EN = e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Fransızca
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div className="form-group">
                      <h2>Başlık</h2>
                      <input
                        className="form-control"
                        defaultValue={this.state.başlıkFR}
                        onChange={(e) => (localBaşlıkFR = e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <h3>Paragraf 1</h3>
                      <textarea
                        className="form-control"
                        rows="5"
                        defaultValue={this.state.p1FR}
                        onChange={(e) => (localP1FR = e.target.value)}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <h3>Paragraf 2</h3>
                      <textarea
                        className="form-control"
                        rows="10"
                        onChange={(e) => {
                          localP2FR = e.target.value;
                        }}
                        defaultValue={this.state.p2FR}
                      />
                    </div>
                    <div className="form-group">
                      <h3>Paragraf 3</h3>
                      <textarea
                        className="form-control"
                        rows="10"
                        defaultValue={this.state.p3FR}
                        onChange={(e) => (localP3FR = e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4 text-right">
              <button
                type="button"
                className="btn btn-primary mr-3"
                onClick={() =>
                  this.handleSave(
                    localBaşlık,
                    localP1,
                    localP2,
                    localP3,
                    localBaşlıkEN,
                    localP1EN,
                    localP2EN,
                    localP3EN,
                    localBaşlıkFR,
                    localP1FR,
                    localP2FR,
                    localP3FR
                  )
                }
              >
                Kaydet
              </button>
            </div>
          </section>
        )}
      </section>
    );
  }
}

export default HakkımızdaAdmin;
