import React from "react";
import PageHeader from "../../components/PageHeader";

function Hakkımızda(language) {
  let header;
  let p1;
  let p2;
  let p3;

  switch (language) {
    case "tr":
      header = "Limoncuoğlu Hukuk Bürosu";
      p1 = (
        <p>
          Limoncuoğlu Hukuk Bürosu olarak 1969 yılından beri, İzmir ve çevresi
          ağırlıklı olmak üzere hukuki danışmanlık hizmeti vermekteyiz.
        </p>
      );
      p2 = (
        <p>
          İzmir’in önde gelen hukuk bürolarından biri olarak, başta Ticaret ve
          Şirketler Hukuku olmak üzere, Avrupa Topluluğu Mevzuatı, SPK Mevzuatı,
          Toplu Sözleşme ve Çalışma hayatı ile ilgili mevzuat ve Banka ile
          ilgili mevzuat konusunda bilgi, deneyime sahip olup, Uluslararası
          Ticaret Odası Türkiye Temsilciliği’nin bu konudaki çalışmalarına İzmir
          Ticaret Odası adına katılmış bulunmaktayız.
        </p>
      );
      p3 = (
        <p>
          Hizmet sunduğumuz şirketlerden 5 tanesi şu anda İstanbul Menkul
          Kıymetler Borsasında işlem görmekte olup, diğerleri de kendi
          endüstrilerinde başta gelen şirketlerdir. Atatürk Organize Sanayi
          Bölgesi hukuki danışmanlığını yaptığımız organizasyonlar arasındadır.
          Halen
          <b>
            İzmir Büyükşehir Belediyesi, İzulaş A.Ş., İzban A.Ş., İzmir Metro
            A.Ş., İzbeton A.Ş., İzenerji A.Ş., Grand Plaza A.Ş., İzelman A.Ş.’ye
            ve ayrıca, Protekstil A.Ş., Betonstar A.Ş., Tepaş A.Ş., Sismak A.Ş.,
            Hamur Kireç A.Ş., Umet A.Ş., Temel Conta A.Ş.
          </b>
          ’ye ve benzeri şirketlere hukuki danışmanlık hizmeti verilmektedir.
          Ayrıca 1995 yılına dek Akbank’a Ege Bölgesi Müşavir Avukatı olarak,
          2013 yılına dek İzmir Ticaret Odası’na Hukuk Danışmanı olarak hizmet
          verilmiştir.
        </p>
      );
      break;

    case "en":
      header = "Limoncuoğlu Law Office";
      p1 = (
        <p>
          As Limoncuoğlu Law Firm, we have been providing legal consultancy
          services mainly in İzmir and its surroundings since 1969.
        </p>
      );
      p2 = (
        <p>
          As one of Ontario's leading law firms, particularly trade and
          including the Law on Enterprises, the European Community legislation,
          CMB regulations, information on Collective Bargaining and working life
          related legislation and regulations relating to the Bank, has the
          experience, the International Chamber of Commerce Representation in
          Turkey On behalf of the Izmir Chamber of Commerce, we have
          participated in the studies of.
        </p>
      );
      p3 = (
        <p>
          Five of the companies we serve are currently listed on the Istanbul
          Stock Exchange, while the others are the leading companies in their
          industry. Atatürk Organized Industrial Zone is among the organizations
          that we provide legal consultancy. Currently,{" "}
          <b>
            İzmir Metropolitan Municipality, İzulaş A.Ş., İzban A.Ş., İzmir
            Metro A.Ş., İzbeton A.Ş., İzenerji A.Ş., Grand Plaza A.Ş., İzelman
            A.Ş. and also Protekstil A.Ş., Betonstar A.Ş., Tepaş A.Ş., Sismak
            A.Ş., Hamur Kireç A.Ş., Umet A.Ş., Temel Conta A.Ş.
          </b>
          Legal consultancy services are provided to companies. In addition, he
          served as the Aegean Region Consultant Advocate for Akbank until 1995
          and as Legal Advisor to the Izmir Chamber of Commerce until 2013.
        </p>
      );
      break;

    case "fr":
      header = "Limoncuoğlu Hukuk Bürosu";
      p1 = <p>Fransızca</p>;
      p2 = <p>Fransızca</p>;
      p3 = "Le Baguet";
      break;
  }

  return (
    <section>
      {PageHeader("hakkımızda", language)}
      <section className="sample-text-area">
        <div className="container box_1170">
          <h3 className="text-heading">{header}</h3>
          {p1}
          {p2}
          {p3}
        </div>
      </section>
    </section>
  );
}

export default Hakkımızda;
