import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText   from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { LooksOne, LooksTwo, Looks3, Looks4, Looks5, Looks6, MusicNote, Pets, BatteryChargingFull } from '@material-ui/icons';

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

class Party extends React.Component {
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
            title="Wie wird gefeiert?"
            subheader=""
          />
          <CardContent>
            <div className="Party-card">
              <div className="Party-1">
                Unsere Hochzeit soll im Stil von Wald, Natur und Shabby Chic sein.
                Also da, wo sich Kleintiere am wohlsten fühlen.
                Daher würden wir uns über jegliche Einflüsse, Mitbringsel und Co. in dieser Richtung freuen.
              </div>
              <div className="Party-2">
                Lasst uns einen entspannten Tag miteinander verbringen!
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
            { !this.state.expanded ?
            <Button size="small" color="primary">
              Der grobe Ablauf
            </Button> : ''}
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <h2>Der grobe Ablauf</h2>
              <List component="nav" className={classes.root}>
                <ListItem button divider>
                  <ListItemIcon>
                    <LooksOne />
                  </ListItemIcon>
                  <ListItemText primary="Freie Trauung (ca. 11 Uhr)" />
                </ListItem>
                <ListItem button divider>
                  <ListItemIcon>
                    <LooksTwo />
                  </ListItemIcon>
                  <ListItemText primary="Anstoßen unter Freudentränen" />
                </ListItem>
                <ListItem button divider>
                  <ListItemIcon>
                    <Looks3 />
                  </ListItemIcon>
                  <ListItemText>
                    Zeit für Fotos
                  </ListItemText>
                </ListItem>
                <ListItem button divider>
                  <ListItemIcon>
                    <Looks4 />
                  </ListItemIcon>
                  <ListItemText>
                    Kaffeetrinken
                  </ListItemText>
                </ListItem>
                <ListItem button divider>
                  <ListItemIcon>
                    <Looks5 />
                  </ListItemIcon>
                  <ListItemText>
                    Zeit für Programm
                  </ListItemText>
                </ListItem>
                <ListItem button divider>
                  <ListItemIcon>
                    <MusicNote />
                  </ListItemIcon>
                  <ListItemText>
                    (Livemusik)
                  </ListItemText>
                </ListItem>
                <ListItem button divider>
                  <ListItemIcon>
                  <BatteryChargingFull/>
                  </ListItemIcon>
                  <ListItemText>
                    Abendessen
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Pets />
                  </ListItemIcon>
                  <ListItemText>
                    Partyyyyyyy
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

Party.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Party);
