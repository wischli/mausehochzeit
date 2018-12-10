import React, { Component } from 'react';
import './App.css';
import './assets/styles/Menu.css';
import './assets/styles/cards.css';
// import Button from '@material-ui/core/Button';
// import Menu from './assets/Menu';
import Menu from './assets/scripts/Menu2';
import Expire from './assets/scripts/Expire';
// import Zoom from 'react-reveal/Zoom';
import Header from './assets/scripts/Header';
import Directions from './assets/scripts/Directions';
import ColorExample from './assets/scripts/ColorExample';
import Welcome from './assets/scripts/Welcome';
import Party from './assets/scripts/Party';
import DosDonts from './assets/scripts/DosDonts';
import Contact from './assets/scripts/Contact';
import Accomodation from './assets/scripts/Accomodation';
// import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


class App extends Component {
  render() {
    return (
      <div id="menuOuterContainer" className="App">
        <Expire delayShow={2000} delayHide={10000}>
          <Fade>
            <div className="button-text"><span className="button-text-inner">Mau! Drück mich</span></div>
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
              <Party />
            </Fade>
            <Fade>
              <DosDonts />
            </Fade>
            <Fade>
              <Directions />
            </Fade>
            <Fade>
              <Contact />
            </Fade>
            <Accomodation />
            <Fade>
              <ColorExample />
            </Fade>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
