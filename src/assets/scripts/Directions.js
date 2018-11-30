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
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { BrowserView, MobileView } from "react-device-detect";
import scheuneBuckow from '../../images/StadtscheuneBuckow.webp';
import scheuneBuckow2 from '../../images/StadtscheuneBuckow2.webp';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';




import { LocalParking, Train, LocationOn, TimeToLeave, Favorite, Pets, Schedule, Call, Format_list_numbered, Place, Smoke_free } from '@material-ui/icons';

const styles = theme => ({
  card: {
    maxWidth: 1000,
    margin: 10,
    [theme.breakpoints.up('lg')]: {
      width: 1000,
    },
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
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
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
        <Card className={classes.card}>
          <CardHeader
            title="Die Hochzeitslocation"
            subheader="Stadtscheune Buckow (Märkische Schweiz)"
          />
          <BrowserView viewClassName="smaller-image"><img src={scheuneBuckow2} className="imageHeader"/></BrowserView>
          <MobileView><img src={scheuneBuckow} /></MobileView>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9699.399298433606!2d14.072156!3d52.572327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef75d65cbafa2407!2sStadtscheune+Buckow!5e0!3m2!1sen!2sde!4v1543577150211" width="100%" height="100" frameborder="0" allowfullscreen></iframe>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
            { !this.state.expanded ?
            <Button size="small" color="primary">
              Zeige Infos
            </Button> : ''}
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
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
    <div className="space-between">
    Dauer: Etwa 50min
    <a href="https://www.google.com/maps/dir//52.572327,14.072156/@52.572327,14.072156,14z?hl=de-DE">hier Route berechnen</a>
    </div>
    </ListItemText>
  </ListItem>
  <Divider light />
  <ListItem button>
    <ListItemIcon>
      <Train />
    </ListItemIcon>
    <ListItemText>
    <div className="space-between">
      Dauer: Etwa 90min
      <a href="https://www.google.com/maps/dir//52.572327,14.072156/@52.5723334,14.0677786,16z/data=!3m1!4b1!4m2!4m1!3e3?hl=de-DE">hier Route berechnen</a>
    </div>
    <span className="text-grey">Regio RB26 bis Müncheberg, dann Bus 928 bis Buckow</span>
    </ListItemText>
  </ListItem>
</List>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Directions.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Directions);
