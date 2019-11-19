import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'

import LocationCard from './location/LocationCard'
import EmployeeCard from './employee/EmployeeCard'
import OwnerCard from './owner/OwnerCard'
import AnimalList from './animal/AnimalList'


class ApplicationViews extends Component {

  render() {
    return (
      <>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/locations" render={(props) => {
          return <LocationCard />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeCard />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerCard />
        }} />
      </>
    )
  }
}

export default ApplicationViews