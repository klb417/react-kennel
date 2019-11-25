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
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => this.props.history.push("/locations/new")}>
            Open Location
          </button>
        </section>
        <div className="container-cards">
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
        </div>
      </>
    );
  }
}

export default LocationList;
