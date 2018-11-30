import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.572327,
      lng: 14.072156
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAYlW14P2xOax68idm29jrGx-q77UdFO_0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={52.572327}
            lng={14.072156}
            text={'Stadtscheune Buckow'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap
