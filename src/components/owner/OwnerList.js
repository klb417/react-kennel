import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import OwnerCard from "./OwnerCard";

class OwnerList extends Component {
  state = {
    owners: [],
    loadingStatus: true
  };

  componentDidMount() {
    APIManager.getAll("owners/?_embed=animals").then(owners => {
      this.setState({
        owners: owners,
        loadingStatus: false
      });
    });
  }
  deleteOwner = id => {
    this.setState({ loadingStatus: true });
    APIManager.delete(`owners/${id}`).then(() => {
      APIManager.getAll("owners/?_embed=animals").then(owners => {
        this.setState({
          owners: owners,
          loadingStatus: false
        });
      });
    });
  };
  render() {
    return (
      <>
        {this.state.loadingStatus ? (
          <p>App is loading</p>
        ) : (
          <div className="container-cards">
            {this.state.owners.map(owner => (
              <OwnerCard
                key={owner.id}
                owner={owner}
                deleteOwner={this.deleteOwner}
                {...this.props}
              />
            ))}
          </div>
        )}
      </>
    );
  }
}

export default OwnerList;
