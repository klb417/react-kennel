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

  render() {
    return <>
      {this.state.employees.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)}
    </>
  }
}

export default EmployeeList;
