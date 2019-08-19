import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { LocalParking, LocationOn, TimeToLeave, Train } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Fade from 'react-reveal/Fade';

const styles = theme => ({
  card: {
    maxWidth: 1000,
    margin: 10,
    [theme.breakpoints.up('lg')]: {
      width: 1000,
    },
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#ecf0ee',
    padding: 5,
    textAlign: 'center',
    marginRight: -20,
    lineHeight: '140%',
  },
  h2: {
    marginTop: 0,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    paddingBottom: 0,
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
  root: {
    width: '100%',
    borderRadius: 5,
  },
});

class Directions extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
            >
            { !this.state.expanded ? 'Öffne die Umfrage' : ''}
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <Fade left>
            <CardContent>
              <h2 className={classes.h2}>Die wichtigsten Infos zur Anreise</h2>
              <List component="nav" className={classes.root}>
                <ListItem button>
                  <ListItemIcon>
                    <LocationOn />
                  </ListItemIcon>
                  <ListItemText primary="Am Schlosspark 3, 15377 Buckow" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <ListItemIcon>
                    <LocalParking />
                  </ListItemIcon>
                  <ListItemText primary="Genügend direkte Parkplätze vorhanden" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <TimeToLeave />
                  </ListItemIcon>
                  <ListItemText>
                    <div className="space-between align-center">
                      Dauer: Etwa 50min
                        <Button variant="contained" color="primary" className={classes.button} href="https://www.google.com/maps/dir//52.572327,14.072156/@52.572327,14.072156,14z?hl=de-DE/" target="_blank" rel="noopener noreferrer">
                          Route berechnen
                        </Button>
                    </div>
                  </ListItemText>
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemIcon>
                    <Train />
                  </ListItemIcon>
                  <ListItemText>
                    <div className="space-between align-center">
                      Dauer: Etwa 90min
                        <Button variant="contained" color="primary" className={classes.button} href="https://www.google.com/maps/dir//52.572327,14.072156/@52.5723334,14.0677786,16z/data=!3m1!4b1!4m2!4m1!3e3?hl=de-DE" target="_blank" rel="noopener noreferrer">
                          Route berechnen
                        </Button>
                    </div>
                    <span className="text-grey">Regio RB26 bis Müncheberg, dann Bus 928 bis Buckow</span>
                  </ListItemText>
                </ListItem>
              </List>
            </CardContent>
          </Fade>
        </Collapse>
      </div>
    );
  }
}

Directions.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Directions);
