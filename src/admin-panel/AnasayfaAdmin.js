import React from "react";
import firebase from "firebase";

class AnasayfaAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      başlık: "",
      p1: "",
      p2: "",
      başlıkEN: "",
      p1EN: "",
      p2EN: "",
      başlıkFR: "",
      p1FR: "",
      p2FR: "",
    };
  }
  componentDidMount() {
    firebase
      .firestore()
      .collection("limoncuoglu")
      .doc("anasayfa")
      .get()
      .then((doc) => {
        this.setState({
          başlık: doc.data().başlık,
          p1: doc.data().p1,
          p2: doc.data().p2,
          başlıkEN: doc.data().başlıkEN,
          p1EN: doc.data().p1EN,
          p2EN: doc.data().p2EN,
          başlıkFR: doc.data().başlıkFR,
          p1FR: doc.data().p1FR,
          p2FR: doc.data().p2FR,
        });
      })
      .then(() => this.setState({ loading: false }));
  }

  handleSave = (başlık, p1, p2, başlıkEN, p1EN, p2EN, başlıkFR, p1FR, p2FR) => {
    firebase
      .firestore()
      .collection("limoncuoglu")
      .doc("anasayfa")
      .update({
        başlık: başlık,
        p1: p1,
        p2: p2,
        başlıkEN: başlıkEN,
        p1EN: p1EN,
        p2EN: p2EN,
        başlıkFR: başlıkFR,
        p1FR: p1FR,
        p2FR: p2FR,
      })
      .then(() => alert("Kaydedildi"));
  };

  render() {
    let localBaşlık = this.state.başlık,
      localP1 = this.state.p1,
      localP2 = this.state.p2;
    let localBaşlıkEN = this.state.başlıkEN,
      localP1EN = this.state.p1EN,
      localP2EN = this.state.p2EN;
    let localBaşlıkFR = this.state.başlıkFR,
      localP1FR = this.state.p1FR,
      localP2FR = this.state.p2FR;
    return (
      <section>
        {this.state.loading ? (
          <section className="justify-content-center">
            <div className="loader"></div>
          </section>
        ) : (
          <section className="pt-3">
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
                    localBaşlıkEN,
                    localP1EN,
                    localP2EN,
                    localBaşlıkFR,
                    localP1FR,
                    localP2FR
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

export default AnasayfaAdmin;
