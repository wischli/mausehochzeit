import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import DesktopTeaser from "../../images/MausehochzeitTeaser_desktop.jpg";
import MobileTeaser from "../../images/MausehochzeitTeaser_mobile_2.jpg";

const dateDiff = () => {
  const t1 = new Date("Sat Aug 24 2019 11:00:00 GMT+0200");
  const t2 = new Date();
  // const days = return parseInt((t2-t1)/(24*3600*1000));
  // const hours = return parseInt((t2-t1)/(24*3600*1000));
  const diffMS = t1 - t2;
  const diffS = Math.abs(diffMS / 1000);
  const diffM = Math.abs(diffS / 60);
  const diffH = Math.abs(diffM / 60);
  const diffD = Math.abs(diffH / 24);
  const [days, hours, minutes] = [diffD, diffH % 24, diffM % 60].map(value =>
    Math.floor(value)
  );
  const str = {
    days: `${days < 0 ? "vor" : "noch"} ${days} Tage${
      days < 0 ? "n" : ""
    }`,
    hours: `${hours} Stunden`,
    minutes: `${minutes} Minuten`,
  };
  return window.innerWidth < 1000 ? `${str.days} und ${str.hours}` : `${str.days}, ${str.hours} und ${str.minutes}`;
};

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
            <h2 style={{ marginBottom: 0 }}>24.08.2019</h2>
            <div
              className="dateDiff"
              style={{
                fontSize: window.innerWidth < 1000 ? 22 : 34,
                color: "#f3feffe6",
                fontFamily: '"Shadows Into Light", cursive',
                fontWeight: "bold",
                position: 'absolute',
                top: 0,
                width: '100%',
                height: 100,
                background: 'linear-gradient(180deg, #4c5e59, transparent)',
                // backgroundColor: window.innerWidth < 1000 ? '#495d5880' : 'none',
              }}
            >
              {dateDiff()}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

// <h1>Mausehochzeit</h1>
//<h2>Save the Date: 24.08.2019</h2>
