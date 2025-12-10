import React from "react";
import "./LoginForm.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import logoImage from "../../assets/logo1.png";

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-box">

        {/* Logo */}
   <h2 className="logo">
  <span><img src={logoImage} alt="" /></span>
</h2>


        {/* Social Buttons */}
        <div className="social-row">
          <button className="social-btn">
            <FcGoogle size={22} /> Sign In
          </button>

          <button className="social-btn">
            <FaGithub size={22} color="#fff" /> Sign In
          </button>
        </div>

        {/* Divider */}
        <div className="divider">
          <span></span> OR <span></span>
        </div>

        {/* Inputs */}
        <form className="form">
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />

          <button className="login-btn">Sign In</button>
        </form>

        {/* Footer */}
        <p className="forgot">Forgot Password?</p>
        <p className="signup">
          Not a member yet? <span>Sign Up</span>
        </p>

      </div>
    </div>
  );
};

export default LoginForm;
