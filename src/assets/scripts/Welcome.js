import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Iframe from "react-iframe";
import Fade from "react-reveal/Fade";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Wc from "@material-ui/icons/Wc";
import classnames from "classnames";

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
  button: {
    margin: "10px auto",
    width: "90%",
    color: "#f9fafa !important",
    backgroundColor: "#81938a"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
});

const welcomeCardStyle = {
  lineHeight: "130%", padding: window.innerWidth < 800 ? '20px 20px 0' : '30px 30px 0'
}

const news = [
  <div className="welcome-card" style={welcomeCardStyle}>
    <div>
      Aiaiaiaiaia, bald ist er da! Und wir müssen gar nicht mehr so lange
      warten, bis wir unseren schönsten Tag mit euch verbringen dürfen. Wir
      möchten uns an dieser Stelle bereits für eure riesengroße Anteilnahme
      bedanken, die ihr uns alle bisher entgegengebracht habt. Das lässt unsere
      Vorfreude nur noch größer werden! Nun müssen allmählich die Details
      geplant werden...{" "}
    </div>
    <div>
      <strong>
        Zunächst bitten wir diejenigen, die uns noch keine finale Zusage geben
        können, sich bei uns zu melden, da wir der Stadtscheune die exakte
        Gästeanzahl mitteilen müssen.
      </strong>
    </div>

    <div>
      Außerdem hoffen wir, dass ihr alle eine nette <strong>Unterkunft</strong>{" "}
      gefunden habt.
    </div>
    <div style={{paddingTop: 15, borderTop: '1px solid #b1cac2'}}>Zuletzt noch ein paar nützliche Informationen für euch:
    </div>
    <div style={{paddingBottom: 5, display: 'flex', flexDirection: window.innerWidth < 800 ? 'column' : 'row', alignItems: 'center'}}>
      <Wc style={{marginBottom: window.innerWidth < 800 ? 10 : 0, marginRight: 20, padding: 5, background: '#6f8781', color: 'white', borderRadius: '100%'}} />
      <p style={{margin: 0}}>
        Wir werden am Freitag mit dem Aufbau in der Location beginnen. Am
        Hochzeitstag beginnt das Spektakel um <strong>11 Uhr</strong> mit der
        freien Trauung im <strong>Garten der Stadtscheune</strong>. Es wäre gut,
        wenn sich alle Gäste bereits <strong>10:45 Uhr</strong> im Garten
        einfinden könnten. Für Getränke und Snacks ist jederzeit gesorgt!
      </p>
    </div>
    <div style={{paddingTop: 15, borderTop: '1px solid #b1cac2'}}>
      Falls es darüber hinaus noch{" "}
      <strong style={{fontWeight: 800}}>
        Fragen, Sorgen oder Anmerkungen gibt, dann bitte sprecht uns direkt an
      </strong>
      .
    </div>
    <div id="survey">
      Liebst,
      <br />
      Charline & William
    </div>
  </div>,
  <div className="welcome-card" style={welcomeCardStyle}>
    <div>
      Wir können ihn kaum erwarten… Aber um den Tag der Tage für und mit euch am
      besten zu planen, habt ihr auf dieser Seite die Möglichkeit alle wichtigen
      Informationen abzustauben und mit uns abzustimmen.{" "}
    </div>
    <div>
      <strong>
        Dafür wäre es großartig, wenn ihr an unserer kleinen Umfrage (nur 5
          kurze Fragen) teilnehmt.
        </strong>
    </div>
    <div>
      Da wir erst am Anfang der Planung stehen, wird sich die Seite nach und
      nach mit weiteren, konkreteren Infos füllen. Also schaut ruhig immer mal
      vorbei und lasst euch die neuesten Mause-News nicht entgehen.
    </div>
    <div>
      Ihr könnt uns und die Trauzeugen natürlich jederzeit ansprechen, wenn ihr
      Fragen, Ideen oder Anregungen habt.
    </div>
    <div>
      Liebst,
      <br />
      William & Charline
    </div>
  </div>
];

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
            title="Aktuelles"
            subheader="04.06.2019 - Es gibt Neuigkeiten"
          />
          {news[0]}
          <CardContent />
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              {!this.state.expanded ? "Zeige ältere Nachrichten" : "Klapp mich ein"}
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <Fade left>
              <CardHeader
                subheader="12.01.2019 - Willkommen liebe Gäste"
              />
              {news[1]}
              <Iframe
                url="https://goo.gl/forms/aEKZI3YXlngHgD3C3"
                width="100%"
                height="400px"
                id="surveyIframe"
                className="survey-class"
                display="initial"
                position="relative"
                allowFullScreen
              />
              <div style={{ lineHeight: "110%", padding: "10px 10px 0" }}>
                Gibt es Probleme mit der Umfrage? Dann öffne diese Umfrage in
                einem neuen (eigenen) Fenster, per Klick auf den Button:
              </div>
              <Button
                className={classes.button}
                variant="contained"
                href="https://goo.gl/forms/aEKZI3YXlngHgD3C3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Öffne Umfrage in neuem Fenster
              </Button>
            </Fade>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Welcome);
