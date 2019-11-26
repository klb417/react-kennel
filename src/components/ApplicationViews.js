import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";

import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import BeastList from "./beast/BeastList";
import BeastDetail from "./beast/BeastDetail";
import LocationDetail from "./location/LocationDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerDetail from "./owner/OwnerDetail";
import BeastForm from "./beast/BeastForm";
import Login from "./auth/Login";
import BeastEditForm from "./beast/BeastEditForm";
import LocationForm from "./location/LocationForm";
import LocationEditForm from "./location/LocationEditForm";
import EmployeeWithBeasts from "./employee/EmployeeWithBeasts";
import EmployeeForm from "./employee/EmployeeForm";
class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => this.props.isAuthenticated();

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
          path="/beasts"
          render={props => {
            if (this.isAuthenticated()) {
              return <BeastList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/beasts/:beastId(\d+)"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <BeastDetail
                  beastId={parseInt(props.match.params.beastId)}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/beasts/:beastId(\d+)/edit"
          render={props => {
            return <BeastEditForm {...props} />;
          }}
        />
        <Route
          path="/beasts/new"
          render={props => {
            if (this.isAuthenticated()) {
              return <BeastForm {...props} />;
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
          exact
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
          path="/locations/:locationId(\d+)/edit"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <LocationEditForm
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
          path="/locations/new"
          render={props => {
            if (this.isAuthenticated()) {
              return <LocationForm {...props} />;
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
              return <EmployeeList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
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
          path="/employees/:employeeId(\d+)/details"
          render={props => {
            return <EmployeeWithBeasts {...props} />;
          }}
        />
        <Route
          path="/employees/new"
          render={props => {
            return <EmployeeForm {...props} />;
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
