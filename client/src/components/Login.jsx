import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container mt-5 myContainer">
        <h3>Enter Your Email & Password to Login.</h3>
        <form className="row g-3">
          <div class="row mb-3 inputRows">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Enter your Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                name="email"
                autoComplete="off"
              />
            </div>
          </div>

          <div class="row mb-3 inputRows">
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Enter your Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              name="password"
              autoComplete="off"
            />
          </div>
          </div>

          <div className="col-12 mt-3 inputRows">
            <button
              type="submit"
              className="btn btn-primary"
              name="login"
              value="login"
            >
              Login
            </button>
            <NavLink
              to="/signup"
              style={{ marginLeft: "20px", textDecoration: "none" }}
            >
              Don't have an account
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
