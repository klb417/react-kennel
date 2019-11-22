import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import LocationCard from "./LocationCard";

class LocationList extends Component {
  state = {
    locations: [],
    loadingStatus: true
  };

  componentDidMount() {
    APIManager.getAll("locations/?_embed=employees&_embed=animals").then(
      locations => {
        this.setState({
          locations: locations,
          loadingStatus: false
        });
      }
    );
  }
  deleteLocation = id => {
    this.setState({ loadingStatus: true });
    APIManager.delete(`locations/${id}`).then(() => {
      APIManager.getAll("locations/?_embed=employees&_embed=animals").then(
        locations => {
          this.setState({
            locations: locations,
            loadingStatus: false
          });
        }
      );
    });
  };
  render() {
    return (
      <>
        {this.state.loadingStatus ? (
          <p>App is loading</p>
        ) : (
          this.state.locations.map(location => (
            <LocationCard
              key={location.id}
              kennelLocation={location}
              deleteLocation={this.deleteLocation}
              {...this.props}
            />
          ))
        )}
      </>
    );
  }
}

export default LocationList;
