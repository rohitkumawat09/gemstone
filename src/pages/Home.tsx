import { useEffect, useState, useRef } from "react";

import "./Home.css";

import gemPhone from "../assets/ganesh.png";
import gemSlider1 from "../assets/Head.png";
import gemSlider2 from "../assets/na.png";

import LoginForm from "../pages/Auth/LoginForm";
import RegisterForm from "../pages/Auth/RegisterForm";

import Header from "../components/Header";

import { FaGem, FaShoppingCart, FaExchangeAlt } from "react-icons/fa";

const Home = () => {
  const sliderImages = [gemSlider1, gemSlider2, gemPhone];
  const [current, setCurrent] = useState(0);

  /** -------------------------
   * IMAGE SLIDER
   -------------------------- */
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startSlider = () => {
    stopSlider();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
  };

  const stopSlider = () => {
    if (intervalRef.current !== null) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  /** -------------------------
   * POPUP STATES
   -------------------------- */
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const closePopup = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  /** -------------------------
   * SCROLL REVEAL ANIMATION
   -------------------------- */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {/* Header with props */}
      <Header openLogin={openLogin} openRegister={openRegister} />

      <section className="hero-section container-fluid">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-6 col-md-12 left-box reveal fade-left">
            <h5 className="tag">
              <FaGem className="tag-icon" /> Gemstones On The Go
            </h5>

            <h1 className="title">
              Buy and Sell<br />
              <span className="highlight">Gemstones</span><br />
              of your choice!
            </h1>

            <div className="btn-group">
              <button className="btn btn-success hero-btn">
                <FaShoppingCart className="btn-icon" /> Buy Gemstone
              </button>

              <button className="btn btn-outline-success hero-btn2">
                <FaExchangeAlt className="btn-icon" /> Sell Gemstone
              </button>
            </div>

            <div className="store-icons mt-4">
              <img
                src="https://themewagon.github.io/Crypgo/images/hero/playstore.png"
                alt="Google Play"
                className="store-img"
              />
              <img
                src="https://themewagon.github.io/Crypgo/images/hero/applestore.png"
                alt="App Store"
                className="store-img"
              />
            </div>
          </div>

          {/* RIGHT SIDE SLIDER */}
          <div className="col-lg-6 col-md-12 text-center reveal fade-right">
            <div
              className="slider-box"
              onMouseEnter={stopSlider}
              onMouseLeave={startSlider}
            >
              <img
                key={current}
                src={sliderImages[current]}
                className="hero-slider-image"
                alt="Slider"
              />
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------
          LOGIN POPUP
      -------------------------- */}
      {showLogin && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <LoginForm />
            <button className="close-popup" onClick={closePopup}>✕</button>
          </div>
        </div>
      )}

      {/* -------------------------
          REGISTER POPUP
      -------------------------- */}
      {showRegister && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <RegisterForm />
            <button className="close-popup" onClick={closePopup}>✕</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
