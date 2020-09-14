import React from "react";
import firebase from "firebase";

class İletişimAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      emails: "",
      öncelikliEmail: "",
      adres1: "",
      adres2: "",
      telNo: "",
      çalışmaSaatleri: "",
      çalışmaSaatleriEn: "",
      çalışmaSaatleriFr:"",
    };
  }
  componentWillMount() {
    firebase
      .firestore()
      .collection("limoncuoglu")
      .doc("iletişim")
      .get()
      .then((snap) => {
        this.setState({
          emails: snap.data().emails,
          öncelikliEmail: snap.data().öncelikliEmail,
          adres1: snap.data().adres1,
          adres2: snap.data().adres2,
          telNo: snap.data().telNo,
          çalışmaSaatleri: snap.data().çalışmaSaatleri,
          çalışmaSaatleriEn: snap.data().çalışmaSaatleriEn,
          çalışmaSaatleriFr: snap.data().çalışmaSaatleriFr
        });
      })
      .then(() => this.setState({ loading: false }));
  }

  handleSave = (
    emails,
    öncelikliEmail,
    adres1,
    adres2,
    telNo,
    çalışmaSaatleri,
    çalışmaSaatleriEn,
    çalışmaSaatleriFr
  ) => {
    firebase
      .firestore()
      .collection("limoncuoglu")
      .doc("iletişim")
      .update({
        emails: emails,
        öncelikliEmail: öncelikliEmail,
        adres1: adres1,
        adres2: adres2,
        telNo: telNo,
        çalışmaSaatleri: çalışmaSaatleri,
        çalışmaSaatleriEn: çalışmaSaatleriEn,
        çalışmaSaatleriFr: çalışmaSaatleriFr,
      })
      .then(() => alert("Kaydedildi"));
  };

  render() {
    let emails = this.state.emails;
    let öncelikliEmail = this.state.öncelikliEmail;
    let adres1 = this.state.adres1;
    let adres2 = this.state.adres2;
    let telNo = this.state.telNo;
    let çalışmaSaatleri = this.state.çalışmaSaatleri;
    let çalışmaSaatleriEn = this.state.çalışmaSaatleriEn;
    let çalışmaSaatleriFr = this.state.çalışmaSaatleriFr;
    return (
      <section>
        {this.state.loading ? (
          <section className="justify-content-center">
            <div className="loader"></div>
          </section>
        ) : (
          <form>
            <div className="form-group">
              <label htmlFor="inputEmail1">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail1"
                placeholder="Email@email.com, email@email.com, ..."
                defaultValue={emails}
                onChange={(e) => (emails = e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail2">Öncelikli Email ( 1 tane )</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail2"
                placeholder="Email"
                defaultValue={öncelikliEmail}
                onChange={(e) => (öncelikliEmail = e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Adres</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Açık Adres"
                defaultValue={adres1}
                onChange={(e) => (adres1 = e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Adres 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="İlçe - İl, Posta Kodu"
                defaultValue={adres2}
                onChange={(e) => (adres2 = e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Telefon No</label>
              <input
                type="tel"
                className="form-control"
                id="inputPhone"
                placeholder="Telefon No"
                defaultValue={telNo}
                onChange={(e) => (telNo = e.target.value)}
              />
            </div>
            <label htmlFor="çalışmaInputs">Çalışma Saatleri</label>
            <div className="form-group form-row" id="çalışmaInputs">
            <div className="col">
              <label htmlFor="inputÇalışma">Türkçe</label>
              <input
                type="text"
                className="form-control col"
                id="inputÇalışma"
                placeholder="Pazartesi - Cuma 9:00 ile 18:00 arası"
                defaultValue={çalışmaSaatleri}
                onChange={(e) => (çalışmaSaatleri = e.target.value)}
              />
              </div>
              <div className="col">
              <label htmlFor="inputÇalışmaEn">İngilizce</label>
              <input
                type="text"
                className="form-control col"
                id="inputÇalışmaEn"
                placeholder="Pazartesi - Cuma 9:00 ile 18:00 arası"
                defaultValue={çalışmaSaatleriEn}
                onChange={(e) => (çalışmaSaatleriEn = e.target.value)}
              />
              </div>
              <div className="col">
              <label htmlFor="inputÇalışmaFr">Fransızca</label>
              <input
                type="text"
                className="form-control col"
                id="inputÇalışmaFr"
                placeholder="Pazartesi - Cuma 9:00 ile 18:00 arası"
                defaultValue={çalışmaSaatleriFr}
                onChange={(e) => (çalışmaSaatleriFr = e.target.value)}
              />
              </div>
            </div>
            <div className="m-4 text-right">
              <button
                type="button"
                className="btn btn-primary mr-3"
                onClick={() =>
                  this.handleSave(
                    emails,
                    öncelikliEmail,
                    adres1,
                    adres2,
                    telNo,
                    çalışmaSaatleri,
                    çalışmaSaatleriEn,
                    çalışmaSaatleriFr
                  )
                }
              >
                Kaydet
              </button>
            </div>
          </form>
        )}
      </section>
    );
  }
}

export default İletişimAdmin;
