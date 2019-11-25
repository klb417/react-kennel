import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import "./AnimalForm.css";

class AnimalForm extends Component {
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

  componentDidMount() {
    const stateData = {};
    APIManager.getAll(`owners`).then(owners => {
      stateData.owners = owners;
      APIManager.getAll(`locations`).then(locations => {
        stateData.locations = locations;
        APIManager.getAll(`employees`).then(employees => {
          stateData.employees = employees;
          this.setState({
            owners: stateData.owners,
            locations: stateData.locations,
            employees: stateData.employees,
            loadingStatus: false
          });
        });
      });
    });
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the APIManager post method, and redirect to the full animal list
   */
  constructNewAnimal = evt => {
    evt.preventDefault();
    if (
      this.state.name === "" ||
      this.state.breed === "" ||
      this.state.ownerId === "" ||
      this.state.locationId === "" ||
      this.state.employeeId === ""
    ) {
      window.alert("Please fill out all fields");
    } else {
      this.setState({ loadingStatus: true });
      const animal = {
        name: this.state.name,
        breed: this.state.breed,
        ownerId: this.state.ownerId,
        locationId: this.state.locationId,
        employeeId: this.state.employeeId
      };

      // Create the animal and redirect user to animal list
      APIManager.post("animals", animal).then(() =>
        this.props.history.push("/animals")
      );
    }
  };

  render() {
    return (
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="name"
              placeholder="Name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="breed"
              placeholder="Breed"
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
              placeholder="Location">
              <option default hidden value="">
                Select Location
              </option>
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
              placeholder="Employee">
              <option default hidden value="">
                Select Employee
              </option>
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
              onClick={this.constructNewAnimal}>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default AnimalForm;
