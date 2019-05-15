import React from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Polyline } from 'react-leaflet';

const GnomeMap = (props) => (
  <Map center={props.locations[0]} zoom={6} style={{ height: '60vh' }}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Polyline positions={props.locations} />
  </Map>
);

const mapStateToProps = state => ({
  locations: state.locations.map(location => [Number(location.lat), Number(location.lon)]),
});

export default connect(mapStateToProps)(GnomeMap);
