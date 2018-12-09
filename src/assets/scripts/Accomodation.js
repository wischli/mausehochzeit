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
import Email from '@material-ui/icons/Email';
import ExpansionPanel from './ExpansionPanel';


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

class Accomodation extends React.Component {
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
            title="Unterkünfte"
            subheader="In Buckow"
          />
          <CardContent>
            <div>
              <div className="Party-card">
                <div className="Party-1">
                Wir haben hier eine kleine Auswahl an Übernachtungsmöglichkeiten zusammengestellt.
                Die Preise sind nur ungefähre Orientierungen und können je nach Reisezeitraum und Personenanzahl variieren.
                </div>
              </div>
              <ExpansionPanel />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Accomodation.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Accomodation);
