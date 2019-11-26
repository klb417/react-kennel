import React, { Component } from "react";
import APIManager from "../../modules/APIManager";

class EmployeeDetail extends Component {
  state = {
    name: "",
    role: "",
    location: "",
    beasts: [],
    loadingStatus: true
  };
  componentDidMount() {
    const employeeDetails = {};
    APIManager.get(
      `employees/${this.props.employeeId}?_expand=location&_embed=beasts`
    )
      .then(employee => {
        employeeDetails.name = employee.name;
        employeeDetails.role = employee.role;
        employeeDetails.location = employee.location.address;
        employeeDetails.beasts = employee.beasts;
      })
      .then(() => {
        this.setState({
          ...employeeDetails,
          loadingStatus: false
        });
      });
  }
  handleDelete = () => {
    this.setState({ loadingStatus: true });
    APIManager.delete(`employees/${this.props.employeeId}`).then(() => {
      this.props.history.push("/employees");
    });
  };
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span style={{ color: "darkslategrey" }}>{this.state.name}</span>
          </h3>
          <p>Role: {this.state.role}</p>
          <p>Location: {this.state.location}</p>
          <ul>
            Responsibilities:
            {this.state.beasts.map(beast => (
              <li key={beast.id}>{beast.name}</li>
            ))}
          </ul>
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}>
            Feed to Beasts
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/employees`);
            }}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;
