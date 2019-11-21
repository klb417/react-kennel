import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";

import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerDetail from "./owner/OwnerDetail";
import AnimalForm from "./animal/AnimalForm";

class ApplicationViews extends Component {
  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            return <AnimalList {...props} />;
          }}
        />
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/animals/new"
          render={props => {
            return <AnimalForm {...props} />;
          }}
        />
        <Route
          exact
          path="/locations"
          render={props => {
            return <LocationList />;
          }}
        />
        <Route
          path="/locations/:locationId(\d+)"
          render={props => {
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/employees"
          render={props => {
            return <EmployeeList />;
          }}
        />
        <Route
          path="/employees/:employeeId(\d+)"
          render={props => {
            return (
              <EmployeeDetail
                employeeId={parseInt(props.match.params.employeeId)}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/owners"
          render={props => {
            return <OwnerList />;
          }}
        />
        <Route
          path="/owners/:ownerId(\d+)"
          render={props => {
            return (
              <OwnerDetail
                ownerId={parseInt(props.match.params.ownerId)}
                {...props}
              />
            );
          }}
        />
      </>
    );
  }
}

export default ApplicationViews;
