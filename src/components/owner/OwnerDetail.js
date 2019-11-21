import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIManager from "../../modules/APIManager";

class OwnerDetail extends Component {
  state = {
    name: "",
    address: "",
    phone: "",
    animals: [],
    loadingStatus: true
  };
  componentDidMount() {
    APIManager.get(`owners/${this.props.ownerId}?_embed=animals`).then(
      owner => {
        this.setState({
          ...owner,
          loadingStatus: false
        });
      }
    );
  }
  handleDelete = () => {
    this.setState({ loadingStatus: true });
    APIManager.delete(`owner/${this.props.ownerId}`).then(() => {
      this.props.history.push("/owners");
    });
  };
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span className="card-owner">{this.state.name}</span>
          </h3>
          <p>Address: {this.state.address}</p>
          <p>Phone: {this.state.phone}</p>
          <ul>
            pets:
            {this.state.animals.map(animal => (
              <li key={animal.id}>{animal.name}</li>
            ))}
          </ul>
          <button type="button" onClick={this.handleDelete}>
            Remove
          </button>
          <Link to={"/owners"}>
            <button type="button">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;
