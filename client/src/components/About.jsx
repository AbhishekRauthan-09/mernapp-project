import React, { useEffect, useState } from "react";
import Img1 from "../Img/img1.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [user,setUser] = useState({})
  const navigate = useNavigate();
  
  const callAboutPage = async () => {
    try {
      const res = await fetch("/aboutme", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        },
        credentials: "include",
      });

      const data = await res.json();
    
      (res.status===404?navigate('/login'):setUser(data))

    } catch (error) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    callAboutPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
      <div className="aboutMePage">
        <form method="GET">
          <div className="aboutBox">
            <div className="first_section">
              <div className="imgSection">
                <img src={Img1} alt="" />
              </div>
              <div className="nameProfession_section">
                <h5>{user.name}</h5>
                <span>{user.work}</span>
                <p>
                  Ranking : <span>1/10</span>
                </p>
              </div>

              <div className="editBtn">
                <input type="submit" value="Edit Profile" name="btnAddMore" />
              </div>
            </div>

            <div className="content_section">
              <ul>
                <li>
                  User Id : <span>{user._id}</span>
                </li>
                <li>
                  Name : <span>{user.name}</span>
                </li>
                <li>
                  Email : <span>{user.email}</span>
                </li>
                <li>
                  Phone No. : <span>{user.phone}</span>
                </li>
                <li>
                  Profession : <span>{user.work}</span>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
