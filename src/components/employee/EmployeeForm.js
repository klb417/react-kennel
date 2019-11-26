import React, { Component } from "react";
import APIManager from "../../modules/APIManager";

class EmployeeForm extends Component {
  state = {
    name: "",
    role: "",
    locationId: "",
    locations: [],
    loadingStatus: true
  };
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  constructNewEmployee = evt => {
    evt.preventDefault();
    if (
      this.state.name === "" ||
      this.state.role === "" ||
      this.state.locationId === ""
    ) {
      window.alert("Please fill out all fields");
    } else {
      this.setState({ loadingStatus: true });
      const employee = {
        name: this.state.name,
        role: this.state.role,
        locationId: this.state.locationId
      };
      APIManager.post("employees", employee).then(() => {
        this.props.history.push("/employees");
      });
    }
  };
  componentDidMount() {
    // this.setState({ loadingStatus: false });
    APIManager.get("locations").then(locations =>
      this.setState({ locations: locations, loadingStatus: false })
    );
  }
  render() {
    return (
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              placeholder="Name"
              id="name"
              onChange={this.handleFieldChange}
              required
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Role"
              id="role"
              onChange={this.handleFieldChange}
              required
            />
            <label htmlFor="role">Role</label>
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
            <label htmlFor="location">Location</label>
            {/* <input
              type="text"
              placeholder="Location"
              id="location"
              onChange={this.handleFieldChange}
              required
            /> */}
          </div>
          <div className="alignRight">
            <button
              disabled={this.state.loadingStatus}
              type="submit"
              onClick={this.constructNewEmployee}>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default EmployeeForm;
