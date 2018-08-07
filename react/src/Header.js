import React, { Component, Fragment } from "react";
import { NavLink as Link } from "react-router-dom";

import logo from "./img/uretkenakademi.png";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="d-none d-sm-block">
          <div className="container header">
            <nav className="menu">
              <img src={logo} alt="Üretken Akademi Logo" className="logo" />
              <Link to="/" exact>
                Ana Sayfa
              </Link>
              <Link to="/nedir">Nedir?</Link>
              <Link to="/egitmenler">Eğitmenler</Link>
              <Link to="/kurumsal">Kurumsal</Link>
            </nav>
            <nav className="d-none d-lg-block">
              <Link to="/kayit-ol">Kayıt Ol</Link>
              <Link to="/ogren">Öğren</Link>
            </nav>
          </div>
        </header>
      </Fragment>
    );
  }
}
