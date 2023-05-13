import React from "react";
import Img1 from "../Img/img1.jpg";

const About = () => {
  return (
    <>
      <div className="aboutMePage">
        <div className="aboutBox">
          <div className="first_section">
            <div className="imgSection">
              <img src={Img1} alt="" />
            </div>
            <div className="nameProfession_section">
              <h5>User Name Here</h5>
              <span>User Profession</span>
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
                User Id : <span>874857845934758347</span>
              </li>
              <li>
                Name : <span>Abhishek Rauthan</span>
              </li>
              <li>
                Email : <span>abhishekrauthan733@gmail.com</span>
              </li>
              <li>
                Phone No. : <span>7668983758</span>
              </li>
              <li>
                Profession : <span>Web Developer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
