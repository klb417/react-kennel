import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import "./BeastForm.css";

class BeastForm extends Component {
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

  /*  Local method for validation, set loadingStatus, create beast      object, invoke the APIManager post method, and redirect to the full beast list
   */
  constructNewBeast = evt => {
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
      const beast = {
        name: this.state.name,
        breed: this.state.breed,
        ownerId: Number(this.state.ownerId),
        locationId: Number(this.state.locationId),
        employeeId: Number(this.state.employeeId)
      };

      // Create the beast and redirect user to beast list
      APIManager.post("beasts", beast).then(() =>
        this.props.history.push("/beasts")
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
              onClick={this.constructNewBeast}>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default BeastForm;
