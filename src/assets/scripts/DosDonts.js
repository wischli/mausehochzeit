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
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checklist from './Checklist.js';
import { Check, Close } from '@material-ui/icons';


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
            subheader=""
          />
          <CardContent>
            <div class="dosDonts">
              <div class="leftSide">
                <h2>Do's</h2>
                <ul>
                  <li><Check /><span className="text">Zeit zum Durchatmen</span></li>
                  <li><Check /><span className="text">Spaß & Vergnügen</span></li>
                  <li><Check /><span className="text">Tanz und Partylaune</span></li>
                  <li><Check /><span className="text">Pastellige & gedeckte Farben (sieht auf Fotos einfach zauberhaft aus)</span></li>
                </ul>
            </div>
              <div class="rightSide">
                <h2>Donts's</h2>
                <ul>
                  <li><Close /><span className="text">Zu viel Progamm</span></li>
                  <li><Close /><span className="text">Überraschungen, die nicht mit den Trauzeugen abgesprochen sind</span></li>
                  <li><Close /><span className="text">Schlagermusik wie Helene Fischer</span></li>
                  <li><Close /><span className="text">Knallige Farben, weiß oder schwarz (außer bei Herrenanzügen)</span></li>
                </ul>
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
              Checkliste für alle ersten Besucher
            </Button> : ''}
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Checklist />
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

DosDonts.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(DosDonts);
