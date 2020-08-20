import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Admin from "./admin-panel/Admin";
import Customer from "./components/Customer";

function App() {
  return (
    // <div className="App">
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>} />
        <Switch>
          <Route path="/" component={Customer}></Route>
          <Route path="/Admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
