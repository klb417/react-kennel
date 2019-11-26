import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import BeastCard from "../beast/BeastCard";

class EmployeeWithBeasts extends Component {
  state = {
    employee: {},
    beasts: [],
    location: {},
    loadingStatus: true
  };

  componentDidMount() {
    //got here now make call to get employee with beast
    APIManager.get(
      `employees/${this.props.match.params.employeeId}?_expand=location&_embed=beasts`
    ).then(APIResult => {
      this.setState({
        employee: APIResult,
        beasts: APIResult.beasts,
        location: APIResult.location,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2>Employee: {this.state.employee.name}</h2>
          <p>Role: {this.state.employee.role}</p>
          <p>Location: {this.state.location.address}</p>
          <h3>Responsibilities:</h3>
          <div className="container-cards">
            {this.state.beasts.map(beast => (
              <BeastCard key={beast.id} beast={beast} {...this.props} />
            ))}
          </div>
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

export default EmployeeWithBeasts;
