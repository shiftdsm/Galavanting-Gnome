import React from 'react';
import { connect } from 'react-redux';

const LocationList = ({ locations }) => (
  <div>
    <h2>Locations</h2>

    <ul>
      {locations && locations.map(location => (
        <li key={location.id}>{location.lat} {location.lon}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  locations: state.locations,
});

export default connect(mapStateToProps)(LocationList);
