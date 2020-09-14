import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

function PageNotFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              size="5x"
            ></FontAwesomeIcon>
            <h2>404 Error</h2>
            <div className="error-details">Böyle bir sayfa bulunamadı.</div>
            <div className="error-actions">
              <Link to="/" className="btn btn-primary btn-lg">
                <span className="glyphicon glyphicon-home"></span>
                Anasayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
