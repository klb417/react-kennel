import React, { Component } from "react";
import LocationManager from "../../modules/LocationManager";
import LocationCard from "./LocationCard";

class LocationList extends Component {
  state = {
    locations: []
  };

  componentDidMount() {
    LocationManager.getAll().then(locations => {
      this.setState({
        locations: locations
      });
    });
  }

  render() {
    return this.state.locations.map(location => (
      <LocationCard key={location.id} location={location} />
    ));
  }
}

export default LocationList;
