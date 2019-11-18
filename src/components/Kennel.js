import React, { Component } from "react";
import "./Kennel.css";
import AnimalCard from "./animal/AnimalCard";
import OwnerCard from "./owner/OwnerCard";
import LocationCard from "./location/LocationCard";
import EmployeeCard from "./employee/EmployeeCard";

class Kennel extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>
            Student Kennels
            <br />
            <small>Loving care when you're not there.</small>
          </h2>
          <address>
            Visit Us at the Nashville North Location
            <br />
            500 Puppy Way
          </address>
        </div>
        <div>
        <AnimalCard />
        <LocationCard />
        <OwnerCard />
        <EmployeeCard />
        </div>
      </div>
    );
  }
}

export default Kennel;
