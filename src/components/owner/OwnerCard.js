import React, { Component } from "react";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Owner: <span className="card-owner">{this.props.owner.name}</span>
          </h3>
          <p>Address: {this.props.owner.address}</p>
          <p>Phone: {this.props.owner.phone}</p>
          <ul>
            pets:
            {this.props.owner.animals.map(animal => (
              <li key={animal.id}>{animal.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
