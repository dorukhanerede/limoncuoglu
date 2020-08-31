import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalEkibimizSection from "../components/ModalEkibimizSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

function EkibimizAdmin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <div className="col row mt-3">
        {/* <div className="card" style={{ width: "400px" }}>
          <img
            className="card-img-top"
            src="img/limoncuoglu_logo.png"
            alt="Card image"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
          </div>
        </div> */}
        <div className="card mr-3" style={{ width: "500px" }}>
          <div className="card-header justify-content-between row no-gutters">
            <h3 className="col">Kurucu</h3>
            <div className="text-right">
              <a style={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faEdit} className="mr-3" size="lg" />
              </a>
              <a style={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faTrashAlt} size="lg" />
              </a>
            </div>
          </div>
          <div className="card-body">
            {/* <div className="card pmd-card text-center">
              <div className="card-body">
                <img
                  src="img\WhatsApp Image 2020-08-19 at 23.25.04.jpeg"
                  className="rounded-circle mb-3"
                  width="120px"
                  height="120px"
                />
                <h2 className="card-title">Keith Dowd</h2>
              </div>
            </div> */}

            <div className="text-center">
              <a href="javascript:void(0);">
                <img
                  className="rounded-circle"
                  src="img\WhatsApp Image 2020-08-19 at 23.25.04.jpeg"
                  width="100px"
                  height="100px"
                />
              </a>
              <h3>Efe Limoncuogulu</h3>
            </div>
            <div className="text-center">
              <a href="javascript:void(0);">
                <img
                  className="rounded-circle"
                  src="img\WhatsApp Image 2020-08-19 at 23.25.04.jpeg"
                  width="100px"
                  height="100px"
                />
              </a>
              <h3>Efe Limoncuogulu</h3>
            </div>
          </div>
        </div>
      </div>
      {/* {ModalEkibimizSection()} */}
    </section>
  );
}

export default EkibimizAdmin;
