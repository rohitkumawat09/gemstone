// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// import { GiGems, GiCutDiamond } from "react-icons/gi";
// import {
//   FaGem,
//   FaBoxes,
//   FaMoneyBillWave,
//   FaGlobe,
//   FaLanguage,
//   FaShoppingCart
// } from "react-icons/fa";

// import logo from "../assets/logo1.png";
// import "./Header.css";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // MERGED DROPDOWN FOR BUY + SELL
//   const [buySellOpen, setBuySellOpen] = useState(false);
//   const buySellRef = useRef<HTMLLIElement | null>(null);

//   const [countryOpen, setCountryOpen] = useState(false);
//   const [languageOpen, setLanguageOpen] = useState(false);

//   const countryRef = useRef<HTMLLIElement | null>(null);
//   const langRef = useRef<HTMLLIElement | null>(null);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (buySellRef.current && !buySellRef.current.contains(e.target as Node)) {
//         setBuySellOpen(false);
//       }
//       if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
//         setCountryOpen(false);
//       }
//       if (langRef.current && !langRef.current.contains(e.target as Node)) {
//         setLanguageOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg custom-nav fixed-top">
//         <div className="container-fluid">

//           {/* Logo */}
//           <Link className="navbar-brand" to="/">
//             <img src={logo} alt="logo" className="main-logo" />
//           </Link>

//           {/* Hamburger */}
//           <button
//             className="navbar-toggler d-lg-none"
//             type="button"
//             onClick={() => setMenuOpen(true)}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Desktop Menu */}
//           <div className="desktop-menu d-none d-lg-flex">
//             <ul className="navbar-nav nav-gap mx-auto">

//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   <GiCutDiamond className="nav-icon" /> Home
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to="/gemstones">
//                   <GiGems className="nav-icon" /> Gemstones
//                 </Link>
//               </li>

//               {/* MERGED BUY + SELL DROPDOWN */}
//               <li className="nav-item dropdown" ref={buySellRef}>
//                 <button
//                   className="nav-link dropdown-btn"
//                   onClick={() => setBuySellOpen(!buySellOpen)}
//                 >
//                   <FaShoppingCart className="nav-icon" /> Buy & Sell ▾
//                 </button>

//                 {buySellOpen && (
//                   <div className="dropdown-menu show-drop">

//                     <h6 className="drop-title">BUY</h6>
//                     <Link to="/buy/stones">Buy Gemstones</Link>
//                     <Link to="/buy/premium">Buy Premium Stones</Link>
//                     <Link to="/buy/collection">Buy Collections</Link>

//                     <h6 className="drop-title">SELL</h6>
//                     <Link to="/sell/gemstone">Sell Gemstone</Link>
//                     <Link to="/sell/old">Sell Old Stone</Link>
//                     <Link to="/sell/exchange">Exchange Stone</Link>
//                   </div>
//                 )}
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to="/premium">
//                   <FaGem className="nav-icon" /> Premium Stones
//                 </Link>
//               </li>

//               {/* Country */}
//               <li className="nav-item dropdown" ref={countryRef}>
//                 <button
//                   className="nav-link dropdown-btn"
//                   onClick={() => setCountryOpen(!countryOpen)}
//                 >
//                   <FaGlobe className="nav-icon" /> Country ▾
//                 </button>

//                 {countryOpen && (
//                   <div className="dropdown-menu show-drop">
//                     <span>🇮🇳 India</span>
//                     <span>🇺🇸 USA</span>
//                     <span>🇬🇧 UK</span>
//                     <span>🇦🇪 UAE</span>
//                     <span>🇨🇦 Canada</span>
//                   </div>
//                 )}
//               </li>

//               {/* Language */}
//               <li className="nav-item dropdown" ref={langRef}>
//                 <button
//                   className="nav-link dropdown-btn"
//                   onClick={() => setLanguageOpen(!languageOpen)}
//                 >
//                   <FaLanguage className="nav-icon" /> Language ▾
//                 </button>

//                 {languageOpen && (
//                   <div className="dropdown-menu show-drop">
//                     <span>Hindi</span>
//                     <span>English</span>
//                     <span>Marathi</span>
//                     <span>Gujarati</span>
//                     <span>Tamil</span>
//                   </div>
//                 )}
//               </li>
//             </ul>

//             {/* Right Buttons */}
//             <div className="right-btns d-flex gap-3">
//               <Link className="btn btn-outline-success sign-in-btn" to="/">Sign In</Link>
//               <Link className="btn btn-success sign-up-btn" to="/">Sign Up</Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* MOBILE MENU */}
//       <div className={`side-menu ${menuOpen ? "open" : ""}`}>
//         <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>

//         <ul className="mobile-nav">
//           <li><Link to="/home">Home</Link></li>
//           <li><Link to="/gemstones">Gemstones</Link></li>

//           {/* MOBILE MERGED DROPDOWN */}
//           <li>
//             <h6 className="dropdown-title">Buy & Sell</h6>
//             <select className="form-select">
//               <option>Buy Gemstones</option>
//               <option>Buy Premium Stones</option>
//               <option>Buy Collection</option>
//               <option>Sell Gemstone</option>
//               <option>Sell Old Stone</option>
//               <option>Exchange Stone</option>
//             </select>
//           </li>
//         </ul>

//         <div className="mobile-buttons">
//           <Link className="btn btn-outline-success sign-in-btn" to="/
//           ">Sign In</Link>
//           <Link className="btn btn-success sign-up-btn" to="/">Sign Up</Link>
//         </div>
//       </div>

//       {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
//     </>
//   );
// };

// export default Header;
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { GiGems, GiCutDiamond } from "react-icons/gi";
import {
  FaGem,
  FaBoxes,
  FaMoneyBillWave,
  FaGlobe,
  FaLanguage,
  FaShoppingCart
} from "react-icons/fa";

import logo from "../assets/logo1.png";
import "./Header.css";

const Header = ({ openLogin, openRegister }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // MERGED DROPDOWN
  const [buySellOpen, setBuySellOpen] = useState(false);
  const buySellRef = useRef(null);

  const [countryOpen, setCountryOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const countryRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (buySellRef.current && !buySellRef.current.contains(e.target)) {
        setBuySellOpen(false);
      }
      if (countryRef.current && !countryRef.current.contains(e.target)) {
        setCountryOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-nav fixed-top">
        <div className="container-fluid">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="main-logo" />
          </Link>

          {/* Hamburger */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={() => setMenuOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
          <div className="desktop-menu d-none d-lg-flex">
            <ul className="navbar-nav nav-gap mx-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <GiCutDiamond className="nav-icon" /> Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/gemstones">
                  <GiGems className="nav-icon" /> Gemstones
                </Link>
              </li>

              {/* Buy + Sell Dropdown */}
              <li className="nav-item dropdown" ref={buySellRef}>
                <button
                  className="nav-link dropdown-btn"
                  onClick={() => setBuySellOpen(!buySellOpen)}
                >
                  <FaShoppingCart className="nav-icon" /> Buy & Sell ▾
                </button>

                {buySellOpen && (
                  <div className="dropdown-menu show-drop">
                    <h6 className="drop-title">BUY</h6>
                    <Link to="/buy/stones">Buy Gemstones</Link>
                    <Link to="/buy/premium">Buy Premium Stones</Link>
                    <Link to="/buy/collection">Buy Collections</Link>

                    <h6 className="drop-title">SELL</h6>
                    <Link to="/sell/gemstone">Sell Gemstone</Link>
                    <Link to="/sell/old">Sell Old Stone</Link>
                    <Link to="/sell/exchange">Exchange Stone</Link>
                  </div>
                )}
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/premium">
                  <FaGem className="nav-icon" /> Premium Stones
                </Link>
              </li>

              {/* Country */}
              <li className="nav-item dropdown" ref={countryRef}>
                <button
                  className="nav-link dropdown-btn"
                  onClick={() => setCountryOpen(!countryOpen)}
                >
                  <FaGlobe className="nav-icon" /> Country ▾
                </button>

                {countryOpen && (
                  <div className="dropdown-menu show-drop">
                    <span>🇮🇳 India</span>
                    <span>🇺🇸 USA</span>
                    <span>🇬🇧 UK</span>
                    <span>🇦🇪 UAE</span>
                    <span>🇨🇦 Canada</span>
                  </div>
                )}
              </li>

              {/* Language */}
              <li className="nav-item dropdown" ref={langRef}>
                <button
                  className="nav-link dropdown-btn"
                  onClick={() => setLanguageOpen(!languageOpen)}
                >
                  <FaLanguage className="nav-icon" /> Language ▾
                </button>

                {languageOpen && (
                  <div className="dropdown-menu show-drop">
                    <span>Hindi</span>
                    <span>English</span>
                    <span>Marathi</span>
                    <span>Gujarati</span>
                    <span>Tamil</span>
                  </div>
                )}
              </li>
            </ul>

            {/* RIGHT SIDE BUTTONS */}
            <div className="right-btns d-flex gap-3">
              <button className="btn btn-outline-success sign-in-btn" onClick={openLogin}>
                Sign In
              </button>

              <button className="btn btn-success sign-up-btn" onClick={openRegister}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>

        <ul className="mobile-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gemstones">Gemstones</Link></li>

          <li>
            <h6 className="dropdown-title">Buy & Sell</h6>
            <select className="form-select">
              <option>Buy Gemstones</option>
              <option>Buy Premium Stones</option>
              <option>Buy Collection</option>
              <option>Sell Gemstone</option>
              <option>Sell Old Stone</option>
              <option>Exchange Stone</option>
            </select>
          </li>
        </ul>

        <div className="mobile-buttons">
          <button className="btn btn-outline-success" onClick={openLogin}>Sign In</button>
          <button className="btn btn-success" onClick={openRegister}>Sign Up</button>
        </div>
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
};

export default Header;
