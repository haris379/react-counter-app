import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          Navbar
          <span className="badge bg-primary rounded-pill ms-2">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;