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
      personPhoto: "",
      addedSection: "",
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
      .onSnapshot((collection) => {
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
      if (this.state.modalPart == "section") {
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
            let docsKeys = Object.keys(docs);
            if (data.order != docsKeys.length) {
              docsKeys.forEach((element) => {
                if (
                  docs[element]["sectionData"]["order"] >= data.order &&
                  element != docRef.id
                ) {
                  firebase
                    .firestore()
                    .collection("ekibimiz")
                    .doc(element)
                    .update({
                      "sectionData.order":
                        docs[element]["sectionData"]["order"] + 1,
                    });
                  // docs[element]["sectionData"]["order"] =
                  //   docs[element]["sectionData"]["order"] + 1;
                }
              });
            }
            // this.setState({ documents: docs });
          });
      }
      if (this.state.modalPart == "person") {
        firebase
          .firestore()
          .collection("ekibimiz")
          .doc(this.state.addedSection)
          .set(
            {
              [data.personName]: data.data,
            },
            { merge: true }
          );
        const ref = firebase.storage().ref();
        ref
          .child("ekibimiz/" + this.state.personPhoto.name)
          .put(this.state.personPhoto);
      }
    }
    this.setState({ show: false });
  };

  handleAddPerson = async (docId) => {
    this.setState({ addedSection: docId });
    await this.handleShow("person");
  };

  handleAddSection = async () => {
    await this.handleShow("section");
  };

  confirmDelete = () => {
    let isValid = false;
    if (window.confirm("Silmek istediğine emin misin?")) isValid = true;
    return isValid;
  };

  handleDeleteSection = async (docId) => {
    const counter = this.state.documents[docId]["sectionData"]["order"];
    let docKeys = Object.keys(this.state.documents);
    const docs = this.state.documents;
    await firebase.firestore().collection("ekibimiz").doc(docId).delete();

    docKeys.forEach((element) => {
      if (docs[element]["sectionData"]["order"] > counter) {
        console.log(element);
        firebase
          .firestore()
          .collection("ekibimiz")
          .doc(element)
          .update({
            "sectionData.order": docs[element]["sectionData"]["order"] - 1,
          });
      }
    });
  };

  render() {
    let documentKeys = Object.keys(this.state.documents);
    let documents = this.state.documents;
    let trBaşlık,
      enBaşlık,
      frBaşlık,
      order = documentKeys.length + 1;
    let personName,
      personTrTitle,
      personEnTitle,
      personFrTitle,
      personTrInfo,
      personEnInfo,
      personFrInfo,
      personEmail,
      personPhoto;
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
                          <div
                            className="position-absolute"
                            style={{ right: "5%", top: "20%" }}
                          >
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                if (this.confirmDelete())
                                  this.handleDeleteSection(doc);
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faTrashAlt}
                                className="mx-1"
                                size="2x"
                              />
                            </a>
                          </div>
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
          dialogClassName={
            this.state.modalPart == "section" ? "modal-50w" : "modal-80w"
          }
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.modalPart == "section" ? (
                <div>Bölüm Ekle</div>
              ) : (
                <div>Kişi ekle</div>
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.modalPart == "section" ? (
              <form>
                <div className="form-group">
                  <label htmlFor="sectionName">Bölüm Başlığı</label>
                  <div className="form-row" id="sectionName">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Türkçe isim"
                        defaultValue={trBaşlık}
                        onChange={(e) => (trBaşlık = e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="İngilizce isim"
                        defaultValue={enBaşlık}
                        onChange={(e) => (enBaşlık = e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fransızca isim"
                        defaultValue={frBaşlık}
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
                      defaultValue={order}
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
              <form>
                <div className="form-group justify-content-center">
                  <label htmlFor="personPhoto">Fotoğraf</label>
                  <img
                    src={
                      !this.state.personPhoto
                        ? "img/team/blank.png"
                        : URL.createObjectURL(this.state.personPhoto)
                    }
                    width="362px"
                    height="400px"
                    style={{
                      maxWidth: "362px",
                      maxHeight: "400px",
                      objectFit: "cover",
                    }}
                  ></img>
                  <input
                    id="personPhoto"
                    type="file"
                    accept="image/*"
                    className="col-md-5"
                    onChange={(e) => {
                      personPhoto = e.target.files[0];
                      this.setState({ personPhoto: personPhoto });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="personName">İsim</label>
                  <input
                    id="personName"
                    type="text"
                    className="form-control col-md-5"
                    placeholder="İsim"
                    defaultValue={personName}
                    onChange={(e) => (personName = e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="personTitle">Ünvan</label>
                  <div id="personTitle" className="form-row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Türkçe Ünvan"
                        defaultValue={personTrTitle}
                        onChange={(e) => (personTrTitle = e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="İngilizce Ünvan"
                        defaultValue={personEnTitle}
                        onChange={(e) => (personEnTitle = e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fransızca Ünvan"
                        defaultValue={personFrTitle}
                        onChange={(e) => (personFrTitle = e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group ">
                  <label htmlFor="personInfo">Açıklama</label>
                  <div id="personInfo" className="form-row">
                    <div className="col">
                      <textarea
                        className="form-control"
                        placeholder="Türkçe Açıklama"
                        rows="4"
                        defaultValue={personTrInfo}
                        onChange={(e) => (personTrInfo = e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <textarea
                        className="form-control"
                        placeholder="İngilizce Açıklama"
                        rows="4"
                        defaultValue={personEnInfo}
                        onChange={(e) => (personEnInfo = e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <textarea
                        className="form-control"
                        placeholder="Fransızca Açıklama"
                        rows="4"
                        defaultValue={personFrInfo}
                        onChange={(e) => (personFrInfo = e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="personEmail">Email</label>
                  <input
                    id="personEmail"
                    type="text"
                    className="form-control col-md-6"
                    placeholder="Email"
                    defaultValue={personEmail}
                    onChange={(e) => (personEmail = e.target.value)}
                  />
                </div>
              </form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose(false)}>
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
                    order: parseInt(order),
                  };
                }
                if (this.state.modalPart == "person") {
                  if (
                    String(personName).trim() == "" ||
                    String(personTrTitle).trim() == "" ||
                    String(personTrInfo).trim() == "" ||
                    String(personEnTitle).trim() == "" ||
                    String(personEnInfo).trim() == "" ||
                    String(personFrTitle).trim() == "" ||
                    String(personFrInfo).trim() == "" ||
                    String(personEmail).trim() == "" ||
                    !personName ||
                    !personTrTitle ||
                    !personTrInfo ||
                    !personEnTitle ||
                    !personEnInfo ||
                    !personFrTitle ||
                    !personFrInfo ||
                    !personEmail ||
                    !this.state.personPhoto
                  ) {
                    alert("Bazı alanlar boş!");
                    return;
                  }
                  objct = {
                    personName: personName,
                    data: {
                      email: personEmail,
                      tr: { info: personTrInfo, title: personTrTitle },
                      en: { info: personEnInfo, title: personEnTitle },
                      fr: { info: personFrInfo, title: personFrTitle },
                    },
                    personPhoto: personPhoto,
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
