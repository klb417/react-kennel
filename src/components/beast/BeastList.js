import React, { Component } from "react";
//import the components we will need
import BeastCard from "./BeastCard";
import APIManager from "../../modules/APIManager";

class BeastList extends Component {
  //define what this component needs to render
  state = {
    beasts: []
  };

  componentDidMount() {
    //getAll from APIManager and hang on to that data; put it in state
    APIManager.getAll("beasts/?_expand=owner").then(beasts => {
      this.setState({
        beasts: beasts
      });
    });
  }

  deleteBeast = id => {
    APIManager.delete(`beasts/${id}`).then(() => {
      APIManager.getAll("beasts/?_expand=owner").then(newBeasts => {
        this.setState({
          beasts: newBeasts
        });
      });
    });
  };

  render() {
    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/beasts/new");
            }}>
            Admit Beast
          </button>
        </section>
        <div className="container-cards">
          {this.state.beasts.map(beast => (
            <BeastCard
              key={beast.id}
              beast={beast}
              deleteBeast={this.deleteBeast}
              {...this.props}
            />
          ))}
        </div>
      </>
    );
  }
}

export default BeastList;
