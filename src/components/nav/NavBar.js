import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    console.log(this.props.history);
    const pathname = this.props.history.location.pathname;
    return (
      <header>
        <h1 className="site-title">
          Kaiju Kennels
          <br />
          <small>This was a really bad idea.</small>
        </h1>
        <nav>
          <ul className="container">
            <Link className="nav-link" to="/">
              <li className={pathname === "/" ? "active" : ""}>Home</li>
            </Link>
            <Link className="nav-link" to="/animals">
              <li className={pathname.includes("/animals") ? "active" : ""}>
                Animals
              </li>
            </Link>
            <Link className="nav-link" to="/locations">
              <li className={pathname.includes("/locations") ? "active" : ""}>
                Locations
              </li>
            </Link>
            <Link className="nav-link" to="/employees">
              <li className={pathname.includes("/employees") ? "active" : ""}>
                Employees
              </li>
            </Link>
            <Link className="nav-link" to="/owners">
              <li className={pathname.includes("/owners") ? "active" : ""}>
                Owners
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(NavBar);
