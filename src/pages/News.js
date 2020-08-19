import React from "react";
import { useLocation } from "react-router-dom";

function News() {
  const lc = useLocation();
  console.log(lc);
  return (
    <div className="bradcam_area bradcam_bg_1">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="bradcam_text">
              <h3>Bültenler</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
