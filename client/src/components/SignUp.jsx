import React from "react";
import {NavLink} from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="container myContainer">
        <h3>Fill All The Field To Register.</h3>
        <form className="row g-3">
          <div class="row mb-3 inputRows">
            <div className="col-md-4">
              <label for="user_name" className="form-label">
                Enter Your Name :
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="user_name"
                placeholder=""
                autoComplete="off"
              />
            </div>

            <div className="col-md-4">
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
            <div className="col-md-4">
              <label for="user_phone" className="form-label">
                Enter Your Phone Number:
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="user_Phone"
                placeholder=""
                autoComplete="off"
              />
            </div>

            <div className="col-md-4">
              <label for="user_work" className="form-label">
                Enter Your Profession:
              </label>
              <input
                type="text"
                className="form-control"
                name="work"
                id="user_work"
                placeholder=""
                autoComplete="off"
              />
            </div>
          </div>

          <div class="row mb-3 inputRows">
            <div className="col-md-4">
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

            <div className="col-md-4">
              <label for="inputCPassword" className="form-label">
                Enter Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="inputCPassword"
                name="cPassword"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="col-12 inputRows">
            <button type="submit" className="btn btn-primary" name="signup" value="register">
              Sign in
            </button>
            <NavLink to="/login" style={{marginLeft:"20px",textDecoration:"none"}}>Already a user</NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
