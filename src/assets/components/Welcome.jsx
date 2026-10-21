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
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
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
  }
});

const welcomeCardStyle = {
  lineHeight: "130%",
  padding: window.innerWidth < 800 ? "20px 20px 0" : "30px 30px 0"
};

const news = [
  <div className="welcome-card" style={welcomeCardStyle}>
    <div>
      Liebe Gäste, in weniger als einer Woche ist es endlich so weit! Anbei noch
      mal ein paar kleine Informationen für Freitag und die Essensituation am
      Samstag. Wir hoffen, dass ihr alle gut <a href="#location">nach Buckow kommt</a> und freuen uns schon riesig darauf, den Tag mit euch zu verbringen.
      <h3>Freitag</h3>
      <div>
        Natürlich wollen wir am Abend vor der Hochzeit noch mal Zeit mit allen,
        die am Freitag schon anreisen, verbringen. Dies wird vermutlich im <b>öffentlichen Schlosspark</b>, welcher direkt an die Stadtscheune
        angrenzt, passieren. Eine genaue Uhrzeit können wir noch nicht
        festlegen, da wir mit dem Aufbau zu tun haben, wir schätzen aber{" "}
        <b>gegen 19 Uhr</b>. Es wird dann belegte Brötchen, Kartoffelsalat und
        ähnliches geben, zubereitet von unseren lieben Omis. Natürlich gibt es
        auch ein wenig Bier, Wein und alkoholfreie Getränke. Die Zusammenkunft
        soll aber{" "}
        <b>
          weder ausarten noch lange gehen, damit jeder frisch für die Hochzeit
          ist
        </b>
        . Ihr sollt am nächsten Tag ja spätestens 10:30 Uhr an der Scheune sein
        und wir werden schon sehr früh aufstehen müssen.
      </div>
      <h3>Samstag</h3>
      <div>
        Wer morgens nicht wenig isst, sollte bitte versuchen etwas zu <b>frühstücken</b>. Es gibt zwar Schnittchen oder ähnliches nach der
        Trauung, aber wir wissen nicht genau wie viele, vermutlich nicht genug,
        damit 50 Leute einen leeren Magen füllen können. Wir haben der Location
        klargemacht, dass <b>immer etwas zu essen da sein soll</b>, aber es
        liegt eben nicht in unserer Macht wie viel. Gegen 15 Uhr gibt es Kuchen
        und Abendbrot gegen 17:45 Uhr.
        <p>
          Unweit von der Scheune (ca. 5 Minuten Fußweg) gibt es einen{" "}
          <a href="https://goo.gl/maps/tzYCceEyB8u4vrmp8">Bäcker</a>, der ab 7
          Uhr geöffnet hat.
        </p>
      </div>
    </div>
    <div style={{ paddingTop: 15, borderTop: "1px solid #b1cac2" }}>
      Nun noch ein paar nützliche Informationen für euch:
    </div>
    <div
      style={{
        paddingBottom: 10,
        display: "flex",
        marginBottom: window.innerWidth < 800 ? 10 : 0,
        flexDirection: window.innerWidth < 800 ? "column" : "row",
        // flexDirection: window.innerWidth < 800 ? "column" : "row",
        alignItems: "center"
      }}
    >
      <Wc
        style={{
          marginRight: 20,
          padding: 5,
          background: "#6f8781",
          color: "white",
          borderRadius: "100%"
        }}
      />
      <div>
        <p>
          Am Hochzeitstag beginnt das Spektakel um <strong>11 Uhr</strong> mit
          der freien Trauung im <strong>Garten der Stadtscheune</strong>. Es
          wäre gut, wenn sich alle Gäste bereits <strong>10:30 Uhr</strong> im
          Garten einfinden könnten. Für Getränke und Snacks ist jederzeit
          gesorgt!
        </p>
        <p style={{ margin: 0 }}>
          Bitte denkt an wetterfeste Kleidung bzw. Regenschirme, falls das
          Wetter nicht so mitspielt, wie wir uns das wünschen. Ein wichtiger
          Hinweis an die Ladies: Im Garten ist der Boden mit Rasen und altem
          Pflasterstein eher “holprig”, daher raten wir von High Heels mit
          Pfennigabsätzen ab.
        </p>
      </div>
    </div>
    <div
      style={{
        paddingTop: 15,
        borderTop: "1px solid #b1cac2",
        display: "flex",
        marginBottom: window.innerWidth < 800 ? 10 : 0,
        flexDirection: window.innerWidth < 800 ? "column" : "row",
        alignItems: "center",
        borderBottom: "1px solid #b1cac2",
      }}
    >
      <FavoriteBorder
        style={{
          marginRight: 20,
          padding: 5,
          background: "#6f8781",
          color: "white",
          borderRadius: "100%"
        }}
      />
      <div>
        <p style={{ marginTop: 0 }}>
          Wer Lust und Zeit hat, ist sehr gerne zu unserer{" "}
          <strong>
            standesamtlichen Trauung am Freitag, den 30.08.2019 im Rathaus
            Lichtenberg
          </strong>{" "}
          eingeladen. Dafür müsstet ihr um <strong>10 Uhr</strong> vor Ort sein.
        </p>
        <p style={{ marginTop: 0 }}>
          Anschließend laden wir zu uns in die{" "}
          <strong>Mausewohnung zu einem kleinen Umtrunk</strong> mit Buffet ein
          und begießen unsere amtliche Vermählung zur neuen Familie
          Freudenberger. Bitte auch hier eine{" "}
          <strong>kurze Rückmeldung an uns, wer mit dabei sein möchte</strong>,
          da es nur eine begrenzte Anzahl an Plätzen im Trauungszimmer gibt.
        </p>
      </div>
    </div>
    <div>
      Falls es darüber hinaus noch{" "}
      <strong style={{ fontWeight: 800, color: "black" }}>
        Fragen, Sorgen oder Anmerkungen gibt, dann bitte sprecht uns direkt an
      </strong>
      .
    </div>
    <div id="survey">
      Liebst,
      <br />
      🐭 Charline & William 🐭
    </div>
  </div>,
  <div className="welcome-card" style={welcomeCardStyle}>
    <h3>10.06.19 - Es gibt Neuigkeiten</h3>
    <div>
      Aiaiaiaiaia, bald ist er da! Und wir müssen gar nicht mehr so lange
      warten, bis wir unseren schönsten Tag mit euch verbringen dürfen. Wir
      möchten uns an dieser Stelle bereits für eure riesengroße Anteilnahme
      bedanken, die ihr uns alle bisher entgegengebracht habt. Das lässt unsere
      Vorfreude nur noch größer werden! Nun müssen allmählich die Details
      geplant werden...{" "}
    </div>
    <h3>12.01.2019 - Willkommen liebe Gäste</h3>
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
            subheader="19.08.2019 - Nur noch 5 Tage"
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
              {!this.state.expanded
                ? "Zeige ältere Nachrichten & Umfrage"
                : "Klapp mich ein"}
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <Fade left>
              <CardHeader subheader="Ältere News" />
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
