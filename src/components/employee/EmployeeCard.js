import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span className="card-employee">{this.props.employee.name}</span>
          </h3>
          <p>Role: {this.props.employee.role}</p>
          <p>Location: {this.props.employee.location.address}</p>
          <button
            onClick={() => this.props.deleteEmployee(this.props.employee.id)}>
            Feed to Beasts
          </button>
          <Link to={`employees/${this.props.employee.id}`}>
            <button type="button">Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
