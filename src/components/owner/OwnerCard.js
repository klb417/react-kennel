import React, { Component } from "react";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Owner: <span className="card-owner">Dr. Yiddle</span>
          </h3>
          <p>Phone: (555) 555-YODA</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
