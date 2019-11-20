import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import LocationCard from "./LocationCard";

class LocationList extends Component {
  state = {
    locations: []
  };

  componentDidMount() {
    APIManager.getAll("locations/?_embed=employees&_embed=animals").then(
      locations => {
        this.setState({
          locations: locations
        });
      }
    );
  }
  deleteLocation = id => {
    APIManager.delete(`locations/${id}`).then(() => {
      APIManager.getAll("locations/?_embed=employees&_embed=animals").then(
        locations => {
          this.setState({
            locations: locations
          });
        }
      );
    });
  };
  render() {
    return this.state.locations.map(location => (
      <LocationCard
        key={location.id}
        location={location}
        deleteLocation={this.deleteLocation}
      />
    ));
  }
}

export default LocationList;
