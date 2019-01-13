import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Iframe from 'react-iframe';
import Fade from 'react-reveal/Fade';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';

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
  button: {
    margin: '10px auto',
    width: '90%',
    color: '#f9fafa !important',
    backgroundColor: '#81938a',
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
            subheader="12.01.2019 - Willkommen liebe Gäste"
          />
          <CardContent>
            <div className="welcome-card">
              <div className="welcome-1">
                Wir können ihn kaum erwarten…
                Aber um den Tag der Tage für und mit euch am besten zu planen, habt ihr auf dieser Seite die Möglichkeit alle wichtigen Informationen abzustauben und mit uns abzustimmen. <strong>Dafür wäre es großartig, wenn ihr an unserer kleinen Umfrage (nur 5 kurze Fragen) teilnehmt</strong>.
                Da wir erst am Anfang der Planung stehen, wird sich die Seite nach und nach mit weiteren, konkreteren Infos füllen. Also schaut ruhig immer mal vorbei und lasst euch die neuesten Mause-News nicht entgehen.
              </div>
              <div className="welcome-2">
                Ihr könnt uns und die Trauzeugen natürlich jederzeit ansprechen, wenn ihr Fragen, Ideen oder Anregungen habt.
              </div>
              <div className="welcome-3" id="survey">
                Liebst,<br />
                William & Charline
              </div>
            </div>
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
              { !this.state.expanded ? 'Öffne & beantworte die Umfrage' : ''}
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <Fade left>
              <Iframe url="https://goo.gl/forms/aEKZI3YXlngHgD3C3"
                width="100%"
                height="400px"
                id="surveyIframe"
                className="survey-class"
                display="initial"
                position="relative"
                allowFullScreen/>
              <div style={{lineHeight: '110%', padding: '10px 10px 0'}}>Gibt es Probleme mit der Umfrage? Dann öffne diese Umfrage in einem neuen (eigenen) Fenster, per Klick auf den Button:</div>
              <Button className={classes.button} variant="contained" href="https://goo.gl/forms/aEKZI3YXlngHgD3C3" target="_blank" rel="noopener noreferrer">
                Öffne Umfrage in neuem Fenster
              </Button>
            </Fade>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Welcome);
