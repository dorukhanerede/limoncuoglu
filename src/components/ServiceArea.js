import React from "react";

class ServiceArea extends React.Component {
  render() {
    let header;
    let service1,
      service2,
      service3,
      service4,
      service5,
      service6,
      service7,
      service8,
      service9,
      service10,
      service11,
      service12,
      service13,
      service14,
      service15,
      service16,
      service17,
      service18;
    let dahaFazlaButon;

    switch (this.props.language) {
      case "tr":
        header = "Hizmetlerimiz";
        service1 = "Avrupa Topluluğu Mevzuatı";
        service2 = "Banka & SPK Mevzuatı";
        service3 = "Emlak Hukuku";
        service4 = "Hükümetlerle olan İlişkiler";
        service5 = "İş & Toplu Sözleşme Mevzuatı";
        service6 = "Sözleşmeler Hukuku";
        service7 = "Ticaret Hukuku";
        service8 = "Uluslararası Ticaret Hukuku";
        service9 = "Vergi Hukuku";
        service10 = "Alternatif İhtilaf Çözme Usulleri";
        service11 = "Deniz Hukuku";
        service12 = "Fikri & Sınai Haklar Mevzuatı";
        service13 = "İcra İflas Hukuku";
        service14 = "Rekabet Hukuku";
        service15 = "Şirketler Hukuku";
        service16 = "Uluslararası İşletme Mevzuatı";
        service17 = "Yabancı Yatırım Mevzuatı";
        service18 = "Enerji & Doğal Kaynaklar Hukuku";
        dahaFazlaButon = "Daha Fazla";
        break;

      case "en":
        header = "Services";
        service1 = "European Community Legislation";
        service2 = "Banka & SPK Mevzuatı";
        service3 = "Emlak Hukuku";
        service4 = "Hükümetlerle olan İlişkiler";
        service5 = "İş & Toplu Sözleşme Mevzuatı";
        service6 = "Sözleşmeler Hukuku";
        service7 = "Ticaret Hukuku";
        service8 = "Uluslararası Ticaret Hukuku";
        service9 = "Vergi Hukuku";
        service10 = "Alternatif İhtilaf Çözme Usulleri";
        service11 = "Deniz Hukuku";
        service12 = "Fikri & Sınai Haklar Mevzuatı";
        service13 = "İcra İflas Hukuku";
        service14 = "Rekabet Hukuku";
        service15 = "Şirketler Hukuku";
        service16 = "Uluslararası İşletme Mevzuatı";
        service17 = "Yabancı Yatırım Mevzuatı";
        service18 = "Enerji & Doğal Kaynaklar Hukuku";
        dahaFazlaButon = "Learn More";
        break;

      case "fr":
        header = "fransızca";
        service1 = "Avrupa Topluluğu Mevzuatı";
        service2 = "Banka & SPK Mevzuatı";
        service3 = "Emlak Hukuku";
        service4 = "Hükümetlerle olan İlişkiler";
        service5 = "İş & Toplu Sözleşme Mevzuatı";
        service6 = "Sözleşmeler Hukuku";
        service7 = "Ticaret Hukuku";
        service8 = "Uluslararası Ticaret Hukuku";
        service9 = "Vergi Hukuku";
        service10 = "Alternatif İhtilaf Çözme Usulleri";
        service11 = "Deniz Hukuku";
        service12 = "Fikri & Sınai Haklar Mevzuatı";
        service13 = "İcra İflas Hukuku";
        service14 = "Rekabet Hukuku";
        service15 = "Şirketler Hukuku";
        service16 = "Uluslararası İşletme Mevzuatı";
        service17 = "Yabancı Yatırım Mevzuatı";
        service18 = "Enerji & Doğal Kaynaklar Hukuku";
        dahaFazlaButon = "Fransızca";
        break;
      default:
        header = "Hizmetlerimiz";
        service1 = "Avrupa Topluluğu Mevzuatı";
        service2 = "Banka & SPK Mevzuatı";
        service3 = "Emlak Hukuku";
        service4 = "Hükümetlerle olan İlişkiler";
        service5 = "İş & Toplu Sözleşme Mevzuatı";
        service6 = "Sözleşmeler Hukuku";
        service7 = "Ticaret Hukuku";
        service8 = "Uluslararası Ticaret Hukuku";
        service9 = "Vergi Hukuku";
        service10 = "Alternatif İhtilaf Çözme Usulleri";
        service11 = "Deniz Hukuku";
        service12 = "Fikri & Sınai Haklar Mevzuatı";
        service13 = "İcra İflas Hukuku";
        service14 = "Rekabet Hukuku";
        service15 = "Şirketler Hukuku";
        service16 = "Uluslararası İşletme Mevzuatı";
        service17 = "Yabancı Yatırım Mevzuatı";
        service18 = "Enerji & Doğal Kaynaklar Hukuku";
        dahaFazlaButon = "Daha Fazla";
    }

    return (
      <div className="service_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-50">
                <h3>{header}</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/1.svg" alt="" />
                </div>
                <h3>{service1} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/2.svg" alt="" />
                </div>
                <h3>{service2} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/3.svg" alt="" />
                </div>
                <h3>{service3} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/4.svg" alt="" />
                </div>
                <h3>{service4} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/5.svg" alt="" />
                </div>
                <h3>{service5} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service6} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service7} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service8} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service9} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service10} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service11} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service12} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service13} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service14} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service15} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service16} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service17} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_service text-center">
                <div className="service_icon">
                  <img src="img/svg_icon/6.svg" alt="" />
                </div>
                <h3>{service18} </h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">
                  {dahaFazlaButon}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceArea;
