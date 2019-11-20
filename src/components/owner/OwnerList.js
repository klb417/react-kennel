import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import OwnerCard from "./OwnerCard";

class OwnerList extends Component {
  state = {
    owners: []
  };

  componentDidMount() {
    APIManager.getAll("owners/?_embed=animals").then(owners => {
      this.setState({
        owners: owners
      });
    });
  }
  deleteOwner = id => {
    APIManager.delete(`owners/${id}`).then(() => {
      APIManager.getAll("owners/?_embed=animals").then(owners => {
        this.setState({
          owners: owners
        });
      });
    });
  };
  render() {
    return (
      <div className="container-cards">
        {this.state.owners.map(owner => (
          <OwnerCard
            key={owner.id}
            owner={owner}
            deleteOwner={this.deleteOwner}
          />
        ))}
      </div>
    );
  }
}

export default OwnerList;
