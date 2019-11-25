import React, { Component } from "react";
import "./Animal.css";

class AnimalCard extends Component {
  render() {
    let imgSource;
    try {
      imgSource = require(`../../assets/${this.props.animal.icon}`);
    } catch (e) {
      imgSource = require("./dog.svg");
    }
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={imgSource} alt="My Monster" />
          </picture>
          <h2>
            <span className="card-petname">{this.props.animal.name}</span>
          </h2>
          {/* <p>Species: {this.props.animal.breed}</p> */}
          {/* <p>Owner: {this.props.animal.owner.name}</p> */}
          {/* <button
            type="button"
            onClick={() => this.props.deleteAnimal(this.props.animal.id)}>
            Let Loose
          </button> */}
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/animals/${this.props.animal.id}`);
            }}>
            Details
          </button>
          {/* <button
            type="button"
            onClick={() => {
              this.props.history.push(`/animals/${this.props.animal.id}/edit`);
            }}>
            Edit
          </button> */}
        </div>
      </div>
    );
  }
}

export default AnimalCard;
