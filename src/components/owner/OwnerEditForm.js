import React, { Component } from "react";
import APIManager from "../../modules/APIManager";

class OwnerEditForm extends Component {
  state = {
    id: "",
    name: "",
    address: "",
    phone: "",
    pets: [],
    loadingStatus: true
  };
  componentDidMount() {
    APIManager.get(`owners/${this.props.ownerId}`).then(owner => {
      this.setState({ ...owner, loadingStatus: false });
    });
  }
  render() {
    return (
      <form>
        <fieldset>
          <div className="gridform"></div>
        </fieldset>
      </form>
    );
  }
}

export default OwnerEditForm;
