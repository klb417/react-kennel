import React, { Component } from "react";

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
          <ul>
            Employees:
            {this.props.location.employees.map(employee => (
              <li key={employee.id}>{employee.name}</li>
            ))}
          </ul>
          <ul>
            Animals:
            {this.props.location.animals.map(animal => (
              <li key={animal.id}>{animal.name}</li>
            ))}
          </ul>
          <button onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;
