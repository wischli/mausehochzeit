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
            title="Willkommen"
            subheader="Neuigkeiten"
          />
          <CardContent>
            <div class="welcome-card">
              <div class="welcome-1">
                Wir können ihn kaum erwarten…
                Aber um den Tag der Tage für und mit euch am besten zu planen, habt ihr auf dieser Seite die Möglichkeit alle wichtigen Informationen abzustauben und mit uns abzustimmen. <strong>Dafür wäre es großartig, wenn ihr an unserer kleinen Umfrage teilnehmt</strong>.
                Da wir erst am Anfang der Planung stehen, wird sich die Seite nach und nach mit weiteren, konkreteren Infos füllen. Also schaut ruhig immer mal vorbei und lasst euch die neuesten Mause-News nicht entgehen.
              </div>
              <div class="welcome-2">
                Ihr könnt uns und die Trauzeugen natürlich jederzeit ansprechen, wenn ihr Fragen, Ideen oder Anregungen habt.
              </div>
              <div class="welcome-3">
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

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Welcome);
