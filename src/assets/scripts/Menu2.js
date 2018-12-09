import { stack as Menu } from 'react-burger-menu';
import React from 'react';
import icon from '../../images/mouse-black-animal.svg';
import '../styles/Menu.css';
import "./Test.css";
import { Favorite, Pets, Schedule, Call, Format_list_numbered, Place, Smoke_free } from '@material-ui/icons';

class MyMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuItems : [],
      isOpen : false,
    };
  }
  componentDidMount(){
      this.setState({
        menuItems : [
          {
            href : '#',
            title : 'Anfahrt'
          },
          {
            href : '#',
            title : 'Was ist zu beachten?'
          },
          {
            href : '#',
            title : 'Unterkünfte'
          },
          {
            href : '#',
            title : 'Ablauf'
          },
          {
            href : '#',
            title : 'Programm'
          },
          {
            href : '#',
            title : 'Welche Farben sind okay?'
          },
        ],
        isOpen : false,
      });
  }

  renderMenuItems = (state) => {
    return this.state.menuItems.map(item => {
      return <a className="menu-item" key={item.title} href={item.href}><Favorite />{item.title}</a>;
    });
  };

  isMenuOpen = (state) => {
    const stateIsOpen = this.state.isOpen;
    this.setState({
      isOpen: !stateIsOpen,
    });
    return state.isOpen;
  }

  render () {
    return (
      <Menu
        onStateChange={ this.isMenuOpen }
        onClick={ "" }
        customBurgerIcon={ <img src={icon} alt="Menu" /> }
        burgerButtonClassName={ this.state.isOpen ? 'menuOpen' : '' }
        pageWrapId={ "menuPageWrap" }
        outerContainerId={ "menuOuterContainer" }>
          {this.renderMenuItems()}
          <div className="menu-header">Menu</div>
      </Menu>
    );
  }
}

export default MyMenu;
