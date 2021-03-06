import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import { LocalParking, LocationOn, TimeToLeave, Train } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Iframe from "react-iframe";
import scheuneBuckow from "../../images/StadtscheuneBuckow.jpg";
import scheuneBuckow2 from "../../images/StadtscheuneBuckow2.jpg";

const styles = theme => ({
  card: {
    maxWidth: 1000,
    margin: 10,
    [theme.breakpoints.up("lg")]: {
      width: 1000
    }
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#ecf0ee",
    padding: 5,
    textAlign: "center",
    marginRight: -20,
    lineHeight: "140%"
  },
  h2: {
    marginTop: 0
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex",
    paddingBottom: 0
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
  },
  root: {
    width: "100%",
    borderRadius: 5
  },
  MuiListItemIcon: {}
});

const iframeHeight = window.innerWidth < 1000 ? "300px" : "450px";

class Directions extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="location">
        <Card className={classes.card}>
          <CardHeader
            title="Die Hochzeitslocation"
            subheader="Stadtscheune Buckow in der Märkischen Schweiz"
          />
          <BrowserView>
            <img
              src={scheuneBuckow2}
              className="barn-desktop"
              alt="scheune-buckow"
            />
          </BrowserView>
          <MobileView>
            <img
              src={scheuneBuckow}
              className="barn-mobile"
              alt="scheune-buckow"
            />
          </MobileView>
          <CardContent>
            <p>
              Wir verbringen den{" "}
              <strong>
                gesamten Hochzeitstag auf dem bezaubernden Gelände der
                Stadtscheune Buckow
              </strong>
              . Hier findet sowohl die freie Trauung, als auch die
              feuchtfröhliche Feier im Anschluss statt. Die Fahrtzeit beträgt
              bei Anreise mit Auto etwa 1h und mit den Öffentlichen etwa 1,5h.
            </p>
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
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      href="https://www.google.com/maps/dir//52.572327,14.072156/@52.572327,14.072156,14z?hl=de-DE/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      href="https://www.google.com/maps/dir//52.572327,14.072156/@52.5723334,14.0677786,16z/data=!3m1!4b1!4m2!4m1!3e3?hl=de-DE"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Route berechnen
                    </Button>
                  </div>
                  <span className="text-grey">
                    Regio RB26 bis Müncheberg, dann Bus 928 bis Buckow
                  </span>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d310381.9891702643!2d13.450401183379793!3d52.5722713892324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef75d65cbafa2407!2sStadtscheune+Buckow!5e0!3m2!1sde!2sde!4v1547156121602"
            width="100%"
            height={iframeHeight}
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
          {/* <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              {!this.state.expanded ? "Zeige mir weitere Infos" : ""}
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <Fade left>
              <CardContent className="directions-expanded" />
            </Fade>
          </Collapse> */}
        </Card>
      </div>
    );
  }
}

Directions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Directions);
