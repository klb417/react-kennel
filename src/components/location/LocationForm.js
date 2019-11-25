import React, { Component } from "react";
import APIManager from "../../modules/APIManager";

class LocationForm extends Component {
  state = {
    address: "",
    hours: "",
    phone: "",
    loadingStatus: true
  };
  componentDidMount() {
    this.setState({ loadingStatus: false });
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  constructNewLocation = evt => {
    evt.preventDefault();
    if (
      this.state.address === "" ||
      this.state.hours === "" ||
      this.state.phone === ""
    ) {
      window.alert("Please fill out all fields");
    } else {
      this.setState({ loadingStatus: true });
      const location = {
        address: this.state.address,
        hours: this.state.hours,
        phone: this.state.phone
      };

      APIManager.post("locations", location).then(() => {
        this.props.history.push("/locations");
      });
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
              id="address"
              placeholder="Address"
            />
            <label htmlFor="address">Address</label>
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="hours"
              placeholder="Hours"
            />
            <label htmlFor="hours">Hours</label>
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="phone"
              placeholder="Phone"
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disable={this.state.loadingStatus}
              onClick={this.constructNewLocation}>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default LocationForm;
