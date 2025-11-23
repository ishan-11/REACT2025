import React, { useState } from "react";
import { LOGO } from "../utils/constant";


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    return (
      <div className="header">
        {/* LEFT SIDE: Logo + Location */}
        <div className="header-left">
          <div className="logo">
            <img
              src={LOGO}
              alt="logo"
            />
          </div>
  
          <div className="location">
            <div className="location-main">
              <span className="location-name">Ishan1</span>
              <span className="location-area">
                Malad
              </span>
              <span className="location-arrow">▼</span>
            </div>
            <div className="location-underline" />
          </div>
        </div>
  
        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
  
        {/* RIGHT SIDE: Nav items */}
        <div
          className={
            "header-right" + (isMobileMenuOpen ? " mobile-open" : "")
          }
        >
          
  
          <div className="nav-item">
            {/* <span className="nav-icon">🔍</span> */}
            <span>Search</span>
          </div>
  
          <div className="nav-item">
            {/* <span className="nav-icon">🏷️</span> */}
            <span>
              Offers <span className="nav-tag-new">NEW</span>
            </span>
          </div>
  
          <div className="nav-item">
            {/* <span className="nav-icon">🛈</span> */}
            <span>Help</span>
          </div>
  
          <div className="nav-item">
            {/* <span className="nav-icon">👤</span> */}
            <span>Ishan</span>
          </div>
  
          <div className="nav-item nav-cart">
            {/* <span className="nav-icon nav-cart-count">0</span> */}
            <span>Cart</span>
          </div>
        </div>
      </div>
    );
  };
  
export default Header;