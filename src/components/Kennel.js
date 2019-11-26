import React, { Component } from "react";
import "./Kennel.css";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

class Kennel extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews isAuthenticated={this.isAuthenticated} />
      </>
    );
  }
}

export default Kennel;
