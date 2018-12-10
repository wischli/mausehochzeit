import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { CheckCircle, Cancel } from '@material-ui/icons';
import Fade from 'react-reveal/Fade';

const styles = theme => ({
  card: {
    margin: 10,
    lineHeight: '140%',
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

class DosDonts extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            title="Unsere Wünsche"
            subheader="Bitte beachten"
          />
          <CardContent>
            <div className="dosDonts">
              <Fade left>
                <div>
                  <div className="leftSide">
                  <h2>Do's</h2>
                  <ul>
                    <Fade left><li><CheckCircle /><span className="text">Zeit zum Durchatmen</span></li></Fade>
                    <li><CheckCircle /><span className="text">Spaß & Vergnügen</span></li>
                    <li><CheckCircle /><span className="text">Tanz und Partylaune</span></li>
                    <li><CheckCircle /><span className="text">Festliche Garderobe in pastelligen & gedeckten Farben (sieht auf Fotos einfach zauberhaft aus)</span></li>
                  </ul>
              </div>
                </div>
              </Fade>
              <Fade right>
                <div>
                  <div className="rightSide">
                    <h2>Dont's</h2>
                    <ul>
                      <li><Cancel /><span className="text">Zu viel Progamm</span></li>
                      <li><Cancel /><span className="text">Überraschungen, die nicht mit den Trauzeugen abgesprochen sind</span></li>
                      <li><Cancel /><span className="text">Schlagermusik wie Helene Fischer</span></li>
                      <li><Cancel /><span className="text">Knallige Farben, weiß oder schwarz (außer bei Herrenanzügen)</span></li>
                    </ul>
                </div>
                </div>
              </Fade>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

DosDonts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DosDonts);
