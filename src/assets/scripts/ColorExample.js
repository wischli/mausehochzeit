import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const styles = theme => ({
  card: {
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class ColorExample extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="colors">
        <Card className={classes.card}>
          <CardHeader
            title="Farbanregungen"
            subheader="Gedeckte Farben"
          />
          <CardContent>
            <div>
              Wir würden uns sehr darüber freuen, wenn die Gäste in festlicher Garderobe und nicht einfach mit Jeans und abgenutzten Sneakern erscheinen würden.
              Das soll nicht heißen, dass beispielsweise alle Männer im Anzug kommen müssen, eine schlichte schicke Chino und Hemd, ggfs noch mit Fliege, ist für uns schon festlich!
            </div>
            <div style={{marginTop: 10}}>
              Wichtiger sind für uns jedoch die Farben eurer Kleidungsstücke, damit tollen Aufnahmen nichts im Wege steht und niemand außer dem Brautpaar heraussticht.
              Daher bitten wir euch, auf gedeckte & pastellige Farben zurückzugreifen. Als Inspiration hier mal ein paar Farbbeispiele:
            </div>
            <Flip right style={{marginTop: 10}}>
              <div className="colorRows">
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
                <div className="colorRow"></div>
              </div>
            </Flip>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
            { !this.state.expanded ? 'Zeige unpassende Farben' : ''}
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <Fade left>
            <CardContent>
                <h2>Unpassende Farben</h2>
                <div className="colorBlocks">
                  <div className="colorBlock"></div>
                  <div className="colorBlock"></div>
                  <div className="colorBlock"></div>
                  <div className="colorBlock"></div>
                  <div className="colorBlock"></div>
                  <div className="colorBlock"></div>
                  <div className="colorBlock"></div>
                  <div className="colorBlock"></div>
                  <div className="colorBlock"></div>
                </div>
            </CardContent>
            </Fade>
          </Collapse>
        </Card>
      </div>
    );
  }
}

ColorExample.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ColorExample);
