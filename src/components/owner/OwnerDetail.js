import React, { Component } from "react";
import APIManager from "../../modules/APIManager";

class OwnerDetail extends Component {
  state = {
    name: "",
    address: "",
    phone: "",
    beasts: [],
    loadingStatus: true
  };
  componentDidMount() {
    APIManager.get(`owners/${this.props.ownerId}?_embed=beasts`).then(
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
            {this.state.beasts.map(beast => (
              <li key={beast.id}>{beast.name}</li>
            ))}
          </ul>
          <button type="button" onClick={this.handleDelete}>
            Remove
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/owners`);
            }}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;
