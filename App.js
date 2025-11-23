import React from "react";
import ReactDOM from "react-dom/client";
import resData from "./res.json"; // your JSON file

// Swiggy Cloudinary base URL
const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

// ---------------- HEADER ----------------
const Header = () => {
  return (
    <div className="header">
      {/* LEFT SIDE: Logo + Location */}
      <div className="header-left">
        <div className="logo">
          <img
            src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760"
            alt="logo"
          />
        </div>

        <div className="location">
          <div className="location-main">
            <span className="location-name">Ishan1</span>
            <span className="location-area">
              Malad, Mamledarwadi, Malad West...
            </span>
            <span className="location-arrow">▼</span>
          </div>
          <div className="location-underline" />
        </div>
      </div>

      {/* RIGHT SIDE: Nav items with icons (using emojis for now) */}
      <div className="header-right">
        <div className="nav-item">
          <span className="nav-icon">🧳</span>
          <span>Swiggy Corporate</span>
        </div>

        <div className="nav-item">
          <span className="nav-icon">🔍</span>
          <span>Search</span>
        </div>

        <div className="nav-item">
          <span className="nav-icon">🏷️</span>
          <span>
            Offers <span className="nav-tag-new">NEW</span>
          </span>
        </div>

        <div className="nav-item">
          <span className="nav-icon">🛈</span>
          <span>Help</span>
        </div>

        <div className="nav-item">
          <span className="nav-icon">👤</span>
          <span>Ishaan</span>
        </div>

        <div className="nav-item nav-cart">
          <span className="nav-icon nav-cart-count">0</span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

// ---------------- RESTAURANT CARD ----------------
const RestaurantCard = ({ name, cuisines, rating, imageId, areaName }) => {
  return (
    <div className="res-card">
      <img src={CDN_URL + imageId} alt={name} />
      <h3>{name}</h3>
      <p className="res-area">{areaName}</p>
      <p className="res-cuisines">{cuisines.join(", ")}</p>
      <p className="res-meta">
        <span className="res-rating">⭐ {rating}</span>
      </p>
    </div>
  );
};

// ---------------- BODY ----------------
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants" />
      </div>

      <div className="res-list">
        {resData.restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            cuisines={restaurant.info.cuisines}
            rating={restaurant.info.avgRating}
            imageId={restaurant.info.cloudinaryImageId}
            areaName={restaurant.info.areaName}
          />
        ))}
      </div>
    </div>
  );
};

// ---------------- APP LAYOUT ----------------
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// ---------------- RENDER APP ----------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
