import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faFileAlt,
  faTrashAlt,
  faEdit,
  faCheckSquare,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import ModalBültenSection from "../components/ModalBültenSection";
import firebase, { storage } from "firebase";

class BültenlerAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      bültenler: [],
    };
  }
  componentWillMount() {
    firebase
      .storage()
      .ref("bültenler")
      .listAll()
      .then((result) => {
        result.items.forEach((element) => {
          let pdf;
          element
            .getDownloadURL()
            .then((url) => {
              pdf = url;
              this.setState({
                bültenler: [
                  ...this.state.bültenler,
                  { bültenName: element.name, url: pdf, edit: false },
                ],
              });
            })
            .then(() => {
              setTimeout(() => {
                this.setState({ loading: false });
              }, 1000);
            });
        });
      });
  }

  handleAdd = async (bültenName, file) => {
    const storageRef = firebase.storage().ref();
    await storageRef
      .child("bültenler/" + bültenName)
      .put(file)
      .then(() =>
        storageRef
          .child("bültenler/" + bültenName)
          .getDownloadURL()
          .then((url) => {
            this.setState({
              bültenler: [
                ...this.state.bültenler,
                { bültenName: bültenName, url: file, edit: false },
              ],
            });
          })
      );
  };

  confirmDelete = () => {
    let isValid = false;
    if (window.confirm("Silmek istediğine emin misin?")) isValid = true;
    return isValid;
  };

  handleDelete = async (bültenName) => {
    const storageRef = firebase.storage().ref();
    await storageRef
      .child("bültenler/" + bültenName)
      .delete()
      .then(() => {
        const arr = this.state.bültenler;
        let index = arr.findIndex((el) => el.bültenName == bültenName);
        arr.splice(index, 1);
        this.setState({ bültenler: arr });
      });
  };

  render() {
    return this.state.loading ? (
      <div className="loader"></div>
    ) : (
      <div className="service_area">
        <div className="row justify-content-center">
          {this.state.loading ? (
            <div className="loader"></div>
          ) : (
            this.state.bültenler.map((element, index) => {
              return element.bültenName != null ? (
                <div key={index} className="col-xl-3 col-md-6 col-lg-3">
                  <div
                    className="single_service text-center"
                    style={{ border: "1px solid #e8e8e8" }}
                  >
                    <a href={element.url} target="_blank">
                      <div className="service_icon">
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          size="5x"
                          color="#F40F02"
                        ></FontAwesomeIcon>
                      </div>
                      <h3>{element.bültenName}</h3>
                    </a>
                  </div>
                  <div
                    className="position-absolute"
                    style={{
                      right: "5%",
                      top: "2%",
                      border: "1px solid #e8e8e8",
                      borderRadius: "10px",
                      padding: "5px",
                    }}
                  >
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if (this.confirmDelete())
                          this.handleDelete(element.bültenName);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="mx-1"
                        size="lg"
                      />
                    </a>
                  </div>
                </div>
              ) : null;
            })
          )}
        </div>
        {<ModalBültenSection add={this.handleAdd}></ModalBültenSection>}
      </div>
    );
  }
}

export default BültenlerAdmin;
