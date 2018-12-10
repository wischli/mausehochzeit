import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import Person from '@material-ui/icons/Person';
import Group from '@material-ui/icons/Group';
import Add from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import Home from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import Flip from 'react-reveal/Flip';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 20,
    background: 'transparent',
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#ecf0ee',
    minWidth: 200,
  },
  headingWrapper : {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    background: 'transparent',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    alignItems: 'center',
    display: 'flex',
  },
  panel: {
    background: '#ffffff7a',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <Flip left>
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.headingWrapper}>
              <div className={classes.heading}><DirectionsWalk /> 3min</div>
              <div className={classes.secondaryHeading}>Strandhotel Buckow</div>
            </div>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails>
            <div className="accomodation-expansion">
              <div className="row"><Person /> ab 65€ pro Nacht</div>
              <div className="row"><Group /> ab 89€ pro Nacht</div>
              <div className="row"><Add />Frühstuck inklusive</div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.headingWrapper}>
              <div className={classes.heading}><DirectionsWalk />5min</div>
              <div className={classes.secondaryHeading}>Strandhotel Vierjahreszeiten</div>
            </div>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails>
            <div className="accomodation-expansion">
              <div className="row"><Person /> ab 55€ pro Nacht</div>
              <div className="row"><Group /> ab 75€ pro Nacht</div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')} className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.headingWrapper}>
            <div className={classes.heading}><DirectionsWalk />10min</div>
            <div className={classes.secondaryHeading}>Hotel & Restaurant Märkische Schweiz</div>
          </div>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>
          <div className="accomodation-expansion">
            <div className="row"><Person /> ab 50€ pro Nacht</div>
            <div className="row"><Group /> ab 85€ pro Nacht</div>
            <div className="row"><Add />Frühstuck inklusive</div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')} className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.headingWrapper}>
            <div className={classes.heading}><DirectionsWalk />15min</div>
            <div className={classes.secondaryHeading}>Hotel & Restaurant Bergschlösschen</div>
          </div>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>
          <div className="accomodation-expansion">
            <div className="row"><Person /> ab 65€ pro Nacht</div>
            <div className="row"><Group /> ab 95€ pro Nacht</div>
            <div className="row"><Add />Frühstuck inklusive</div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')} className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.headingWrapper}>
            <div className={classes.heading}><DirectionsWalk />10min</div>
            <div className={classes.secondaryHeading}>Gartenhaus Villa Walnuss</div>
          </div>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>
          <div className="accomodation-expansion">
            <div className="row"><Home />Platz für ca. 4 Personen</div>
            <div className="row"><EuroSymbol />ca. 52€ pro Person für 2 Nächte</div>
            <Button variant="contained" color="primary" className={classes.button} href="https://www.airbnb.de/rooms/23013478?location=Buckow%20M%C3%A4rkische%20Schweiz&check_in=2019-08-23&check_out=2019-08-25&s=88huQPYW&guests=4&adults=4" target="_blank">
              Zur Unterkunft
            </Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')} className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.headingWrapper}>
            <div className={classes.heading}><DirectionsWalk />10min</div>
            <div className={classes.secondaryHeading}>Apartment Esche</div>
          </div>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>
          <div className="accomodation-expansion">
            <div className="row"><Home />Platz für ca. 4 Personen</div>
            <div className="row"><EuroSymbol />ca. 64€ pro Person für 2 Nächte (= Mindestaufenthalt)</div>
            <Button variant="contained" color="primary" className={classes.button} href="https://www.airbnb.de/rooms/24483368?location=Buckow%20M%C3%A4rkische%20Schweiz&check_in=2019-08-23&check_out=2019-08-25&s=88huQPYW" target="_blank">
              Zur Unterkunft
            </Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')} className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.headingWrapper}>
            <div className={classes.heading}><DirectionsWalk />30min</div>
            <div className={classes.secondaryHeading}>DJH Jugendherberge Buckow</div>
          </div>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>
          <div className="accomodation-expansion">
            <div className="row"><Person />ca. 25€ pro Nacht</div>
            <div className="row"><Group />ca. 55€ pro Nacht</div>
            <Button variant="contained" color="primary" className={classes.button} href="https://www.jugendherberge.de/jugendherbergen/buckow-608/portraet/" target="_blank">
              Zur Unterkunft
            </Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
      </Flip>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
