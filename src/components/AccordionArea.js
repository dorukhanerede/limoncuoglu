class AccordionArea extends React.Component {
  render() {
    <div className="accordion_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="accordion_thumb">
              <img src="img/banner/accordion.png" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="faq_ask">
              <h3>Frequently ask</h3>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Adieus who direct esteem{" "}
                        <span>It esteems luckily?</span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                    style={{}}
                  >
                    <div className="card-body">
                      Esteem spirit temper too say adieus who direct esteem
                      esteems luckily or picture placing drawing.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Who direct esteem It esteems?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                    style={{}}
                  >
                    <div className="card-body">
                      Esteem spirit temper too say adieus who direct esteem
                      esteems luckily or picture placing drawing.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Duis consectetur feugiat auctor?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                    style={{}}
                  >
                    <div className="card-body">
                      Esteem spirit temper too say adieus who direct esteem
                      esteems luckily or picture placing drawing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
