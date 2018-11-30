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


import { LocalParking, Train, LocationOn, TimeToLeave, Favorite, Pets, Schedule, Call, Format_list_numbered, Place, Smoke_free } from '@material-ui/icons';

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
      <div>
        <Card className={classes.card}>
          <CardHeader
            title="Farbanregungen"
            subheader="Gedeckte Farben"
          />
          <CardContent>
            <Typography component="p">
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
            </Typography>
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
              Zeige unpassende Farben
            </Button> : ''}
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>
                <div className="mui--text-title">Unpassende Farben</div>
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
              </Typography>
            </CardContent>
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
