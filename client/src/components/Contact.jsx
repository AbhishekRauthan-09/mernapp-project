import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [userData , setUserData] = useState({name:"",email:"",phone:"",message:""});
  const navigate = useNavigate();
  
  const callContactPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        },
        credentials: "include",
      });

      const data = await res.json();
    
      (res.status===404?navigate('/login'):setUserData({...userData,name:data.name, email:data.email,phone:data.phone}))
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    callContactPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  // Storing Data in State
  const handleInputs = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData , [name]:value})
  }


  // Send daa to backend
  const submitContactForm = async (e)=>{
      e.preventDefault()
      const {name , email , phone , message} = userData;

      const res = await fetch('/contact',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name,email,phone,message
        })
      })

      const data = await res.json();
     
      if(!data){
        alert('Message not Sent');
      }

      else{
        alert('Message Sent');
        setUserData({...userData, message:""});
      }



  }



  return (
    <>
      <div className="contact_info mt-5">
        <div className="container-fluid">
          <div className="row itemRow">
            {/* Phone Number */}
            <div className="contact_info_item">
              <ion-icon name="call-outline"></ion-icon>
              <div className="contact_info_content">
                <h4>Phone Number</h4>
                <span>{userData.phone}</span>
              </div>
            </div>

            {/* Email Number */}
            <div className="contact_info_item">
              <ion-icon name="mail-outline"></ion-icon>
              <div className="contact_info_content">
                <h4>Email Address</h4>
                <span>{userData.email}</span>
              </div>
            </div>

            {/* Address */}
            <div className="contact_info_item">
              <ion-icon name="home-outline"></ion-icon>
              <div className="contact_info_content">
                <h4>Address</h4>
                <span>{userData.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_form">
          <div className="container mt-5">
            <form method="POST">

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
                value={userData.name}
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
                value={userData.email}
                onChange={handleInputs}
              />
            </div>

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
                value={userData.phone}
                onChange={handleInputs}
              />
            </div>
          </div>

              <div className="row mb-3 inputRows">
                <div className="col-md-4">
                  <label htmlFor="user_name" className="form-label">
                    Enter Your message :
                  </label>
                  <textarea
                    type="text"
                    rows="4"
                    cols="50"
                    className="form-control py-3"
                    name="message"
                    value={userData.message}
                    id="user_name"
                    placeholder=""
                    autoComplete="off"
                    onChange={handleInputs}
                  />
                </div>
              </div>

              <div className="col-12 inputRows">
            <button type="submit" className="btn btn-primary" name="signup" value="register" onClick={submitContactForm}>
              Send
            </button>
          </div>
            </form>
          </div>
        </div>


      </div>
    </>
  );
};

export default Contact;
