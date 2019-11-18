import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Address: <span className="card-address">123 Fake Str</span></h3>
          <p>Hours: Mon-Fri: 8:00am - 5:30pm </p>
          <p>Phone: (555) 555-0987</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;