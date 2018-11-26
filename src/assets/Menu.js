import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div className="Menu">
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Mause-Navigation
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Anfahrt</MenuItem>
          <MenuItem onClick={this.handleClose}>Unterkunft</MenuItem>
          <MenuItem onClick={this.handleClose}>Was ist zu beachten?</MenuItem>
          <MenuItem onClick={this.handleClose}>Welche Farben sind in Ordnung?</MenuItem>
          <MenuItem onClick={this.handleClose}>Grober Zeitplan?</MenuItem>
          <MenuItem onClick={this.handleClose}>Kevin Olaf?</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
