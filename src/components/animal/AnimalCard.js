import React, { Component } from "react";
import "./Animal.css"

class AnimalCard extends Component {
  render() {
    const animalName = this.props.animal.name.toLowerCase().replace(/[\u{0080}-\u{FFFF}]/gu,"")
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`../../assets/${animalName}.png`)} alt="My Dog" />
          </picture>
          <h2>
            Name: <span className="card-petname">{this.props.animal.name}</span>
          </h2>
          <p>Species: {this.props.animal.breed}</p>
          <p>Owner: {this.props.animal.owner.name}</p>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;
