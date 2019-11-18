import React, { Component } from "react";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Name: <span className="card-employee">Nurse Leo Leo</span>
          </h3>
          <p>Speciality: Dogs, Hogs, Frogs</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
