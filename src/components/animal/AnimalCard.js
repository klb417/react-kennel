import React, { Component } from "react";
import "./Animal.css";
import { Link } from "react-router-dom";

class AnimalCard extends Component {
  render() {

    let imgSource;
    try {
      imgSource = require(`../../assets/${this.props.animal.name
        .toLowerCase()
        .replace(/[\u{0080}-\u{FFFF}]/gu, "")}.png`);
    } catch (e) {
      imgSource = require("./dog.svg")
    }
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img
              src={imgSource}
              alt="My Monster"
            />
          </picture>
          <h2>
            Name: <span className="card-petname">{this.props.animal.name}</span>
          </h2>
          <p>Species: {this.props.animal.breed}</p>
          {/* <p>Owner: {this.props.animal.owner.name}</p> */}
          <button
            type="button"
            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
          >
            Discharge
          </button>
          <Link to={`/animals/${this.props.animal.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AnimalCard;
