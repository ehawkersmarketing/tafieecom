import React from "react";
import "./Signup.css";
import photo from "../assets/photo.png";
import google_icon from "../assets/google.png";
import Mask_group from "../assets/Mask_group.png";
import Tafi_logo_white from "../assets/Tafi_logo_white.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="div signup">
        <div className="div-8">
          <div className="div-9">
            <div className="column-2">
              <span className="span-5">
                <div className="div-13">Register</div>
                {/* <span className="span_name">
                  <div className="div_name-11" />
                  <div className="div_name-12">Full Name</div>
                </span> */}
                {/* <span className="span-7">
                  <div className="div-16" />
                  <div className="div-17">
                    <input type="text" placeholder="Full name" />
                  </div>
                </span> */}
                <span className="span-6">
                  <div className="div-14" />
                  <div className="div-15">
                    <input type="tel" placeholder="Enter your phone number" />
                  </div>
                </span>
                <button className="button_otp">Generate otp</button>
                <span className="span-7">
                  <div className="div-16" />
                  <div className="div-17">
                    <input type="tel" placeholder="Enter OTP" />
                  </div>
                </span>
                <label>
                  <input type="checkbox" />
                  Keep me signed in
                </label>
                <button
                  className="span-9"
                  onClick={() => console.log("Login button clicked")}
                >
                  Register
                </button>

                <div className="div-20">
                  <span className="register-text">Already a user? </span>
                  <Link to="/auth/login" className="create-account-text">
                    Login
                  </Link>
                </div>
                <div className="div-21">
                  <div className="div-22">
                    <img loading="lazy" src={google_icon} className="img-5" />
                  </div>
                </div>
              </span>
            </div>
            <div className="column">
              <div className="div-10">
                <div className="div-11">
                  <img loading="lazy" src={Mask_group} className="img-2" />
                  <span className="span-4">
                    <img
                      loading="lazy"
                      src={Tafi_logo_white}
                      className="img-3"
                    />
                    <div className="div-12">
                      {/* <span className="welcome-text">Welcome</span> */}
                      <br />
                    </div>
                  </span>
                  <img loading="lazy" src={photo} className="img-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
