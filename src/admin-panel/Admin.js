import React, { useState } from "react";
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// import { firebase, auth, firestore } from "../firebase/firebase";

function Admin() {
  const [asd, setasd] = useState("asd");
  const getSom = async () => {
    let ref = await firebase
      .firestore()
      .collection("deneme")
      .doc("test")
      .get()
      .then((s) => setasd(s.data().isim));
  };
  getSom();
  return <div>{asd}</div>;
}

export default Admin;
