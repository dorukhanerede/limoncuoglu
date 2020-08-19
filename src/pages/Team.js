import React from "react";
import Header from "../components/Header";
import TeamArea from "../components/TeamArea";

class Team extends React.Component {
  render() {
    return (
      <section>
        <div className="bradcam_area bradcam_bg_1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="bradcam_text">
                  <h3>Ekimibimiz</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TeamArea />
      </section>
    );
  }
}

export default Team;
