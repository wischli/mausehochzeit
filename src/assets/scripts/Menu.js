import { stack as Menu } from 'react-burger-menu';
import React from 'react';
import icon from '../../images/mouse-black-animal.svg';
import '../styles/Menu.css';
import { FormatListNumbered, Schedule, Palette, LocalHotel, Place, Info, AddComment } from '@material-ui/icons';
import { Link} from 'react-scroll'

class MyMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuItems : [
        {
          href : '#survey',
          title : 'Umfrage',
          icon: <FormatListNumbered />
        },
        {
          href : '#location',
          title : 'Die Location',
          icon: <Place />
        },
        {
          href : '#dosDonts',
          title : 'Zu beachten',
          icon: <Info />
        },
        {
          href : '#timeline',
          title : 'Ablauf',
          icon: <Schedule />
        },
        {
          href : '#colors',
          title : 'Kleidung und Farben',
          icon: <Palette />
        },
        {
          href : '#program',
          title : 'Programmideen',
          icon: <AddComment />
        },
        {
          href : '#unterkunft',
          title : 'Schlafen in der Umgebung',
          icon: <LocalHotel />
        },
      ],
      isOpen : false,
      menuOpen: false,
    };
  }

  renderMenuItems = (state) => {
    return this.state.menuItems.map(item => {
      return <Link onClick={() => this.closeMenu()} className="menu-item" key={item.title} offset={-10} activeClass="active" to={item.href.replace('#','')} smooth={true} duration={900} delay={350}>{item.icon ? item.icon : ''}<div className="menu-text" style={{flex: 1}}>{item.title}</div></Link>;
    });
  };

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render () {
    return (
      <Menu
        isOpen = {this.state.menuOpen}
        onStateChange={ (state) => this.handleStateChange(state) }
        customBurgerIcon={ <img src={icon} alt="Menu" /> }
        burgerButtonClassName={ this.state.menuOpen ? 'menuOpen' : '' }
        pageWrapId={ "menuPageWrap" }
        outerContainerId={ "menuOuterContainer" }>
        {this.renderMenuItems()}
          <div onClick={this.isMenuOpe} className="menu-header">Menu</div>
      </Menu>
    );
  }
}

export default MyMenu;
