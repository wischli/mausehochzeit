import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DirectionsWalk from "@material-ui/icons/DirectionsWalk";
import Person from "@material-ui/icons/Person";
import Group from "@material-ui/icons/Group";
import Add from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";
import EuroSymbol from "@material-ui/icons/EuroSymbol";
import Home from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import Flip from "react-reveal/Flip";
import ImgBellevue from "../../images/bellevue-review.png";
import ImgBergschloesschen from "../../images/bergschloesschen-review.png";
import ImgStrandhotelBuckow from "../../images/strandhotel-buckow-review.png";
import ImgVierJahreszeiten from "../../images/vier-jahreszeiten-review.png";
import ImgStobbermuehle from "../../images/stobbermuehle-review.png";
import ImgHotelMaerkischeSchweiz from "../../images/hotel-maerkische-schweiz-review.png";

const outgoingUrls = {
  bergschloesschen:
    "https://www.google.de/travel/hotels/Buckow%20(M%C3%A4rkische%20Schweiz)/place/2040754924263850638?ap=KlQKEgkZAi6ZkUdKQBHsLzIVLCEsQBISCYWUHtDcSUpAERSfyBqqKixAGioKGxGAZ_0X6yUsQBlPS6Y0t0hKQAnQi3GAoPLAQBoGCLADEK8FJZqZUUEwAVqnAQoFCJYBEAAiA0VVUioWCgcI4w8QAhgPEgcI4w8QAhgQGAEgAVgBcgIIAooBVAoSCRkCLpmRR0pAEewvMhUsISxAEhIJhZQe0NxJSkARFJ_IGqoqLEAaKgobEYBn_RfrJSxAGU9LpjS3SEpACdCLcYCg8sBAGgYIsAMQrwUlmplRQZoBCBIGQnVja293ogETCgkvbS8wZjk5MmgSBkJ1Y2tvd5IBAiAB&g2lb=4181926%2C4208993%2C4209588%2C4225901%2C4207631%2C4215556%2C4219394%2C4220469&hl=en&gl=de&un=0&q=Buckow%20Unterkunft&rp=OAFAAA&ictx=1&hrf=CgUIlgEQACIDRVVSKhYKBwjjDxABGBkSBwjjDxABGBoYASABWAFyAggCigFUChIJGQIumZFHSkAR7C8yFSwhLEASEgmFlB7Q3ElKQBEUn8gaqiosQBoqChsRgGf9F-slLEAZT0umNLdISkAJ0ItxgKDywEAaBgiwAxCvBSWamVFBmgEIEgZCdWNrb3eiARMKCS9tLzBmOTkyaBIGQnVja293kgECIAE&tcfs=Ei0KCS9tLzBmOTkyaBIGQnVja293GhgKCjIwMTktMDEtMjUSCjIwMTktMDEtMjYYAiIYCgoyMDE5LTAxLTI1EgoyMDE5LTAxLTI2UgA",
  strandhotelBuckow:
    "https://www.google.de/travel/hotels/Buckow%20(M%C3%A4rkische%20Schweiz)/place/12286948404597144901?ap=KlQKEgkZAi6ZkUdKQBHsLzIVLCEsQBISCYWUHtDcSUpAERSfyBqqKixAGioKGxGAZ_0X6yUsQBlPS6Y0t0hKQAnQi3GAoPLAQBoGCLADEK8FJZqZUUEwAVqnAQoFCJYBEAAiA0VVUioWCgcI4w8QAhgPEgcI4w8QAhgQGAEgAVgBcgIIAooBVAoSCRkCLpmRR0pAEewvMhUsISxAEhIJhZQe0NxJSkARFJ_IGqoqLEAaKgobEYBn_RfrJSxAGU9LpjS3SEpACdCLcYCg8sBAGgYIsAMQrwUlmplRQZoBCBIGQnVja293ogETCgkvbS8wZjk5MmgSBkJ1Y2tvd5IBAiAB&g2lb=4181926%2C4208993%2C4209588%2C4225901%2C4207631%2C4215556%2C4219394%2C4220469&hl=en&gl=de&un=0&q=Buckow%20Unterkunft&rp=OAFAAA&ictx=1&hrf=CgUIlgEQACIDRVVSKhYKBwjjDxABGBkSBwjjDxABGBoYASABWAFyAggCigFUChIJGQIumZFHSkAR7C8yFSwhLEASEgmFlB7Q3ElKQBEUn8gaqiosQBoqChsRgGf9F-slLEAZT0umNLdISkAJ0ItxgKDywEAaBgiwAxCvBSWamVFBmgEIEgZCdWNrb3eiARMKCS9tLzBmOTkyaBIGQnVja293kgECIAE&tcfs=Ei0KCS9tLzBmOTkyaBIGQnVja293GhgKCjIwMTktMDEtMjUSCjIwMTktMDEtMjYYAiIYCgoyMDE5LTAxLTI1EgoyMDE5LTAxLTI2UgA",
  vierJahreszeiten:
    "https://www.google.de/travel/hotels/Buckow%20(M%C3%A4rkische%20Schweiz)/place/10006657117015003962?ap=KlQKEgkZAi6ZkUdKQBHsLzIVLCEsQBISCYWUHtDcSUpAERSfyBqqKixAGioKGxGAZ_0X6yUsQBlPS6Y0t0hKQAnQi3GAoPLAQBoGCLADEK8FJZqZUUEwAVqnAQoFCJYBEAAiA0VVUioWCgcI4w8QAhgPEgcI4w8QAhgQGAEgAVgBcgIIAooBVAoSCRkCLpmRR0pAEewvMhUsISxAEhIJhZQe0NxJSkARFJ_IGqoqLEAaKgobEYBn_RfrJSxAGU9LpjS3SEpACdCLcYCg8sBAGgYIsAMQrwUlmplRQZoBCBIGQnVja293ogETCgkvbS8wZjk5MmgSBkJ1Y2tvd5IBAiAB&g2lb=4181926%2C4208993%2C4209588%2C4225901%2C4207631%2C4215556%2C4219394%2C4220469&hl=en&gl=de&un=0&q=Buckow%20Unterkunft&rp=OAFAAA&ictx=1&hrf=CgUIlgEQACIDRVVSKhYKBwjjDxABGBkSBwjjDxABGBoYASABWAFyAggCigFUChIJGQIumZFHSkAR7C8yFSwhLEASEgmFlB7Q3ElKQBEUn8gaqiosQBoqChsRgGf9F-slLEAZT0umNLdISkAJ0ItxgKDywEAaBgiwAxCvBSWamVFBmgEIEgZCdWNrb3eiARMKCS9tLzBmOTkyaBIGQnVja293kgECIAE&tcfs=Ei0KCS9tLzBmOTkyaBIGQnVja293GhgKCjIwMTktMDEtMjUSCjIwMTktMDEtMjYYAiIYCgoyMDE5LTAxLTI1EgoyMDE5LTAxLTI2UgA",
  hotelMaerkischeSchweiz:
    "https://www.google.de/travel/hotels/Buckow%20(M%C3%A4rkische%20Schweiz)/place/3483081480368187423?ap=KlQKEgkZAi6ZkUdKQBHsLzIVLCEsQBISCYWUHtDcSUpAERSfyBqqKixAGioKGxGAZ_0X6yUsQBlPS6Y0t0hKQAnQi3GAoPLAQBoGCLADEK8FJZqZUUEwAVqnAQoFCJYBEAAiA0VVUioWCgcI4w8QAhgPEgcI4w8QAhgQGAEgAVgBcgIIAooBVAoSCRkCLpmRR0pAEewvMhUsISxAEhIJhZQe0NxJSkARFJ_IGqoqLEAaKgobEYBn_RfrJSxAGU9LpjS3SEpACdCLcYCg8sBAGgYIsAMQrwUlmplRQZoBCBIGQnVja293ogETCgkvbS8wZjk5MmgSBkJ1Y2tvd5IBAiAB&g2lb=4181926%2C4208993%2C4209588%2C4225901%2C4207631%2C4215556%2C4219394%2C4220469&hl=en&gl=de&un=0&q=Buckow%20Unterkunft&rp=OAFAAA&ictx=1&hrf=CgUIlgEQACIDRVVSKhYKBwjjDxABGBkSBwjjDxABGBoYASABWAFyAggCigFUChIJGQIumZFHSkAR7C8yFSwhLEASEgmFlB7Q3ElKQBEUn8gaqiosQBoqChsRgGf9F-slLEAZT0umNLdISkAJ0ItxgKDywEAaBgiwAxCvBSWamVFBmgEIEgZCdWNrb3eiARMKCS9tLzBmOTkyaBIGQnVja293kgECIAE&tcfs=Ei0KCS9tLzBmOTkyaBIGQnVja293GhgKCjIwMTktMDEtMjUSCjIwMTktMDEtMjYYAiIYCgoyMDE5LTAxLTI1EgoyMDE5LTAxLTI2UgA",
  stobbermuehle:
    "https://www.google.de/travel/hotels/Buckow%20(M%C3%A4rkische%20Schweiz)/place/18096213436554349619?ap=KlQKEgkZAi6ZkUdKQBHsLzIVLCEsQBISCYWUHtDcSUpAERSfyBqqKixAGioKGxGAZ_0X6yUsQBlPS6Y0t0hKQAnQi3GAoPLAQBoGCLADEK8FJZqZUUEwAVqnAQoFCJYBEAAiA0VVUioWCgcI4w8QAhgPEgcI4w8QAhgQGAEgAVgBcgIIAooBVAoSCRkCLpmRR0pAEewvMhUsISxAEhIJhZQe0NxJSkARFJ_IGqoqLEAaKgobEYBn_RfrJSxAGU9LpjS3SEpACdCLcYCg8sBAGgYIsAMQrwUlmplRQZoBCBIGQnVja293ogETCgkvbS8wZjk5MmgSBkJ1Y2tvd5IBAiAB&g2lb=4181926%2C4208993%2C4209588%2C4225901%2C4207631%2C4215556%2C4219394%2C4220469&hl=en&gl=de&un=0&q=Buckow%20Unterkunft&rp=OAFAAA&ictx=1&hrf=CgUIlgEQACIDRVVSKhYKBwjjDxABGBkSBwjjDxABGBoYASABWAFyAggCigFUChIJGQIumZFHSkAR7C8yFSwhLEASEgmFlB7Q3ElKQBEUn8gaqiosQBoqChsRgGf9F-slLEAZT0umNLdISkAJ0ItxgKDywEAaBgiwAxCvBSWamVFBmgEIEgZCdWNrb3eiARMKCS9tLzBmOTkyaBIGQnVja293kgECIAE&tcfs=Ei0KCS9tLzBmOTkyaBIGQnVja293GhgKCjIwMTktMDEtMjUSCjIwMTktMDEtMjYYAiIYCgoyMDE5LTAxLTI1EgoyMDE5LTAxLTI2UgA",
  gastgeberei:
    "https://www.google.de/travel/hotels/Buckow%20(M%C3%A4rkische%20Schweiz)/place/5863979797182623164?ap=KlQKEgkZAi6ZkUdKQBHsLzIVLCEsQBISCYWUHtDcSUpAERSfyBqqKixAGioKGxGAZ_0X6yUsQBlPS6Y0t0hKQAnQi3GAoPLAQBoGCLADEK8FJZqZUUEwAVqnAQoFCJYBEAAiA0VVUioWCgcI4w8QAhgPEgcI4w8QAhgQGAEgAVgBcgIIAooBVAoSCRkCLpmRR0pAEewvMhUsISxAEhIJhZQe0NxJSkARFJ_IGqoqLEAaKgobEYBn_RfrJSxAGU9LpjS3SEpACdCLcYCg8sBAGgYIsAMQrwUlmplRQZoBCBIGQnVja293ogETCgkvbS8wZjk5MmgSBkJ1Y2tvd5IBAiAB&g2lb=4181926%2C4208993%2C4209588%2C4225901%2C4207631%2C4215556%2C4219394%2C4220469&hl=en&gl=de&un=0&q=Buckow%20Unterkunft&rp=OAFAAA&ictx=1&hrf=CgUIlgEQACIDRVVSKhYKBwjjDxABGBkSBwjjDxABGBoYASABWAFyAggCigFUChIJGQIumZFHSkAR7C8yFSwhLEASEgmFlB7Q3ElKQBEUn8gaqiosQBoqChsRgGf9F-slLEAZT0umNLdISkAJ0ItxgKDywEAaBgiwAxCvBSWamVFBmgEIEgZCdWNrb3eiARMKCS9tLzBmOTkyaBIGQnVja293kgECIAE&tcfs=Ei0KCS9tLzBmOTkyaBIGQnVja293GhgKCjIwMTktMDEtMjUSCjIwMTktMDEtMjYYAiIYCgoyMDE5LTAxLTI1EgoyMDE5LTAxLTI2UgA",
  gartenhausVilla: "",
  apartementEsche: "",
  jugendherberge: ""
};

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: 20,
    background: "transparent"
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#ecf0ee",
    minWidth: 200
  },
  headingWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "transparent"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    alignItems: "center",
    display: "flex",
    color: "rgba(0, 0, 0, 0.6)"
  },
  panel: {
    backgroundColor: "rgba(255, 255, 255, 0.2)"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: "black",
    lineHeight: "140%",
    textAlign: "right"
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <Flip left>
        <div className={classes.root}>
          <h3>Hotels</h3>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={this.handleChange("panel1")}
            className={classes.panel}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.headingWrapper}>
                <div className={classes.heading}>
                  <DirectionsWalk /> 3min
                </div>
                <div className={classes.secondaryHeading}>
                  Strandhotel Buckow
                </div>
              </div>
            </ExpansionPanelSummary>
            <Divider />
            <ExpansionPanelDetails>
              <div className="accomodation-expansion">
                <div className="row">
                  <Person /> ab 65€ pro Nacht
                </div>
                <div className="row">
                  <Group /> ab 89€ pro Nacht
                </div>
                <div className="row">
                  <Add />
                  Frühstück inklusive
                </div>
                <a
                  href={outgoingUrls.bergschloesschen}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ImgStrandhotelBuckow}
                    className="review-img"
                    title="Google Bewertungen für Strandhotel Buckow"
                    alt="Strandhotel Buckow Bewertungen"
                  />
                </a>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel9"}
            onChange={this.handleChange("panel9")}
            className={classes.panel}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.headingWrapper}>
                <div className={classes.heading}>
                  <DirectionsWalk />
                  5min
                </div>
                <div className={classes.secondaryHeading}>
                  Gasthaus Stobbermühle
                </div>
              </div>
            </ExpansionPanelSummary>
            <Divider />
            <ExpansionPanelDetails>
              <div className="accomodation-expansion">
                <div className="row">
                  <Group /> ab 75€ pro Nacht
                </div>
                <a
                  href={outgoingUrls.vierJahreszeiten}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ImgStobbermuehle}
                    className="review-img"
                    title="Google Bewertungen für Gasthaus Stobbermühle"
                    alt="Gasthaus Stobbermühle Bewertungen"
                  />
                </a>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel2"}
            onChange={this.handleChange("panel2")}
            className={classes.panel}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.headingWrapper}>
                <div className={classes.heading}>
                  <DirectionsWalk />
                  5min
                </div>
                <div className={classes.secondaryHeading}>
                  Strandhotel Vierjahreszeiten
                </div>
              </div>
            </ExpansionPanelSummary>
            <Divider />
            <ExpansionPanelDetails>
              <div className="accomodation-expansion">
                <div className="row">
                  <Person /> ab 55€ pro Nacht
                </div>
                <div className="row">
                  <Group /> ab 75€ pro Nacht
                </div>
                <a
                  href={outgoingUrls.vierJahreszeiten}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ImgVierJahreszeiten}
                    className="review-img"
                    title="Google Bewertungen für Hotel Vier Jahreszeiten"
                    alt="Vier Jahreszeiten Bewertungen"
                  />
                </a>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel3"}
            onChange={this.handleChange("panel3")}
            className={classes.panel}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.headingWrapper}>
                <div className={classes.heading}>
                  <DirectionsWalk />
                  10min
                </div>
                <div className={classes.secondaryHeading}>
                  Hotel & Restaurant Märkische Schweiz
                </div>
              </div>
            </ExpansionPanelSummary>
            <Divider />
            <ExpansionPanelDetails>
              <div className="accomodation-expansion">
                <div className="row">
                  <Person /> ab 50€ pro Nacht
                </div>
                <div className="row">
                  <Group /> ab 85€ pro Nacht
                </div>
                <div className="row">
                  <Add />
                  Frühstück inklusive
                </div>
                <a
                  href={outgoingUrls.hotelMaerkischeSchweiz}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ImgHotelMaerkischeSchweiz}
                    className="review-img"
                    title="Google Bewertungen für Hotel Märkische Schweiz"
                    alt="Hotel Maerkische Schweiz Bewertungen"
                  />
                </a>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel8"}
            onChange={this.handleChange("panel8")}
            className={classes.panel}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.headingWrapper}>
                <div className={classes.heading}>
                  <DirectionsWalk />
                  10min
                </div>
                <div className={classes.secondaryHeading}>
                  Bellevue Gastgeberei und Kreativhaus
                </div>
              </div>
            </ExpansionPanelSummary>
            <Divider />
            <ExpansionPanelDetails>
              <div className="accomodation-expansion">
                <div className="row">
                  <Person /> 45€ pro Nacht
                </div>
                <div className="row">
                  <Group /> 65€ pro Nacht
                </div>
                <div className="row">
                  <Add />
                  Frühstück für 7€ p.P. zubuchbar
                </div>
                <a
                  href={outgoingUrls.gastgeberei}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ImgBellevue}
                    className="review-img"
                    title="Google Bewertungen für Bellevue Gastgeberei"
                    alt="Gastgeberei und Kreativhaus Bewertungen"
                  />
                </a>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel4"}
            onChange={this.handleChange("panel4")}
            className={classes.panel}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.headingWrapper}>
                <div className={classes.heading}>
                  <DirectionsWalk />
                  15min
                </div>
                <div className={classes.secondaryHeading}>
                  Hotel & Restaurant Bergschlösschen
                </div>
              </div>
            </ExpansionPanelSummary>
            <Divider />
            <ExpansionPanelDetails>
              <div className="accomodation-expansion">
                <div className="row">
                  <Person /> ab 65€ pro Nacht
                </div>
                <div className="row">
                  <Group /> ab 95€ pro Nacht
                </div>
                <div className="row">
                  <Add />
                  Frühstück inklusive
                </div>
                <a
                  href={outgoingUrls.bergschloesschen}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ImgBergschloesschen}
                    className="review-img"
                    title="Google Bewertungen für Hotel Bergschlösschen"
                    alt="Berschloesschen Bewertungen"
                  />
                </a>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <h3>Unterkünfte</h3>
          <ExpansionPanel
            expanded={expanded === "panel5"}
            onChange={this.handleChange("panel5")}
            className={classes.panel}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.headingWrapper}>
                <div className={classes.heading}>
                  <DirectionsWalk />
                  10min
                </div>
                <div className={classes.secondaryHeading}>
                  Gartenhaus Villa Walnuss
                </div>
              </div>
            </ExpansionPanelSummary>
            <Divider />
            <ExpansionPanelDetails>
              <div className="accomodation-expansion">
                <div className="row">
                  <Home />
                  Platz für ca. 4 Personen
                </div>
                <div className="row">
                  <EuroSymbol />
                  ca. 52€ pro Person für 2 Nächte
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  href="https://www.airbnb.de/rooms/23013478?location=Buckow%20M%C3%A4rkische%20Schweiz&check_in=2019-08-23&check_out=2019-08-25&s=88huQPYW&guests=4&adults=4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zur Unterkunft
                </Button>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel6"}
            onChange={this.handleChange("panel6")}
            className={classes.panel}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.headingWrapper}>
                <div className={classes.heading}>
                  <DirectionsWalk />
                  10min
                </div>
                <div className={classes.secondaryHeading}>Apartment Esche</div>
              </div>
            </ExpansionPanelSummary>
            <Divider />
            <ExpansionPanelDetails>
              <div className="accomodation-expansion">
                <div className="row">
                  <Home />
                  Platz für ca. 4 Personen
                </div>
                <div className="row">
                  <EuroSymbol />
                  ca. 64€ pro Person für 2 Nächte (= Mindestaufenthalt)
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  href="https://www.airbnb.de/rooms/24483368?location=Buckow%20M%C3%A4rkische%20Schweiz&check_in=2019-08-23&check_out=2019-08-25&s=88huQPYW"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zur Unterkunft
                </Button>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel7"}
            onChange={this.handleChange("panel7")}
            className={classes.panel}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.headingWrapper}>
                <div className={classes.heading}>
                  <DirectionsWalk />
                  30min
                </div>
                <div className={classes.secondaryHeading}>
                  DJH Jugendherberge Buckow
                </div>
              </div>
            </ExpansionPanelSummary>
            <Divider />
            <ExpansionPanelDetails>
              <div className="accomodation-expansion">
                <div className="row">
                  <Person />
                  ca. 25€ pro Nacht
                </div>
                <div className="row">
                  <Group />
                  ca. 55€ pro Nacht
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  href="https://www.jugendherberge.de/jugendherbergen/buckow-608/portraet/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zur Unterkunft
                </Button>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Flip>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
