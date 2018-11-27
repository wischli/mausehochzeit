import { stack as Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import icon from '../../images/mouse-black-animal.svg';

// export default props => {
//   return (
//     // Pass on our props
//     <Menu {...props}>
//       <a className="menu-item" href="/">
//         Wichtigste Fakten
//       </a>
//
//       <a className="menu-item" href="/burgers">
//         Anfahrt
//       </a>
//
//       <a className="menu-item" href="/pizzas">
//         Was ist zu beachten?
//       </a>
//
//       <a className="menu-item" href="/desserts">
//         Kevin Olaf
//       </a>
//     </Menu>
//   );
// };

class MyMenu extends React.Component {
  render () {
    return (
      <Menu isOpen={ true } customBurgerIcon={ <img src={icon} /> } pageWrapId={ "menuPageWrap" } outerContainerId={ "menuOuterContainer" }>
        <a className="menu-item" href="/">
          Wichtigste Fakten
        </a>

        <a className="menu-item" href="/burgers">
          Anfahrt
        </a>

        <a className="menu-item" href="/pizzas">
          Was ist zu beachten?
        </a>

        <a className="menu-item" href="/desserts">
          Kevin Olaf
        </a>

        <a className="menu-item" href="/desserts">
          Nummer 5
        </a>

        <a className="menu-item" href="/desserts">
          Nummer 6
        </a>
      </Menu>
    );
  }
}

export default MyMenu;
