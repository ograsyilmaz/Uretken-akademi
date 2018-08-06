import React, { Component, Fragment } from "react";

import destekleriyle from "./img/destekleriyle.png";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <section className="destekleriyle">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2>DESTEKLERİYLE;</h2>
                <img src={destekleriyle} alt="destekleriyle" />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
