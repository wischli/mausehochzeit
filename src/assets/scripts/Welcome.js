import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
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

class Welcome extends React.Component {
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
            title="Aktuelles"
            subheader="8.12.18 - Willkommen"
          />
          <CardContent>
            <div className="welcome-card">
              <div className="welcome-1">
                Wir können ihn kaum erwarten…
                Aber um den Tag der Tage für und mit euch am besten zu planen, habt ihr auf dieser Seite die Möglichkeit alle wichtigen Informationen abzustauben und mit uns abzustimmen. <strong>Dafür wäre es großartig, wenn ihr an unserer kleinen Umfrage teilnehmt</strong>.
                Da wir erst am Anfang der Planung stehen, wird sich die Seite nach und nach mit weiteren, konkreteren Infos füllen. Also schaut ruhig immer mal vorbei und lasst euch die neuesten Mause-News nicht entgehen.
              </div>
              <div className="welcome-2">
                Ihr könnt uns und die Trauzeugen natürlich jederzeit ansprechen, wenn ihr Fragen, Ideen oder Anregungen habt.
              </div>
              <div className="welcome-3">
                Liebst,<br />
                William & Charline
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Welcome);
