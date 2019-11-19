import React, { Component } from "react";
import OwnerManager from "../../modules/OwnerManager";
import OwnerCard from "./OwnerCard";

class OwnerList extends Component {
  state = {
    owners: []
  };

  componentDidMount() {
    OwnerManager.getAll().then(owners => {
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
