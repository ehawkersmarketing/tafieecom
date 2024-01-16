import React from "react";
import "./Login.css";
import photo from "../assets/photo.png";
import google_icon from "../assets/google.png";
import Mask_group from "../assets/Mask_group.png";
import Tafi_logo_white from "../assets/Tafi_logo_white.png";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <>
      <div className="div login">
        <div className="div-8">
          <div className="div-9">
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
                      <span className="welcome-text">Welcome</span>
                      <br />
                    </div>
                  </span>
                  <img loading="lazy" src={photo} className="img-4" />
                </div>
              </div>
            </div>
            <div className="column-2">
              <span className="span-5">
                <div className="div-13">Login Account</div>

                <span className="span-6">
                  <div className="div-14" />
                  <div className="div-15">
                    <input type="tel" placeholder="Enter your phone number" />
                  </div>
                </span>
                {/* <div className="input-phone">
                  <input type="tel" placeholder="Enter phone number" />
                </div> */}
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
                  Login
                </button>

                <div className="div-20">
                  <span className="register-text">
                    Haven’t registered yet?{" "}
                  </span>
                  <Link to="/auth/signup" className="create-account-text">
                    Create an account
                  </Link>
                </div>
                <div className="div-21">
                  <div className="div-22">
                    <img loading="lazy" src={google_icon} className="img-5" />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

// import React from "react";
// import "./Login.css";

// import google_icon from "../assets/google.png";

// const Login = () => {
//   return (
//     <div class="main">
//       <div className="body">
//         <div className="inputContainer">
//           <div className="text">Login</div>
//           <div className="inputs">
//             <div className="input">
//               <input type="number" placeholder="Number" />
//             </div>
//             <div className="otp-button">
//               <button>Generate OTP</button>
//             </div>
//             <div className="input">
//               <input type="number" placeholder="OTP" />
//             </div>
//             <div className="input">
//               <input type="checkbox" placeholder="Terms and conditions" />
//             </div>
//             <div className="login-button">
//               <button>Login</button>
//             </div>
//             <div className="logo">
//               <img src={google_icon} alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="imageContainer">
//           <div className="image"></div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;
