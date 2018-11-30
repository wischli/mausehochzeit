import React from 'react';
import logo from '../../images/forest.webp';
import { BrowserView, MobileView } from "react-device-detect";

class Header extends React.Component {
  render(){
    return (
      <header className="App-header">
        <div className="wrapper">
          <BrowserView className="browserLogo">
            <img src={logo} className="App-logo" width="100%" height="100%" alt="logo" />
          </BrowserView>
          <MobileView className="mobileLogo">
            <img src={logo} className="App-logo" width="100%" height="100%" alt="logo" />
          </MobileView>
          <div className="overlay">
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

// <h1>Mausehochzeit</h1>
//<h2>Save the Date: 24.08.2019</h2>
