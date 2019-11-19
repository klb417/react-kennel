import React, { Component } from "react";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Address:{" "}
            <span className="card-address">{this.props.location.address}</span>
          </h3>
          <p>Hours: {this.props.location.hours}</p>
          <p>Phone: {this.props.location.phone}</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;
