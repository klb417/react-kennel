import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import "./AnimalForm.css";

class AnimalEditForm extends Component {
  //set the initial state
  state = {
    name: "",
    breed: "",
    ownerId: "",
    locationId: "",
    employeeId: "",
    owners: [],
    locations: [],
    employees: [],
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingAnimal = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedAnimal = {
      id: this.props.match.params.animalId,
      name: this.state.name,
      breed: this.state.breed,
      ownerId: this.state.ownerId,
      locationId: this.state.locationId,
      employeeId: this.state.employeeId
    };

    APIManager.update("animals/", editedAnimal).then(() =>
      this.props.history.push("/animals")
    );
  };

  componentDidMount() {
    const stateData = {};
    APIManager.getAll(`owners`).then(owners => {
      stateData.owners = owners;
      APIManager.getAll(`locations`).then(locations => {
        stateData.locations = locations;
        APIManager.getAll(`employees`)
          .then(employees => {
            stateData.employees = employees;
          })
          .then(() => {
            APIManager.get(`animals/${this.props.match.params.animalId}`).then(
              animal => {
                this.setState({
                  name: animal.name,
                  breed: animal.breed,
                  ownerId: animal.ownerId,
                  locationId: animal.locationId,
                  employeeId: animal.employeeId,
                  owners: stateData.owners,
                  locations: stateData.locations,
                  employees: stateData.employees,
                  loadingStatus: false
                });
              }
            );
          });
      });
    });
  }

  render() {
    console.log("state", this.state);
    return (
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              value={this.state.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="breed"
              value={this.state.breed}
            />
            <label htmlFor="breed">Breed</label>
            <select
              required
              onChange={this.handleFieldChange}
              id="ownerId"
              placeholder="Owner">
              <option default hidden value="">
                Select Owner
              </option>
              {this.state.owners.map(owner => (
                <option
                  key={owner.id}
                  value={owner.id}
                  selected={owner.id === this.state.ownerId}>
                  {owner.name}
                </option>
              ))}
            </select>
            <label htmlFor="owner">Owner</label>
            <select
              required
              onChange={this.handleFieldChange}
              id="locationId"
              placeholder="Location">
              <option default hidden value="">
                Select Location
              </option>
              {this.state.locations.map(location => (
                <option
                  key={location.id}
                  value={location.id}
                  selected={location.id === this.state.locationId}>
                  {location.address}
                </option>
              ))}
            </select>
            <label htmlFor="location">Locations</label>
            <select
              required
              onChange={this.handleFieldChange}
              id="employeeId"
              placeholder="Employee">
              <option default hidden value="">
                Select Employee
              </option>
              {this.state.employees.map(employee => (
                <option
                  key={employee.id}
                  value={employee.id}
                  selected={employee.id === this.state.employeeId}>
                  {employee.name}
                </option>
              ))}
            </select>
            <label htmlFor="employee">Employee</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={this.state.loadingStatus}
              onClick={this.updateExistingAnimal}
              className="btn btn-primary">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default AnimalEditForm;
