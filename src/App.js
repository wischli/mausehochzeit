import React, { Component } from 'react';
import logo from './images/forest.jpg';
import './App.css';
import './assets/styles/Menu.css';
import Button from '@material-ui/core/Button';
// import Menu from './assets/Menu';
import Menu from './assets/scripts/Menu2';

class App extends Component {
  render() {
    return (
      <div id="outer-container" className="App">
        <Menu isOpen={ true } id={ "sidebar" } className={ "my-menu" }pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={ 300 }/>
        <main id="page-wrap">
          <header className="App-header">
            <div className="wrapper">
              <img src={logo} className="App-logo" width="100%" height="100%" alt="logo" />
              <div className="overlay">
                <h1>Mausehochzeit</h1>
                <h2>Save the Date: 24.08.2019</h2>
              </div>
            </div>
          </header>
        </main>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Menu />
//           <div className="wrapper">
//             <img src={logo} className="App-logo" width="100%" height="100%" alt="logo" />
//             <div className="overlay">
//               <h1>Mausehochzeit</h1>
//               <h2>Save the Date: 31.08.2019</h2>
//             </div>
//           </div>
//         </header>
//         <div id="root"></div>
//         <Button variant="contained" color="primary">
//           Hello World
//         </Button>
//       </div>
//     );
//   }
// }

export default App;
