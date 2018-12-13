import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from './ExpansionPanel';
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

class Accomodation extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="unterkunft">
        <Card className={classes.card}>
          <Fade>
          <CardHeader
            title="Unterkünfte"
            subheader="In Buckow"
          />
          <CardContent>
            <div>
              <div className="Party-card">
                <div className="Party-1">
                Wir haben hier eine kleine Auswahl an Übernachtungsmöglichkeiten mit den nötigsten Informationen zusammengestellt.
                Die Preise sind nur ungefähre Orientierungen und können je nach Reisezeitraum und Personenanzahl variieren.
                </div>
              </div>
              <ExpansionPanel />
            </div>
          </CardContent>
          </Fade>
        </Card>
      </div>
    );
  }
}

Accomodation.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Accomodation);
