import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import APIManager from "../../modules/APIManager";

class EmployeeList extends Component {
  state = {
    employees: [],
    loadingStatus: true
  };

  componentDidMount() {
    APIManager.getAll("employees/?_expand=location").then(employees => {
      this.setState({
        employees: employees,
        loadingStatus: false
      });
    });
  }
  deleteEmployee = id => {
    this.setState({ loadingStatus: true });
    APIManager.delete(`employees/${id}`).then(() =>
      APIManager.getAll("employees/?_expand=location").then(newEmployees => {
        this.setState({
          employees: newEmployees,
          loadingStatus: false
        });
      })
    );
  };
  render() {
    return (
      <>
        {this.state.loadingStatus ? (
          <p>App is loading</p>
        ) : (
          <>
            <section className="section-content">
              <button
                type="button"
                className="btn"
                onClick={() => this.props.history.push("/employees/new")}>
                Hire New Employee
              </button>
            </section>
            <div className="container-cards">
              {this.state.employees.map(employee => (
                <EmployeeCard
                  key={employee.id}
                  employee={employee}
                  deleteEmployee={this.deleteEmployee}
                  {...this.props}
                />
              ))}
            </div>
          </>
        )}
      </>
    );
  }
}

export default EmployeeList;
