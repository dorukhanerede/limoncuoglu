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
      isEdit: false,
      editDocId: "",
      editPersonId: "",
      personPhoto: "",
      personName: "",
      personTrTitle: "",
      personTrInfo: "",
      personEnTitle: "",
      personEnInfo: "",
      personFrTitle: "",
      personFrInfo: "",
      personEmail: "",
      addedSection: "",
      trBaşlık: "",
      enBaşlık: "",
      frBaşlık: "",
      order: "",
    };
  }

  clearState() {
    this.setState({
      personPhoto: "",
      personName: "",
      personTrTitle: "",
      personTrInfo: "",
      personEnTitle: "",
      personEnInfo: "",
      personFrTitle: "",
      personFrInfo: "",
      personEmail: "",
      trBaşlık: "",
      enBaşlık: "",
      frBaşlık: "",
      isEdit: false,
      editDocId: "",
      order: Object.keys(this.state.documents).length + 1,
    });
  }

  componentDidMount() {
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
        this.setState({
          documents: collections,
          order: Object.keys(collections).length + 1,
        });
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
            const elementName = element.name;
            images = { ...images, [elementName]: img };
          })
          .then(() => {
            this.setState({ images: images, loading: false });
          })
          .catch((err) => console.log(err));
      });
      if (result.items.length == 0) this.setState({ loading: false });
    });
  }

  handleShow = (part, docId, personId) => {
    this.clearState();
    this.setState({ show: true, modalPart: part });
    if (docId && !personId) {
      let trBaşlık = this.state.documents[docId].sectionData.tr;
      let enBaşlık = this.state.documents[docId].sectionData.en;
      let frBaşlık = this.state.documents[docId].sectionData.fr;
      let order = this.state.documents[docId]["sectionData"]["order"];
      this.setState({
        trBaşlık: trBaşlık,
        enBaşlık: enBaşlık,
        frBaşlık: frBaşlık,
        order: order,
        isEdit: true,
        editDocId: docId,
      });
    }
    if (docId && personId) {
      let personPhoto = this.state.images[
        this.state.documents[docId][personId].imageName
      ];
      let personName = personId;
      let personEmail = this.state.documents[docId][personId].email;
      let personTrTitle = this.state.documents[docId][personId].tr.title;
      let personTrInfo = this.state.documents[docId][personId].tr.info;
      let personEnTitle = this.state.documents[docId][personId].en.title;
      let personEnInfo = this.state.documents[docId][personId].en.info;
      let personFrTitle = this.state.documents[docId][personId].fr.title;
      let personFrInfo = this.state.documents[docId][personId].fr.info;
      this.setState({
        editPersonId: personId,
        personPhoto: personPhoto,
        personName: personName,
        personEmail: personEmail,
        personTrTitle: personTrTitle,
        personTrInfo: personTrInfo,
        personEnTitle: personEnTitle,
        personEnInfo: personEnInfo,
        personFrTitle: personFrTitle,
        personFrInfo: personFrInfo,
        editDocId: docId,
        isEdit: true,
      });
    }
  };

  handleClose = (isSave, data) => {
    if (isSave && !this.state.isEdit) {
      if (this.state.modalPart == "section") {
        let docs = this.state.documents;
        firebase
          .firestore()
          .collection("ekibimiz")
          .add({
            sectionData: data.data,
          })
          .then((docRef) => {
            docs = {
              ...docs,
              [docRef.id]: {
                sectionData: data.data,
              },
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
                }
              });
            }
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
        let photo = this.state.personPhoto;
        ref
          .child("ekibimiz/" + data.data.imageName)
          .put(photo)
          .then(() =>
            this.setState({
              personPhoto: "",
              images: {
                ...this.state.images,
                [data.data.imageName]: URL.createObjectURL(photo),
              },
            })
          );
      }
      this.clearState();
    }
    //Edit Section
    if (isSave && this.state.isEdit) {
      const docs = this.state.documents;
      const docKeys = Object.keys(docs);
      if (this.state.modalPart == "section") {
        const orderChanged =
          this.state.documents[data.docId].sectionData.order !=
          this.state.order;
        const orderChangedButReverse =
          this.state.documents[data.docId].sectionData.order < this.state.order;

        firebase
          .firestore()
          .collection("ekibimiz")
          .doc(data.docId)
          .update({
            "sectionData.tr": data.data.tr,
            "sectionData.en": data.data.en,
            "sectionData.fr": data.data.fr,
            "sectionData.order": data.data.order,
          })
          .then(() => {
            if (orderChanged && !orderChangedButReverse) {
              docKeys.forEach((element) => {
                if (
                  docs[element]["sectionData"]["order"] >= data.data.order &&
                  element != data.docId &&
                  docs[element]["sectionData"]["order"] <= data.data.order + 1
                ) {
                  firebase
                    .firestore()
                    .collection("ekibimiz")
                    .doc(element)
                    .update({
                      "sectionData.order": firebase.firestore.FieldValue.increment(
                        1
                      ),
                    });
                }
              });
            }
            if (orderChanged && orderChangedButReverse) {
              docKeys.forEach((element) => {
                if (
                  docs[element]["sectionData"]["order"] <= data.data.order &&
                  element != data.docId &&
                  docs[element]["sectionData"]["order"] >= data.data.order - 1
                ) {
                  firebase
                    .firestore()
                    .collection("ekibimiz")
                    .doc(element)
                    .update({
                      "sectionData.order": firebase.firestore.FieldValue.increment(
                        -1
                      ),
                    });
                }
              });
            }
          });
      }
      //Edit Person
      if (this.state.modalPart == "person") {
        const photoChanged = typeof this.state.personPhoto != "string";
        const personIdChanged =
          this.state.editPersonId != this.state.personName;
        const prevImageName =
          docs[data.docId][this.state.editPersonId].imageName;
        if (!personIdChanged) {
          firebase
            .firestore()
            .collection("ekibimiz")
            .doc(data.docId)
            .update({
              [data.personName + ".email"]: data.data.email,
              [data.personName + ".tr.title"]: data.data.tr.title,
              [data.personName + ".tr.info"]: data.data.tr.info,
              [data.personName + ".en.title"]: data.data.en.title,
              [data.personName + ".en.info"]: data.data.en.info,
              [data.personName + ".fr.title"]: data.data.fr.title,
              [data.personName + ".fr.info"]: data.data.fr.info,
              [data.personName + ".imageName"]: photoChanged
                ? data.data.imageName
                : this.state.documents[data.docId][data.personName].imageName,
            })
            .then(() => {
              if (photoChanged) {
                const ref = firebase.storage().ref();
                ref
                  .child("ekibimiz/" + prevImageName)
                  .delete()
                  .then(() => {
                    ref
                      .child("ekibimiz/" + data.data.imageName)
                      .put(data.personPhoto)
                      .then(() => {
                        this.setState({
                          images: {
                            ...this.state.images,
                            [data.data.imageName]: URL.createObjectURL(
                              data.personPhoto
                            ),
                          },
                        });
                      });
                  });
              }
            });
        } else {
          firebase
            .firestore()
            .collection("ekibimiz")
            .doc(data.docId)
            .update({
              [this.state.editPersonId]: firebase.firestore.FieldValue.delete(),
            })
            .then(() => {
              firebase
                .firestore()
                .collection("ekibimiz")
                .doc(data.docId)
                .set(
                  {
                    [data.personName]: {
                      email: data.data.email,
                      tr: {
                        title: data.data.tr.title,
                        info: data.data.tr.info,
                      },
                      en: {
                        title: data.data.en.title,
                        info: data.data.en.info,
                      },
                      fr: {
                        title: data.data.fr.title,
                        info: data.data.fr.info,
                      },
                      imageName: photoChanged
                        ? data.data.imageName
                        : prevImageName,
                    },
                  },
                  { merge: true }
                );
            })
            .then(() => {
              if (photoChanged) {
                const ref = firebase.storage().ref();
                ref
                  .child("ekibimiz/" + prevImageName)
                  .delete()
                  .then(() => {
                    ref
                      .child("ekibimiz/" + data.data.imageName)
                      .put(data.personPhoto)
                      .then(() => {
                        this.setState({
                          images: {
                            ...this.state.images,
                            [data.data.imageName]: URL.createObjectURL(
                              data.personPhoto
                            ),
                          },
                        });
                      });
                  });
              }
            });
        }
      }
      this.clearState();
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

  handleEditSection = async (docId) => {
    await this.handleShow("section", docId);
  };

  handleEditPerson = async (docId, personId) => {
    await this.handleShow("person", docId, personId);
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
        firebase
          .firestore()
          .collection("ekibimiz")
          .doc(element)
          .update({
            "sectionData.order": docs[element]["sectionData"]["order"] - 1,
          });
      }
    });
    Object.keys(docs[docId]).forEach((person) => {
      if (person != "sectionData") {
        const ref = firebase.storage().ref();
        ref.child("ekibimiz/" + docs[docId][person].imageName).delete();
      }
    });
  };

  render() {
    let documentKeys = Object.keys(this.state.documents);
    let documents = this.state.documents;

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
                                this.handleEditSection(doc);
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faEdit}
                                className="mx-1"
                                size="2x"
                              />
                            </a>
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
                        return data != "sectionData" ? (
                          <div
                            key={data}
                            className="col-xl-2 col-lg-2 col-md-6"
                            style={{ cursor: "pointer" }}
                            onClick={() => this.handleEditPerson(doc, data)}
                          >
                            <div className="single_team">
                              <div className="team_thumb">
                                <img
                                  src={
                                    this.state.images[
                                      documents[doc][data].imageName
                                    ]
                                      ? this.state.images[
                                          documents[doc][data].imageName
                                        ]
                                      : "img/team/blank.png"
                                  }
                                  alt={
                                    "image_" +
                                    data.split(" ").join("").toLocaleLowerCase()
                                  }
                                  style={{
                                    objectFit: "cover",
                                    maxHeight: "157px",
                                    objectPosition: "50% 35%",
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
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => this.handleAddPerson(doc)}
                            >
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
                  style={{ cursor: "pointer" }}
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
                this.state.isEdit ? (
                  <div>Bölüm Düzenle</div>
                ) : (
                  <div>Bölüm Ekle</div>
                )
              ) : this.state.isEdit ? (
                <div>Kişi Düzenle</div>
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
                        defaultValue={this.state.trBaşlık}
                        onChange={(e) =>
                          this.setState({ trBaşlık: e.target.value })
                        }
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="İngilizce isim"
                        defaultValue={this.state.enBaşlık}
                        onChange={(e) =>
                          this.setState({ enBaşlık: e.target.value })
                        }
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fransızca isim"
                        defaultValue={this.state.frBaşlık}
                        onChange={(e) =>
                          this.setState({ frBaşlık: e.target.value })
                        }
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
                      onChange={(e) => this.setState({ order: e.target.value })}
                      defaultValue={this.state.order}
                    >
                      {documentKeys.map((doc, i) => {
                        return (
                          <option key={"option_" + i} value={i + 1}>
                            {i + 1}
                          </option>
                        );
                      })}
                      {!this.state.isEdit ? (
                        <option value={documentKeys.length + 1}>
                          {documentKeys.length + 1}
                        </option>
                      ) : null}
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
                        : typeof this.state.personPhoto == "string"
                        ? this.state.personPhoto
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
                    // defaultValue={this.state.personPhoto}
                    onChange={(e) => {
                      this.setState({ personPhoto: e.target.files[0] });
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
                    defaultValue={this.state.personName}
                    onChange={(e) => {
                      // personName = e.target.value;
                      this.setState({ personName: e.target.value });
                    }}
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
                        defaultValue={this.state.personTrTitle}
                        onChange={(e) =>
                          this.setState({ personTrTitle: e.target.value })
                        }
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="İngilizce Ünvan"
                        defaultValue={this.state.personEnTitle}
                        onChange={(e) =>
                          this.setState({ personEnTitle: e.target.value })
                        }
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fransızca Ünvan"
                        defaultValue={this.state.personFrTitle}
                        onChange={(e) =>
                          this.setState({ personFrTitle: e.target.value })
                        }
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
                        defaultValue={this.state.personTrInfo}
                        onChange={(e) =>
                          this.setState({ personTrInfo: e.target.value })
                        }
                      />
                    </div>
                    <div className="col">
                      <textarea
                        className="form-control"
                        placeholder="İngilizce Açıklama"
                        rows="4"
                        defaultValue={this.state.personEnInfo}
                        onChange={(e) =>
                          this.setState({ personEnInfo: e.target.value })
                        }
                      />
                    </div>
                    <div className="col">
                      <textarea
                        className="form-control"
                        placeholder="Fransızca Açıklama"
                        rows="4"
                        defaultValue={this.state.personFrInfo}
                        onChange={(e) =>
                          this.setState({ personFrInfo: e.target.value })
                        }
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
                    defaultValue={this.state.personEmail}
                    onChange={(e) =>
                      this.setState({ personEmail: e.target.value })
                    }
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
                    String(this.state.trBaşlık).trim() == "" ||
                    String(this.state.enBaşlık).trim() == "" ||
                    String(this.state.frBaşlık).trim() == "" ||
                    !this.state.trBaşlık ||
                    !this.state.enBaşlık ||
                    !this.state.frBaşlık
                  ) {
                    alert("Bazı alanları boş!");
                  } else {
                    objct = {
                      data: {
                        tr: this.state.trBaşlık,
                        en: this.state.enBaşlık,
                        fr: this.state.frBaşlık,
                        order: parseInt(this.state.order),
                      },

                      docId: !this.state.editDocId ? "" : this.state.editDocId,
                    };
                    this.handleClose(true, objct);
                  }
                }
                if (this.state.modalPart == "person") {
                  if (
                    String(this.state.personName).trim() == "" ||
                    String(this.state.personTrTitle).trim() == "" ||
                    String(this.state.personTrInfo).trim() == "" ||
                    String(this.state.personEnTitle).trim() == "" ||
                    String(this.state.personEnInfo).trim() == "" ||
                    String(this.state.personFrTitle).trim() == "" ||
                    String(this.state.personFrInfo).trim() == "" ||
                    String(this.state.personEmail).trim() == "" ||
                    !this.state.personName ||
                    !this.state.personTrTitle ||
                    !this.state.personTrInfo ||
                    !this.state.personEnTitle ||
                    !this.state.personEnInfo ||
                    !this.state.personFrTitle ||
                    !this.state.personFrInfo ||
                    !this.state.personEmail ||
                    !this.state.personPhoto
                  ) {
                    alert("Bazı alanlar boş!");
                  } else {
                    objct = {
                      personName: this.state.personName,
                      data: {
                        email: this.state.personEmail,
                        tr: {
                          info: this.state.personTrInfo,
                          title: this.state.personTrTitle,
                        },
                        en: {
                          info: this.state.personEnInfo,
                          title: this.state.personEnTitle,
                        },
                        fr: {
                          info: this.state.personFrInfo,
                          title: this.state.personFrTitle,
                        },
                        imageName: Date.now().toString(),
                      },
                      personPhoto: this.state.personPhoto,
                      docId: !this.state.editDocId ? "" : this.state.editDocId,
                    };
                    this.handleClose(true, objct);
                  }
                }
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
