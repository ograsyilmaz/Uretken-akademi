import React, { Component, Fragment } from "react";

import logo from "./img/uretkenakademi.png";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <section className="footer text-center text-lg-left">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-3">
                <h5>Üretken Akademi</h5>
                <h6>Hemen eğitime başla ve sınırlarını zorla.</h6>
              </div>
              <div className="col-sm-12 col-lg-3 offset-lg-6">
                <a href="" className="buton">
                  Öğrenmeye Başla
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container text-center text-lg-left">
            <div className="row">
              <div className="col-sm-12 col-lg-5">
                <div className="footer-description">
                  <div className="footer-description-logo">
                    <a href="">
                      <img
                        src={logo}
                        className="img-responsive"
                        alt="Üretken Akademi"
                      />
                    </a>
                  </div>
                  <hr />
                  <p className="footer-description-content">
                    Üretken Akademi, 21. yüzyıl becerilerini profesyonel
                    eğitmenler yardımıyla ücretsiz olarak kazandırmayı
                    hedefleyen bir alternatif eğitim sistemidir. İlgi
                    alanlarınızı keşfetmek ve öğrenmek artık çok kolay!
                  </p>
                  <p className="footer-description-copyright">2018 Copyright</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-2 offset-lg-1">
                <h6>Hızlı Erişim</h6>
                <ul>
                  <li>
                    <a href="">Eğitmenler</a>
                  </li>
                  <li>
                    <a href="">İletişim</a>
                  </li>
                  <li>
                    <a href="">Kurumsal</a>
                  </li>
                  <li>
                    <a href="">Biz kimiz</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-2">
                <h6>Akademik</h6>
                <ul>
                  <li>
                    <a href="">Eğitmenler</a>
                  </li>
                  <li>
                    <a href="">Partnerler</a>
                  </li>
                  <li>
                    <a href="">Kullanım</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-2">
                <h6>Hakkımızda</h6>
                <ul>
                  <li>
                    <a href="">Kullanım Sözleşmesi</a>
                  </li>
                  <li>
                    <a href="">Üyelik Sözleşmesi</a>
                  </li>
                  <li>
                    <a href="">Eğitmen Başvuru</a>
                  </li>
                  <li>
                    <a href="">Nedir?</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}
