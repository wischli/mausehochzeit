import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./App.css";
import Accomodation from "./assets/components/Accomodation";
import ColorExample from "./assets/components/ColorExample";
import Contact from "./assets/components/Contact";
import Directions from "./assets/components/Directions";
import DosDonts from "./assets/components/DosDonts";
import Expire from "./assets/components/Expire";
import Header from "./assets/components/Header";
import Menu from "./assets/components/Menu";
import Party from "./assets/components/Party";
import Welcome from "./assets/components/Welcome";
import "./assets/styles/cards.css";
import "./assets/styles/Menu.css";

class App extends Component {
  render() {
    return (
      <div id="menuOuterContainer" className="App">
        <Expire delayShow={5000} delayHide={15000}>
          <Fade>
            <div className="button-text">
              <span className="button-text-inner">Mau! Drück mich!</span>
            </div>
          </Fade>
        </Expire>
        <Menu />
        <main id="menuPageWrap">
          <Header />
          <div className="my-cards">
            <Fade>
              <Welcome />
            </Fade>
            <Fade>
              <Directions />
            </Fade>
            <Fade>
              <Fade>
                <Party />
              </Fade>
              <Accomodation />
            </Fade>
            <Fade>
              <ColorExample />
            </Fade>
            <Fade>
              <Contact />
            </Fade>
            <Fade>
              <DosDonts />
            </Fade>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
