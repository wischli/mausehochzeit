import React, { Component } from 'react';
import './App.css';
import './assets/styles/Menu.css';
import './assets/styles/cards.css';
// import Button from '@material-ui/core/Button';
// import Menu from './assets/Menu';
import Menu from './assets/scripts/Menu2';
import Expire from './assets/scripts/Expire';
import Zoom from 'react-reveal/Zoom';
import Header from './assets/scripts/Header'
import Directions from './assets/scripts/Directions'
import ColorExample from './assets/scripts/ColorExample'
// import SimpleMap from './assets/scripts/SimpleMap'

class App extends Component {
  render() {
    return (
      <div id="menuOuterContainer" className="App">
        <Expire delayShow={2000} delayHide={10000}>
          <Zoom>
            <div className="button-text"><span className="button-text-inner">Mau! Drück mich</span></div>
          </Zoom>
        </Expire>
        <Menu />
        <main id="menuPageWrap">
          <Header />
          <div className="my-cards">
            <Directions />
            <ColorExample />
          </div>
          <Zoom>
          </Zoom>
        </main>
      </div>
    );
  }
}

export default App;
