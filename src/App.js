import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Admin from "./admin-panel/Admin";
import Customer from "./components/Customer";
import Login from "./admin-panel/Login";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    // <div className="App">
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>} />
        <Switch>
          <Route path="/" component={Customer}></Route>
          {/* <Route exact path="/Admin" component={Admin} /> */}
          {/* <Route exact path="/Login" component={Login} /> */}
          {/* <Route path="*" component={<PageNotFound></PageNotFound>} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
