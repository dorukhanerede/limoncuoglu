import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function ModalBültenSection(props) {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [bültenName, setBültenName] = useState();
  const [nameValid, setNameValid] = useState();
  const [fileValid, setFileValid] = useState();

  const clearData = () => {
    setFileName(null);
    setFile(null);
    setBültenName(null);
    setNameValid(null);
    setFileValid(null);
  };
  const handleClose = () => {
    setShow(false);
    clearData();
  };
  const handleShow = () => setShow(true);
  const handleValidate = () => {
    let isValid = false;
    if (file) {
      setFileValid(true);
    } else setFileValid(false);
    if (bültenName) {
      setNameValid(true);
    } else setNameValid(false);
    if (nameValid && fileValid) {
      setShow(false);
      isValid = true;
      clearData();
    }
    return isValid;
  };

  return (
    <section>
      <a
        className="text-center"
        style={{
          cursor: "pointer",
          position: "absolute",
          right: "20px",
          bottom: "15px",
        }}
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faPlusSquare} size="4x" />
        <h3>Ekle</h3>
      </a>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Bülten Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="inputBültenIsim">Bülten İsmi</label>
            <input
              type="text"
              className={
                nameValid || nameValid == null
                  ? "form-control"
                  : "form-control is-invalid"
              }
              id="inputBültenIsim"
              aria-describedby="bültenIsim"
              placeholder="Bülten ismi girin..."
              onChange={(e) => {
                setBültenName(e.target.value);
                if (e.target.value) setNameValid(true);
              }}
            />
            <small id="bültenIsim" className="form-text text-muted">
              Bültenin müşterilere görünen ismi.
            </small>
          </div>
          <br></br>
          <div className="custom-file">
            <input
              type="file"
              className={
                fileValid || fileValid == null
                  ? "custom-file-input"
                  : "custom-file-input is-invalid"
              }
              id="validatedCustomFile"
              accept="application/pdf"
              required
              onChange={(e) => {
                setFile(e.target.files[0]);
                setFileName(e.target.files[0].name);
                if (e.target.value) setFileValid(true);
              }}
            />
            <label className="custom-file-label" htmlFor="validatedCustomFile">
              {fileName ? fileName : "Dosya Seç..."}
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              let isValid = handleValidate();
              if (isValid) props.add(bültenName, file);
            }}
          >
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default ModalBültenSection;
