import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import LocationCard from "./LocationCard";

class LocationList extends Component {
  state = {
    locations: []
  };

  componentDidMount() {
    APIManager.getAll("locations").then(locations => {
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
