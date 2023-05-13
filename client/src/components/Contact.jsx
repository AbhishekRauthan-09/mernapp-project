import React from "react";

const Contact = () => {
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
                <span>83687375894</span>
              </div>
            </div>

            {/* Email Number */}
            <div className="contact_info_item">
              <ion-icon name="mail-outline"></ion-icon>
              <div className="contact_info_content">
                <h4>Email Address</h4>
                <span>demo@gmail.com</span>
              </div>
            </div>

            {/* Address */}
            <div className="contact_info_item">
              <ion-icon name="home-outline"></ion-icon>
              <div className="contact_info_content">
                <h4>Address</h4>
                <span>Uttarakhand</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_form">
          <div className="container mt-5">
            <form>
              <div class="row mb-3 inputRows">
                <div className="col-md-4">
                  <label for="user_name" className="form-label">
                    Enter Your message :
                  </label>
                  <textarea
                    type="text"
                    rows="4"
                    cols="50"
                    className="form-control py-3"
                    name="name"
                    id="user_name"
                    placeholder=""
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="col-12 inputRows">
            <button type="submit" className="btn btn-primary" name="signup" value="register">
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
