import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Header from "./src/components/Header";
import Body from "./src/components/Body";


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
