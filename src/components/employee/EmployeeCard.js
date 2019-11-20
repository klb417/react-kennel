import React, { Component } from "react";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Name: <span className="card-employee">{this.props.employee.name}</span>
          </h3>
          <p>Role: {this.props.employee.role}</p>
          <p>Location: {this.props.employee.location.address}</p>
          <button onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
