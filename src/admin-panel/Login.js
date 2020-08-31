import React, { useState } from "react";
import { auth } from "firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function handleLogin() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          history.push("/Admin");
        }
      })
      .catch((er) => console.log(er));
  }
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-logo">
              {/* <i className="zmdi zmdi-landscape"></i> */}
              <img src="img/limoncuoglu_logo_2.png" width="70px"></img>
            </span>

            <span className="login100-form-title p-b-34 p-t-27">Log in</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter username"
            >
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf207;"
              ></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleLogin();
                }}
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf191;"
              ></span>
            </div>

            <div className="container-login100-form-btn">
              <a className="login100-form-btn" onClick={() => handleLogin()}>
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
