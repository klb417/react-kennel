import { Route, withRouter, Redirect } from "react-router-dom";
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
import Login from "./auth/Login";
import AnimalEditForm from "./animal/AnimalEditForm";
class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <>
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={props => {
            // if (this.isAuthenticated()) {
            return <Home />;
            // } else {
            //   return <Redirect to="/login" />;
            // }
          }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.isAuthenticated()) {
              return <AnimalList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/animals/:animalId(\d+)"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <AnimalDetail
                  animalId={parseInt(props.match.params.animalId)}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/animals/:animalId(\d+)/edit"
          render={props => {
            return <AnimalEditForm {...props} />;
          }}
        />
        <Route
          path="/animals/new"
          render={props => {
            if (this.isAuthenticated()) {
              return <AnimalForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/locations"
          render={props => {
            if (this.isAuthenticated()) {
              return <LocationList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/locations/:locationId(\d+)"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <LocationDetail
                  locationId={parseInt(props.match.params.locationId)}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/employees"
          render={props => {
            if (this.isAuthenticated()) {
              return <EmployeeList />;
            } else {
              return <Redirect to="/login" />;
            }
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
            if (this.isAuthenticated()) {
              return <OwnerList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
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
