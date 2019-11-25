import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import AnimalCard from "../animal/AnimalCard";

class EmployeeWithAnimals extends Component {
  state = {
    employee: {},
    animals: [],
    location: {},
    loadingStatus: true
  };

  componentDidMount() {
    //got here now make call to get employee with animal
    APIManager.get(
      `employees/${this.props.match.params.employeeId}?_expand=location&_embed=animals`
    ).then(APIResult => {
      this.setState({
        employee: APIResult,
        animals: APIResult.animals,
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
            {this.state.animals.map(animal => (
              <AnimalCard key={animal.id} animal={animal} {...this.props} />
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

export default EmployeeWithAnimals;
