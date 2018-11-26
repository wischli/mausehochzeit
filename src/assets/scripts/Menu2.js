import { push as Menu } from 'react-burger-menu';
import React, { Component } from 'react';

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

class Example extends React.Component {
  render () {
    return (
      <Menu>
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
      </Menu>
    );
  }
}

export default Example;
