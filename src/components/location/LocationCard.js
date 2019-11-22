import React, { Component } from "react";
class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span className="card-address">
              {this.props.kennelLocation.address}
            </span>
          </h3>
          <p>Hours: {this.props.kennelLocation.hours}</p>
          <p>Phone: {this.props.kennelLocation.phone}</p>
          <button
            type="button"
            onClick={() =>
              this.props.deleteLocation(this.props.kennelLocation.id)
            }>
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(
                `/animals/${this.props.kennelLocation.id}`
              );
            }}>
            Details
          </button>
        </div>
      </div>
    );
  }
}

export default LocationCard;
