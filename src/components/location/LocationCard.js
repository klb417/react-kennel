import React, { Component } from "react";
import { Link } from "react-router-dom";
class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span className="card-address">{this.props.location.address}</span>
          </h3>
          <p>Hours: {this.props.location.hours}</p>
          <p>Phone: {this.props.location.phone}</p>
          <button
            type="button"
            onClick={() => this.props.deleteLocation(this.props.location.id)}
          >
            Close
          </button>
          <Link to={`/locations/${this.props.location.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;
