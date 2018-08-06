import React, { Component, Fragment } from "react";

import egitim1 from "./img/egitim1.png";
import egitim2 from "./img/egitim2.png";
import sagOk from "./img/sagOk.png";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <section className="haydi-sende-uret">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-5 offset-lg-1 text-center text-lg-left">
                <h1>Haydi sen de üret!</h1>
                <p>
                  Üretken akademi; blockchain, mobil uygulama, arayüz geliştirme
                  gibi konularda ücretsiz ve Türkçe online eğitim sağlayan bir
                  portaldır.
                </p>
                <a href="/" className="buton">
                  Hemen Öğrenin
                </a>
              </div>
              <div className="col-sm-12 col-lg-5">
                <a href="">
                  <div className="egitim">
                    <img src={egitim1} alt="" width="135" height="135" />
                    <div>
                      <h6>Blockchain Eğitimleri</h6>
                      <span>125 Bölüm</span>
                      <p>Blockchain altyapısını öğrenin.</p>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="egitim">
                    <img src={egitim2} alt="" width="135" height="135" />
                    <div>
                      <h6>Kendi Startupını Oluştur</h6>
                      <span>240 Bölüm</span>
                      <p>Kendi girişimini yap.</p>
                    </div>
                  </div>
                </a>
                <a href="" className="daha-fazlasi">
                  Daha Fazlası <img src={sagOk} alt="Daha fazlası" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
