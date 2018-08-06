import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./Header";
import HaydiSendeUret from "./HaydiSendeUret";
import Destekleriyle from "./Destekleriyle";
import Kesfet from "./Kesfet";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <HaydiSendeUret />
          <Destekleriyle />
          <Kesfet />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}
