import React, { Component } from "react";
import APIManager from "../../modules/APIManager";

class LocationEditForm extends Component {
  state = {
    address: "",
    hours: "",
    phone: "",
    loadingStatus: true
  };
  handleStateChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  updateExistingLocation = () => {
    this.setState({ loadingStatus: true });
    const updatedLocation = {
      id: this.props.locationId,
      address: this.state.address,
      hours: this.state.hours,
      phone: this.state.phone
    };
    APIManager.update("locations/", updatedLocation).then(() => {
      this.props.history.push("/locations");
    });
  };
  componentDidMount() {
    APIManager.get(`locations/${this.props.locationId}`).then(location => {
      this.setState({
        address: location.address,
        hours: location.hours,
        phone: location.phone,
        loadingStatus: false
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
              className="formControl"
              value={this.state.address}
              onChange={this.handleStateChange}
              id="address"
            />
            <label htmlFor="address">Address</label>
            <input
              type="text"
              required
              className="formControl"
              value={this.state.hours}
              onChange={this.handleStateChange}
              id="hours"
            />
            <label htmlFor="hours">Hours</label>
            <input
              type="text"
              required
              className="formControl"
              value={this.state.phone}
              onChange={this.handleStateChange}
              id="phone"
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="alignRight">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.state.loadingStatus}
              onClick={this.updateExistingLocation}>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}
export default LocationEditForm;
