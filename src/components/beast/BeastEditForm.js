import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import "./BeastForm.css";

class BeastEditForm extends Component {
  //set the initial state
  state = {
    name: "",
    breed: "",
    ownerId: "",
    locationId: "",
    employeeId: "",
    icon: "",
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

  updateExistingBeast = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedBeast = {
      id: Number(this.props.match.params.beastId),
      name: this.state.name,
      breed: this.state.breed,
      ownerId: Number(this.state.ownerId),
      locationId: Number(this.state.locationId),
      employeeId: Number(this.state.employeeId),
      icon: this.state.icon
    };

    APIManager.update("beasts", editedBeast).then(() =>
      this.props.history.goBack()
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
            APIManager.get(`beasts/${this.props.match.params.beastId}`).then(
              beast => {
                console.log(beast);
                this.setState({
                  ...beast,
                  ...stateData,
                  loadingStatus: false
                });
              }
            );
          });
      });
    });
  }

  render() {
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
            <label htmlFor="name">Beast name</label>

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
              placeholder="Owner"
              value={this.state.ownerId}>
              {this.state.owners.map(owner => (
                <option key={owner.id} value={owner.id}>
                  {owner.name}
                </option>
              ))}
            </select>
            <label htmlFor="owner">Owner</label>
            <select
              required
              onChange={this.handleFieldChange}
              id="locationId"
              placeholder="Location"
              value={this.state.locationId}>
              {this.state.locations.map(location => (
                <option key={location.id} value={location.id}>
                  {location.address}
                </option>
              ))}
            </select>
            <label htmlFor="location">Locations</label>
            <select
              required
              onChange={this.handleFieldChange}
              id="employeeId"
              placeholder="Employee"
              value={this.state.employeeId}>
              {this.state.employees.map(employee => (
                <option key={employee.id} value={employee.id}>
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
              onClick={this.updateExistingBeast}
              className="btn btn-primary">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default BeastEditForm;
