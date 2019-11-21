import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIManager from "../../modules/APIManager";

class LocationDetail extends Component {
  state = {
    address: "",
    hours: "",
    phone: "",
    employees: [],
    animals: [],
    loadingStatus: true
  };

  componentDidMount() {
    APIManager.get(
      `locations/${this.props.locationId}?_embed=employees&_embed=animals`
    ).then(location => {
      this.setState({
        address: location.address,
        hours: location.hours,
        phone: location.phone,
        employees: location.employees,
        animals: location.animals,
        loadingStatus: false
      });
    });
  }
  handleDelete = () => {
    this.setState({ loadingStatus: true });
    console.log(this.props);
    APIManager.delete(`locations/${this.props.locationId}`).then(() => {
      this.props.history.push("/locations");
    });
  };
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span style={{ color: "darkslategrey" }}>{this.state.address}</span>
          </h3>
          <p>Hours: {this.state.hours}</p>
          <p>Phone: {this.state.phone}</p>
          <ul>
            Employees:
            {this.state.employees.map(employee => (
              <li key={employee.id}>{employee.name}</li>
            ))}
          </ul>
          <ul>
            Animals:
            {this.state.animals.map(animal => (
              <li key={animal.id}>{animal.name}</li>
            ))}
          </ul>
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}
          >
            Close
          </button>
          <Link to="/locations">
            <button type="button">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LocationDetail;
