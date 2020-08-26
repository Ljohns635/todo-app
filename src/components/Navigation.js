import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <ul className="filters">
        <li>
          <NavLink activeClassName="selected" exact to="/">
            All
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/active">
            Active
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/completed">
            Completed
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
