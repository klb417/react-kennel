import React, { Component } from "react";
import "./Beast.css";

class BeastCard extends Component {
  render() {
    let imgSource;
    try {
      imgSource = require(`../../assets/${this.props.beast.icon}`);
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
            <span className="card-petname">{this.props.beast.name}</span>
          </h2>
          {/* <p>Species: {this.props.beast.breed}</p> */}
          {/* <p>Owner: {this.props.beast.owner.name}</p> */}
          <button
            type="button"
            onClick={() => this.props.deleteBeast(this.props.beast.id)}>
            Let Loose
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/beasts/${this.props.beast.id}/edit`);
            }}>
            Edit
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/beasts/${this.props.beast.id}`);
            }}>
            Details
          </button>
        </div>
      </div>
    );
  }
}

export default BeastCard;
