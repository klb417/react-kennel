import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import "./Animal.css";

import "./AnimalDetail.css";

class AnimalDetail extends Component {
  state = {
    name: "",
    breed: "",
    owner: "",
    location: "",
    employee: ""
  };

  componentDidMount() {
    //get(id) from APIManager and hang on to the data; put it into state
    APIManager.get(`animals/${this.props.animalId}?_expand=owner&_expand=location&_expand=employee`).then(animal => {
      this.setState({
        name: animal.name,
        breed: animal.breed,
        owner: animal.owner.name,
        location: animal.location.address,
        employee: animal.employee.name
      });
    });
  }

  render() {
    let imgSource;
    try {
      imgSource = require(`../../assets/${this.state.name
        .toLowerCase()
        .replace(/[\u{0080}-\u{FFFF}]/gu, "")}.png`);
    } catch (e) {
      imgSource = require("./dog.svg")
    }
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={imgSource} alt="My Monster" />
          </picture>
          <h3>
            Name:{" "}
            <span style={{ color: "darkslategrey" }}>{this.state.name}</span>
          </h3>
          <p>Breed: {this.state.breed}</p>
          <p>Owner: {this.state.owner}</p>
          <p>Location: {this.state.location}</p>
          <p>Responsibility: {this.state.employee}</p>
        </div>
      </div>
    );
  }
}

export default AnimalDetail;
