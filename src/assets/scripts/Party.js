import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Fade from "react-reveal/Fade";
import {
  LooksOne,
  LooksTwo,
  Looks3,
  Looks4,
  Looks5,
  MusicNote,
  Mood,
  LocalDining
} from "@material-ui/icons";

const styles = theme => ({
  card: {
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

class Party extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
      <Fade>
        <div id="timeline">
          <Card className={classes.card}>
            <CardHeader title="Wie wird gefeiert?" subheader="" />
            <CardContent>
              <div className="Party-card">
                <div className="Party-1">
                  Unsere Hochzeit soll im Stil von Wald, Natur und Shabby Chic
                  sein. Also da, wo sich Kleintiere am wohlsten fühlen.
                </div>
              </div>
              <div>
                <h2>Der grobe Ablauf</h2>
                <List component="nav" className={classes.root}>
                  <ListItem button divider>
                    <ListItemIcon>
                      <LooksOne />
                    </ListItemIcon>
                    <ListItemText primary="11:00 - Freie Trauung" />
                  </ListItem>
                  <ListItem button divider>
                    <ListItemIcon>
                      <LooksTwo />
                    </ListItemIcon>
                    <ListItemText primary="11:30 - Anstoßen unter Freudentränen" />
                  </ListItem>
                  <ListItem button divider>
                    <ListItemIcon>
                      <Looks3 />
                    </ListItemIcon>
                    <ListItemText>12:00 - Zeit für Fotos</ListItemText>
                  </ListItem>
                  <ListItem button divider>
                    <ListItemIcon>
                      <Looks4 />
                    </ListItemIcon>
                    <ListItemText>14:30 - Kaffeetrinken</ListItemText>
                  </ListItem>
                  <ListItem button divider>
                    <ListItemIcon>
                      <Looks5 />
                    </ListItemIcon>
                    <ListItemText>16:00 - Zeit für Programm</ListItemText>
                  </ListItem>
                  <ListItem button divider>
                    <ListItemIcon>
                      <LocalDining />
                    </ListItemIcon>
                    <ListItemText>17:30 - Abendessen</ListItemText>
                  </ListItem>
                  <ListItem button divider>
                    <ListItemIcon>
                      <MusicNote />
                    </ListItemIcon>
                    <ListItemText>
                      19:00 - Hochzeitstanz & Livemusik der River Rats
                    </ListItemText>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <Mood />
                    </ListItemIcon>
                    <ListItemText>21:00 - Partyyyyyyy</ListItemText>
                  </ListItem>
                </List>
                <p>
                  Lasst uns einen entspannten Tag miteinander verbringen!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Fade>
    );
  }
}

Party.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Party);
// export default Party;
