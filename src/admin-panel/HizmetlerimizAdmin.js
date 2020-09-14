import React from "react";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faTrashAlt,
  faEdit,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowDown,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class HizmetlerimizAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      show: false,
      services: {},
      icons: {},
      icon: "",
      trHeader: "",
      trInfo: "",
      enHeader: "",
      enInfo: "",
      frHeader: "",
      frInfo: "",
      docId: "",
      iconName: "",
    };
  }

  clearState() {
    this.setState({
      icon: "",
      trHeader: "",
      trInfo: "",
      enHeader: "",
      enInfo: "",
      frHeader: "",
      frInfo: "",
      docId: "",
    });
  }

  componentDidMount() {
    this.getStorage();
    this.getFirestore();
  }

  getFirestore() {
    firebase
      .firestore()
      .collection("hizmetlerimiz")
      .orderBy("serviceData.order", "asc")
      .onSnapshot((col) => {
        let services = {};
        col.docs.forEach((doc) => {
          services = { ...services, [doc.id]: doc.data() };
        });
        this.setState({ services: services });
      });
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

  handleShow = (docId) => {
    this.clearState();
    if (!docId) this.setState({ show: true });
    else {
      this.setState({
        show: true,
        trHeader: this.state.services[docId].tr.header,
        trInfo: this.state.services[docId].tr.info,
        enHeader: this.state.services[docId].en.header,
        enInfo: this.state.services[docId].en.info,
        frHeader: this.state.services[docId].fr.header,
        frInfo: this.state.services[docId].fr.info,
        icon: this.state.icons[this.state.services[docId].serviceData.icon],
        docId: docId,
        iconName: this.state.services[docId].serviceData.icon,
      });
    }
  };

  handleClose = (isSave) => {
    this.setState({ show: false });
    if (isSave) {
      if (!this.state.docId) {
        firebase
          .firestore()
          .collection("hizmetlerimiz")
          .add({
            serviceData: {
              order: Object.keys(this.state.services).length + 1,
              icon: this.state.iconName,
            },
            tr: { header: this.state.trHeader, info: this.state.trInfo },
            en: { header: this.state.enHeader, info: this.state.enInfo },
            fr: { header: this.state.frHeader, info: this.state.frInfo },
          });
        firebase
          .storage()
          .ref()
          .child("hizmetlerimiz/" + this.state.iconName)
          .put(this.state.icon)
          .then(() => {
            this.setState({
              icons: {
                ...this.state.icons,
                [this.state.iconName]: URL.createObjectURL(this.state.icon),
              },
            });
          });
      }
    }
  };

  confirmDelete = () => {
    let isValid = false;
    if (window.confirm("Silmek istediğine emin misin?")) isValid = true;
    return isValid;
  };

  handleDelete = (doc) => {
    const icon = this.state.services[doc].serviceData.icon;
    firebase.firestore().collection("hizmetlerimiz").doc(doc).delete();
    firebase.storage().ref("hizmetlerimiz").child(icon).delete();
  };

  render() {
    const services = this.state.services;
    const serviceKeys = Object.keys(services);

    return this.state.loading ? (
      <div className="loader"></div>
    ) : (
      <div className="service_area">
        <div className="row justify-content-center">
          {serviceKeys.map((doc, e) => {
            return (
              <div key={"service_" + e} className="col-xl-3 col-md-6 col-lg-3">
                <div
                  className="position-absolute"
                  style={{ right: "5%", top: "5%" }}
                >
                  {services[doc].serviceData.order == 1 ? null : (
                    <a style={{ cursor: "pointer" }}>
                      <FontAwesomeIcon
                        icon={
                          services[doc].serviceData.order % 4 == 1
                            ? faArrowUp
                            : faArrowLeft
                        }
                        className="mx-1"
                        size="1x"
                      />
                    </a>
                  )}
                  {services[doc].serviceData.order ==
                  serviceKeys.length ? null : (
                    <a style={{ cursor: "pointer" }}>
                      <FontAwesomeIcon
                        icon={
                          services[doc].serviceData.order % 4 == 0
                            ? faArrowDown
                            : faArrowRight
                        }
                        className="mx-1"
                        size="1x"
                      />
                    </a>
                  )}
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => this.handleShow(doc)}
                  >
                    <FontAwesomeIcon icon={faEdit} className="mx-1" size="1x" />
                  </a>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (this.confirmDelete()) this.handleDelete(doc);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="mx-1"
                      size="1x"
                    />
                  </a>
                </div>
                <div className="single_service text-center">
                  <div className={"service_icon service_icon_" + (e % 4)}>
                    <img
                      src={
                        !this.state.icons[services[doc].serviceData.icon]
                          ? null
                          : this.state.icons[services[doc].serviceData.icon]
                      }
                      alt={"service_image_" + e}
                      height="39.626px"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                  <h3>{services[doc].tr.header}</h3>
                  <p>{services[doc].tr.info}</p>
                </div>
              </div>
            );
          })}
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
            <Modal.Title>Hizmet Ekle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="inputHeaderTr">Türkçe Başlık</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputHeaderTr"
                    placeholder="Türkçe Başlık"
                    defaultValue={this.state.trHeader}
                    onChange={(e) =>
                      this.setState({ trHeader: e.target.value })
                    }
                  />
                </div>
                <div className="form-group col">
                  <label htmlFor="inputHeaderEn">İngilizce Başlık</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputHeaderEn"
                    placeholder="İngilizce Başlık"
                    defaultValue={this.state.entrInfo}
                    onChange={(e) => this.setState({ trInfo: e.target.value })}
                  />
                </div>
                <div className="form-group col">
                  <label htmlFor="inputHeaderFr">Fransızca Başlık</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputHeaderFr"
                    placeholder="Fransızca Başlık"
                    defaultValue={this.state.enHeader}
                    onChange={(e) =>
                      this.setState({ enHeader: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputInfoTr">Türkçe Açıklama</label>
                <textarea
                  rows="3"
                  className="form-control"
                  id="inputInfoTr"
                  placeholder="Türkçe Açıklama"
                  defaultValue={this.state.enInfo}
                  onChange={(e) => this.setState({ enInfo: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputInfoEn">İngilizce Açıklama</label>
                <textarea
                  rows="3"
                  className="form-control"
                  id="inputInfoEn"
                  placeholder="İngilizce Açıklama"
                  defaultValue={this.state.frHeader}
                  onChange={(e) => this.setState({ frHeader: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputInfoFr">Fransızca Açıklama</label>
                <textarea
                  rows="3"
                  className="form-control"
                  id="inputInfoFr"
                  placeholder="Fransızca Açıklama"
                  defaultValue={this.state.frInfo}
                  onChange={(e) => this.setState({ frInfo: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputIconSection">Icon Yükle</label>
                <div className="form-row ml-4" id="inputIconSection">
                  <label htmlFor="inputIcon">
                    {!this.state.icon ? (
                      <FontAwesomeIcon icon={faQuestion} size="3x" />
                    ) : (
                      <img
                        src={
                          typeof this.state.icon == "string"
                            ? this.state.icon
                            : URL.createObjectURL(this.state.icon)
                        }
                        height="39.626px"
                        height="40px"
                        style={{
                          filter: "brightness(1) invert(1)",
                        }}
                      />
                    )}
                  </label>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="inputIcon"
                    accept="image/svg"
                    onChange={(e) => {
                      this.setState({
                        icon: e.target.files[0],
                        iconName: Date.now(),
                      });
                    }}
                  />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Kapat
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                if (
                  !this.state.trHeader ||
                  !this.state.trInfo ||
                  !this.state.enHeader ||
                  !this.state.enInfo ||
                  !this.state.frHeader ||
                  !this.state.frInfo ||
                  !this.state.icon
                ) {
                  alert("Bazı alanlar boş!");
                } else this.handleClose(true);
              }}
            >
              Kaydet
            </Button>
          </Modal.Footer>
        </Modal>
        <a
          className="text-center"
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "20px",
            bottom: "15px",
          }}
          onClick={() => this.handleShow()}
        >
          <FontAwesomeIcon icon={faPlusSquare} size="4x" />
          <h3>Hizmet Ekle</h3>
        </a>
      </div>
    );
  }
}

export default HizmetlerimizAdmin;
