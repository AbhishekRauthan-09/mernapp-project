import React from "react";
import {NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div className="container-fluid">
          <span className="navbar-brand">
            Navbar
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/about">
                  About me
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/contact">
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/signup">
                  SignUp
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
