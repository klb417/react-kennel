import React, { Component } from "react";
import "./Kennel.css";
import AnimalCard from "./animal/AnimalCard";
import OwnerCard from "./owner/OwnerCard";
import LocationCard from "./location/LocationCard";
import EmployeeCard from "./employee/EmployeeCard";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

class Kennel extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default Kennel;
