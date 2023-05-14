import React, { useEffect, useState } from "react";
const Home = () => {
  const [userData, setUserData] = useState("");
  const [registered ,setRegistered] = useState(false)
  const callHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(res.status)
      if (res.status === 404) {
        console.log("User Not Registered");
      }
      else{
        console.log(data)
        setUserData(data)
        setRegistered(true)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callHomePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="homePage">
        <div className="home_div">
          <p className="pt-5">welcome</p>

          {
            (registered === false?<h1>We Are The MERN Developer</h1>:<div><h1>Hello <span>{userData.name}</span>, Great To See You.</h1></div>)
          }

        </div>
      </div>
    </>
  );
};

export default Home;
