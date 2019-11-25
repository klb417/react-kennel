import React, { Component } from "react";
import "./OwnerCard.css";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span className="card-owner">{this.props.owner.name}</span>
          </h3>
          <p>Address: {this.props.owner.address}</p>
          <p>Phone: {this.props.owner.phone}</p>
          <button onClick={() => this.props.deleteOwner(this.props.owner.id)}>
            Remove
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/owners/${this.props.owner.id}`);
            }}>
            Details
          </button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
