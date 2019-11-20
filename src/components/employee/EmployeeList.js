import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import APIManager from "../../modules/APIManager";

class EmployeeList extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    APIManager.getAll("employees/?_expand=location").then(employees => {
      this.setState({
        employees: employees
      });
    });
  }
  deleteEmployee = id => {
    APIManager.delete(`employees/${id}`).then(() =>
      APIManager.getAll("employees/?_expand=location").then(newEmployees => {
        this.setState({
          employees: newEmployees
        });
      })
    );
  };
  render() {
    return (
      <div className="container-cards">
        {this.state.employees.map(employee => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={this.deleteEmployee}
          />
        ))}
      </div>
    );
  }
}

export default EmployeeList;
