import "./RegisterForm.css";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import logoImage from "../../assets/logo1.png";

const RegisterForm = () => {
  return (
    <div className="reg-container">
      <div className="reg-box">

        {/* LOGO */}
     <h2 className="logo">
  <span><img src={logoImage} alt="" /></span>
</h2>

        {/* Social Sign Up Buttons */}
        <div className="reg-social-row">
          <button className="reg-social-btn">
            <FcGoogle size={22} /> Sign Up
          </button>

          <button className="reg-social-btn">
            <FaGithub size={22} color="#fff" /> Sign Up
          </button>
        </div>

        {/* Divider */}
        <div className="reg-divider">
          <span></span> OR <span></span>
        </div>

        {/* Form Inputs */}
        <form className="reg-form">
          <input type="text" className="reg-input" placeholder="Name" />
          <input type="email" className="reg-input" placeholder="Email" />
          <input type="password" className="reg-input" placeholder="Password" />

          <button className="reg-btn">Sign Up</button>
        </form>

        {/* Footer */}
        <p className="reg-terms">
          By creating an account you are agree with our  
          <br />
          <span className="link">Privacy</span> and <span className="link">Policy</span>
        </p>

      </div>
    </div>
  );
};

export default RegisterForm;
