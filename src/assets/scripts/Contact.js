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
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


import { ContactMail } from '@material-ui/icons';

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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class Contact extends React.Component {
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
            title="Die Trauzeugen"
            subheader="Anne & Jonathan"
          />
          <CardContent>
          <div>
            <div className="Party-card">
              <div className="Party-1">
                Unsere Trauzeugen haben den imaginären Mause-Hut auf, wenn es um die Planung des Programms und allgemeine Anliegen geht.
                Wenn es also Dinge gibt, von denen wir nichts wissen sollen, dann sind sie eure Ansprechpartner.
              </div>
            </div>
            <div className="email-wrapper">
              <div className="email-to">
                <ContactMail />Anne Kasten
              </div>
              <div className="email-to">
                <ContactMail />Jonathan Thüringer
              </div>
            </div>
            <div className={classes.root}>
  <List component="nav">
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </List>
  <Divider />
  <List component="nav">
    <ListItem button>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItemLink href="#simple-list">
      <ListItemText primary="Spam" />
    </ListItemLink>
  </List>
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
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Contact);
