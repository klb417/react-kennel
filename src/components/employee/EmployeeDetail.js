import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIManager from "../../modules/APIManager";

class EmployeeDetail extends Component {
  state = {
    name: "",
    role: "",
    location: "",
    animals: [],
    loadingStatus: true
  };
  componentDidMount() {
    const employeeDetails = {};
    APIManager.get(`employees/${this.props.employeeId}?_expand=location`)
      .then(employee => {
        employeeDetails.name = employee.name;
        employeeDetails.role = employee.role;
        employeeDetails.location = employee.location.address;
      })
      .then(() => {
        return APIManager.get(`animals/?employeeId=${this.props.employeeId}`);
      })
      .then(animals => {
        employeeDetails["animals"] = animals;
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
            {this.state.animals.map(animal => (
              <li key={animal.id}>{animal.name}</li>
            ))}
          </ul>
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}>
            Feed to Beasts
          </button>
          <Link to="/employees">
            <button type="button">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;
