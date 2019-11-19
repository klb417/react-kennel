import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import OwnerCard from "./OwnerCard";

class OwnerList extends Component {
  state = {
    owners: []
  };

  componentDidMount() {
    APIManager.getAll("owners").then(owners => {
      this.setState({
        owners: owners
      });
    });
  }

  render() {
    return this.state.owners.map(owner => (
      <OwnerCard key={owner.id} owner={owner} />
    ));
  }
}

export default OwnerList;
