import React from "react";
import MobileTeaser from "../../images/MausehochzeitTeaser_mobile_2.jpg";
import DesktopTeaser from "../../images/MausehochzeitTeaser_desktop.jpg";
import { BrowserView, MobileView } from "react-device-detect";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="wrapper">
          <BrowserView className="browserLogo">
            <img
              src={DesktopTeaser}
              className="App-logo"
              width="100%"
              height="100%"
              alt="logo"
            />
          </BrowserView>
          <MobileView className="mobileLogo">
            <img
              src={MobileTeaser}
              className="App-logo"
              width="100%"
              height="100%"
              alt="logo"
            />
          </MobileView>
          <div className="overlay">
            <h1>Mausehochzeit</h1>
            <h2>24.08.2019</h2>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

// <h1>Mausehochzeit</h1>
//<h2>Save the Date: 24.08.2019</h2>
