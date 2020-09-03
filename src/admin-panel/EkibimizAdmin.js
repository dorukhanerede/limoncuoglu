import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";

class EkibimizAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      show: false,
      modalPart: "",
      documents: {},
      images: {},
    };
  }

  componentWillMount() {
    this.getFirestore();
    this.getStorage();
  }

  getFirestore() {
    firebase
      .firestore()
      .collection("ekibimiz")
      .orderBy("sectionData.order", "asc")
      .get()
      .then((collection) => {
        let collections = {};
        collection.docs.forEach((doc) => {
          const data = doc.data();
          collections = { ...collections, [doc.id]: data };
        });
        this.setState({ documents: collections });
      });
  }

  getStorage() {
    const ref = firebase.storage().ref("ekibimiz");
    let images = {};
    ref.listAll().then((result) => {
      result.items.forEach((element) => {
        element
          .getDownloadURL()
          .then((img) => {
            const elementName = element.name.slice(
              0,
              element.name.lastIndexOf(".")
            );
            images = { ...images, [elementName]: img };
          })
          .then(() => {
            this.setState({ images: images, loading: false });
          });
      });
    });
  }

  handleShow = (part) => {
    this.setState({ show: true, modalPart: part });
  };

  handleClose = (isSave, data) => {
    if (isSave) {
      if (this.state.modalPart) {
        let docs = this.state.documents;
        firebase
          .firestore()
          .collection("ekibimiz")
          .add({ sectionData: data })
          .then((docRef) => {
            docs = {
              ...docs,
              [docRef.id]: { sectionData: data },
            };
            this.setState({ documents: docs });
          });
      }
      if (this.state.modalPart == "person") {
        console.log("person");
      }
    }
    this.setState({ show: false });
  };

  handleAddPerson = async (section) => {
    await this.handleShow("person");
  };

  handleAddSection = async () => {
    await this.handleShow("section");
  };

  render() {
    let documentKeys = Object.keys(this.state.documents);
    let documents = this.state.documents;
    let trBaşlık,
      enBaşlık,
      frBaşlık,
      order = documentKeys.length + 1;
    return (
      <div className="team_area">
        <div className="container">
          {this.state.loading ? (
            <div className="loader"></div>
          ) : (
            <div className="border_bottom" style={{ borderBottom: "0px" }}>
              {documentKeys.map((doc, i) => {
                return (
                  <section key={doc} className="card mb-4">
                    <div className="row ">
                      <div className="col-xl-12">
                        <div className="section_title mb-40 text-center card-header">
                          <h3>{documents[doc].sectionData["tr"]}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="row px-2">
                      {Object.keys(documents[doc]).map((data) => {
                        const element = documents[doc][data]["tr"];
                        return data != "sectionData" ? (
                          <div
                            key={data}
                            className="col-xl-2 col-lg-2 col-md-6"
                          >
                            <div className="single_team">
                              <div className="team_thumb">
                                <img
                                  src={this.state.images[data]}
                                  alt={
                                    "image_" +
                                    data.split(" ").join("").toLocaleLowerCase()
                                  }
                                  style={{
                                    objectFit: "cover",
                                    // width: "186px",
                                    maxHeight: "173.469px",
                                    objectPosition: "50% 50%",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        ) : null;
                      })}
                      <div className="col-xl-2 col-lg-2 col-md-6">
                        <div className="single_team">
                          <div className="team_thumb">
                            <a onClick={() => this.handleAddPerson(doc)}>
                              <FontAwesomeIcon
                                icon={faPlusSquare}
                                size="10x"
                                transform="shrink-6"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}
              <div className="text-center">
                <a
                  onClick={() => {
                    this.handleAddSection();
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPlusSquare}
                    size="10x"
                    transform="shrink-6"
                  ></FontAwesomeIcon>
                  <h3>Bölüm ekle</h3>
                </a>
              </div>
            </div>
          )}
        </div>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.modalPart == "section" ? (
                <div>Bölüm Ekle</div>
              ) : (
                <div>person</div>
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.modalPart == "section" ? (
              <form>
                <div className="form-group">
                  <label htmlFor="sectionName">Bölüm Başlığı</label>
                  <div className="row" id="sectionName">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Türkçe isim"
                        onChange={(e) => (trBaşlık = e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="İngilizce isim"
                        onChange={(e) => (enBaşlık = e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fransızca isim"
                        onChange={(e) => (frBaşlık = e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-2">
                    <label htmlFor="orderSection">Bölüm sırası</label>
                    <select
                      className="custom-select "
                      id="orderSection"
                      onChange={(e) => (order = e.target.value)}
                      defaultValue={documentKeys.length + 1}
                    >
                      {documentKeys.map((doc, i) => {
                        return (
                          <option key={"option_" + i} value={i + 1}>
                            {i + 1}
                          </option>
                        );
                      })}
                      <option value={documentKeys.length + 1}>
                        {documentKeys.length + 1}
                      </option>
                    </select>
                  </div>
                </div>
              </form>
            ) : (
              <div>person</div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Kapat
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                let objct;
                if (this.state.modalPart == "section") {
                  if (
                    String(trBaşlık).trim() == "" ||
                    String(enBaşlık).trim() == "" ||
                    String(frBaşlık).trim() == "" ||
                    !trBaşlık ||
                    !enBaşlık ||
                    !frBaşlık
                  ) {
                    alert("İsim alanları boş!");
                    return;
                  }

                  objct = {
                    tr: trBaşlık,
                    en: enBaşlık,
                    fr: frBaşlık,
                    order: order,
                  };
                }

                this.handleClose(true, objct);
              }}
            >
              Kaydet
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EkibimizAdmin;
