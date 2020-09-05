import React from "react";
import firebase from "firebase";

class TeamArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      documents: {},
      images: {},
    };
  }

  componentWillMount() {
    this.getFirestore();
    this.getStorage();
  }

  async getFirestore() {
    await firebase
      .firestore()
      .collection("ekibimiz")
      .orderBy("sectionData.order", "asc")
      .get()
      .then((collection) => {
        let collections = {};
        collection.docs.forEach((doc) => {
          const data = doc.data();
          collections = { ...collections, [doc.id]: data };
        });
        this.setState({ documents: collections });
      });
  }

  async getStorage() {
    const ref = firebase.storage().ref("ekibimiz");
    let images = {};
    await ref.listAll().then((result) => {
      result.items.forEach((element) => {
        element
          .getDownloadURL()
          .then((img) => {
            const elementName = element.name;
            // .slice(
            //   0,
            //   element.name.lastIndexOf(".")
            // );
            images = { ...images, [elementName]: img };
          })
          .then(() => {
            this.setState({ images: images, loading: false });
          });
      });
      if (result.items.length == 0) this.setState({ loading: false });
    });
  }

  render() {
    let documentKeys = Object.keys(this.state.documents);
    let documents = this.state.documents;
    return (
      <div className="team_area">
        <div className="container">
          {this.state.loading ? (
            <div className="loader"></div>
          ) : (
            <div className="border_bottom">
              {documentKeys.map((doc, i) => {
                return (
                  <section key={doc}>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="section_title mb-40 text-center">
                          <h3>
                            {documents[doc].sectionData[this.props.language]}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-around">
                      {Object.keys(documents[doc]).map((data) => {
                        const element =
                          documents[doc][data][this.props.language];
                        return data != "sectionData" ? (
                          <div
                            key={data}
                            className="col-xl-4 col-lg-4 col-md-6"
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
                                    width: "362px",
                                    height: "400px",
                                  }}
                                />
                              </div>
                              <div className="team_info text-center">
                                <h3>{data}</h3>
                                <p>{element.title}</p>
                                <p className="text-left">{element.info}</p>
                                <br></br>
                                <p>{documents[doc][data].email}</p>
                              </div>
                            </div>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default TeamArea;
