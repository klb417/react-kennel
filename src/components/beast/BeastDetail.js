import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIManager from "../../modules/APIManager";
import "./Beast.css";

import "./BeastDetail.css";

class BeastDetail extends Component {
  state = {
    name: "",
    breed: "",
    owner: "",
    location: "",
    employee: "",
    icon: "",
    loadingStatus: true
  };

  componentDidMount() {
    //get(id) from APIManager and hang on to the data; put it into state
    APIManager.get(
      `beasts/${this.props.beastId}?_expand=owner&_expand=location&_expand=employee`
    ).then(beast => {
      console.log(beast);
      this.setState({
        name: beast.name,
        breed: beast.breed,
        owner: beast.owner.name,
        location: beast.location,
        employee: beast.employee,
        icon: beast.icon,
        loadingStatus: false
      });
    });
  }
  handleDelete = () => {
    //invoke the delete function in BeastManger and re-direct to the beast list.
    this.setState({ loadingStatus: true });
    APIManager.delete(`beasts/${this.props.beastId}`).then(() =>
      this.props.history.push("/beasts")
    );
  };
  render() {
    let imgSource;
    try {
      imgSource = require(`../../assets/${this.state.icon}`);
    } catch (e) {
      imgSource = require("./dog.svg");
    }
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={imgSource} alt="My Monster" />
          </picture>
          <h3>
            <span style={{ color: "darkslategrey" }}>{this.state.name}</span>
          </h3>
          <p>Breed: {this.state.breed}</p>
          <p>Owner: {this.state.owner}</p>
          <Link
            style={{ textDecoration: "none" }}
            to={`/locations/${this.state.location.id}`}>
            {this.state.location.address ? (
              <p>Location: {this.state.location.address}</p>
            ) : (
              <></>
            )}
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={`/employees/${this.state.employee.id}`}>
            <p>Responsibility: {this.state.employee.name}</p>
          </Link>
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}>
            Let Loose
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/beasts/${this.props.beastId}/edit`);
            }}>
            Edit
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/beasts`);
            }}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default BeastDetail;
