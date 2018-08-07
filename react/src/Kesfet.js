import React, { Component, Fragment } from "react";

import kesfet from "./img/kesfet.png";
import kesfet1 from "./img/kesfet1.png";
import kesfet2 from "./img/kesfet2.png";
import kesfet3 from "./img/kesfet3.png";
import kesfetKart1 from "./img/kesfetKart1.png";
import kesfetKart2 from "./img/kesfetKart2.png";
import kesfetKart3 from "./img/kesfetKart3.png";
import sagOk from "./img/sagOk.png";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <section className="kesfet">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-8 offset-md-2 text-center">
                <img src={kesfet} alt="Keşfet" />
                <h2>Yapabileceklerinin asla yok.</h2>
                <p>
                  İstediğin sürece yapabileceklerinin sınırı yok. Üretken
                  Akademi bunun için burada; her zaman profesyonel ve güncel
                  eğitim içerikleri ile kendini keşfet.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <a href="">
                  <div className="kesfetKart">
                    <img src={kesfet1} alt="" height="150" className="kapak" />
                    <div className="sol">
                      <span>Blockchain</span>
                      <h6>Blockchain Eğitimleri</h6>
                      <p>Krypted</p>
                    </div>
                    <img src={kesfetKart1} alt="" />
                    <div className="sag">
                      <h3>KEŞFET</h3>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="kesfetKart">
                    <img src={kesfet2} alt="" height="150" className="kapak" />
                    <div className="sol">
                      <span>Girişimcilik</span>
                      <h6>Bir startup nasıl oluşturulur?</h6>
                      <p>LaunchX</p>
                    </div>
                    <img src={kesfetKart2} alt="" />
                    <div className="sag">
                      <span className="value">71%</span>
                      <progress value="71" max="100" min="0" />
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="kesfetKart">
                    <img src={kesfet3} alt="" height="150" className="kapak" />
                    <div className="sol">
                      <span>Tasarım</span>
                      <h6>iOS Programlama</h6>
                      <p>TurkishKit</p>
                    </div>
                    <img src={kesfetKart3} alt="" />
                    <div className="sag">
                      <h3>KEŞFET</h3>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm-12 text-right">
                <a href="" className="tum-egitimleri-gor">
                  Tüm eğitimleri gör
                  <img src={sagOk} alt="Tüm eğitimleri gör" width="10" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
