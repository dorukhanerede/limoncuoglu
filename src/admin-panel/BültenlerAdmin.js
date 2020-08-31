import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faFileAlt,
  faTrashAlt,
  faEdit,
  faCheckSquare,
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
          element.getDownloadURL().then((url) => {
            pdf = url;
            this.setState({
              bültenler: [
                ...this.state.bültenler,
                { bültenName: element.name, url: pdf, edit: false },
              ],
            });
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

  // handleEdit = async (value, changedValue) => {
  //   let arr = this.state.bültenler;

  //   const index = arr.findIndex((el) => el.bültenName == changedValue);

  //   let file = arr[index].url;

  //   var xhr = new XMLHttpRequest();
  //   xhr.responseType = "blob";
  //   xhr.onload = function (event) {
  //     var blob = xhr.response;
  //   };
  //   xhr.open("GET", file);
  //   xhr.send();

  //   console.log(arr[index].url);
  //   arr[index] = {
  //     bültenName: value,
  //     url: file,
  //     edit: arr[index].edit,
  //     valueChanged: true,
  //   };
  //   if (arr[index].edit) {
  //     const ref = firebase.storage().ref();

  //     console.log(value);

  //     await ref
  //       .child("bültenler/" + changedValue)
  //       .delete()
  //       .then(() => ref.child("bültenler/" + value).put(file));

  //     this.setState({ bültenler: arr });
  //   }
  // };

  render() {
    return (
      <div className="row text-left mt-3 no-gutters">
        {this.state.bültenler.map((element, index) => {
          return element.bültenName != null ? (
            <div
              key={index}
              className="col-xl-5 col-md-7 col-lg-5 card border rounded-bottom mr-4 mb-4"
            >
              <div className="card-header justify-content-between row no-gutters">
                {/* {!this.state.bültenler[index].edit ? ( */}
                <h3 className="col">{element.bültenName}</h3>
                {/* ) : (
                  <input
                    style={{ width: "80%" }}
                    defaultValue={element.bültenName}
                    onChange={(e) =>
                      this.handleEdit(e.target.value, element.bültenName)
                    }
                  ></input>
                )} */}

                <div className="position-absolute" style={{ right: "2px" }}>
                  {/* <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      let arr = this.state.bültenler;
                      arr[index].edit = !arr[index].edit;
                      this.setState({ bültenler: arr });
                    }}
                  >
                    {this.state.bültenler[index].edit ? (
                      <FontAwesomeIcon
                        icon={faCheckSquare}
                        className="mx-1 "
                        size="lg"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="mx-1 "
                        size="lg"
                      />
                    )}
                  </a> */}
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
              <div className="card-body text-center ">
                <a href={element.url} target="_blank">
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    size={"5x"}
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
          ) : null;
        })}
        {<ModalBültenSection add={this.handleAdd}></ModalBültenSection>}
      </div>
    );
  }
}

export default BültenlerAdmin;
