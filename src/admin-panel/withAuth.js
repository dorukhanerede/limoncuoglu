import React from "react";
import { auth } from "firebase";
import { Link, useHistory } from "react-router-dom";
import Admin from "./Admin";
import LoadingContent from "../components/LoadingContent";
import Login from "./Login";
const withAuth = (Component) => {
  return class extends React.Component {
    static getInitialProps = Component.getInitialProps;
    constructor(props) {
      super(props);
      this.state = {
        status: "LOADING",
      };
    }

    componentDidMount() {
      auth().onAuthStateChanged((authUser) => {
        if (authUser != null) {
          this.setState({ status: "SIGNED_IN" });
        }
      });
    }
    renderContent() {
      const { status } = this.state;
      if (status == "LOADING") {
        return <Login></Login>;
      } else if (status == "SIGNED_IN") {
        return <Component {...this.props} />;
      }
    }
    render() {
      return <React.Fragment>{this.renderContent()}</React.Fragment>;
    }
  };
};
export default withAuth;
