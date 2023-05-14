import React, { useState } from "react";
import { NavLink , useNavigate} from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      }),
    });

    const data = res.json();
    if(data.status === 422 ||!data){
      alert('Invalid Registration');
      console.log('Invalid Registration')
    }else{
      alert('Registration Successfully');
      console.log('Successfully Registered');
      navigate('/login');
    }
  };

  return (
    <>
      <div className="container myContainer">
        <h3>Fill All The Field To Register.</h3>
        <form className="row g-3" method="POST">
          <div className="row mb-3 inputRows">
            <div className="col-md-4">
              <label htmlFor="user_name" className="form-label">
                Enter Your Name :
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="user_name"
                placeholder=""
                autoComplete="off"
                value={user.name}
                onChange={handleInputs}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="inputEmail4" className="form-label">
                Enter your Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                name="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="row mb-3 inputRows">
            <div className="col-md-4">
              <label htmlFor="user_phone" className="form-label">
                Enter Your Phone Number:
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="user_Phone"
                placeholder=""
                autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="user_work" className="form-label">
                Enter Your Profession:
              </label>
              <input
                type="text"
                className="form-control"
                name="work"
                id="user_work"
                placeholder=""
                autoComplete="off"
                value={user.work}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="row mb-3 inputRows">
            <div className="col-md-4">
              <label htmlFor="inputPassword4" className="form-label">
                Enter your Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                name="password"
                autoComplete="off"
                value={user.password}
                onChange={handleInputs}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="inputCPassword" className="form-label">
                Enter Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="inputCPassword"
                name="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="col-12 inputRows">
            <button
              type="submit"
              className="btn btn-primary"
              name="signup"
              value="register"
              onClick={postData}
            >
              Sign in
            </button>
            <NavLink
              to="/login"
              style={{ marginLeft: "20px", textDecoration: "none" }}
            >
              Already a user
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
