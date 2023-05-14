import React, { useState } from "react";
import { NavLink , useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if(res.status === 400 || !data){
      alert("Invalid credentials")
    }
    else{
      alert("Login successful")
      navigate('/')
    }
  };
  return (
    <>
      <div className="container mt-5 myContainer">
        <h3>Enter Your Email & Password to Login.</h3>
        <form className="row g-3" method="POST">
          <div className="row mb-3 inputRows">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Enter your Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                name="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          <div className="row mb-3 inputRows">
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Enter your Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                name="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          <div className="col-12 mt-3 inputRows">
            <button
              type="submit"
              className="btn btn-primary"
              name="login"
              value="login"
              onClick={loginUser}
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
