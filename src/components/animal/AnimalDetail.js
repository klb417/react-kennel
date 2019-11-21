import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIManager from "../../modules/APIManager";
import "./Animal.css";

import "./AnimalDetail.css";

class AnimalDetail extends Component {
  state = {
    name: "",
    breed: "",
    owner: "",
    location: "",
    employee: "",
    loadingStatus: true
  };

  componentDidMount() {
    //get(id) from APIManager and hang on to the data; put it into state
    APIManager.get(
      `animals/${this.props.animalId}?_expand=owner&_expand=location&_expand=employee`
    ).then(animal => {
      this.setState({
        name: animal.name,
        breed: animal.breed,
        owner: animal.owner.name,
        location: animal.location,
        employee: animal.employee,
        loadingStatus: false
      });
    });
  }
  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({ loadingStatus: true });
    APIManager.delete(`animals/${this.props.animalId}`).then(() =>
      this.props.history.push("/animals")
    );
  };
  render() {
    let imgSource;
    try {
      imgSource = require(`../../assets/${this.state.name
        .toLowerCase()
        .replace(/[\u{0080}-\u{FFFF}]/gu, "")}.png`);
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
          <p>Location: {this.state.location.address}</p>
          <Link to={`/employees/${this.state.employee.id}`}>
            <p>Responsibility: {this.state.employee.name}</p>
          </Link>
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}
          >
            Discharge
          </button>
          <Link to="/animals">
            <button type="button">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AnimalDetail;
