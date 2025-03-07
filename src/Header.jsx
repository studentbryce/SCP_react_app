import React from "react";
import headerImage from "./assets/SCP_Header.png"; // Import image
import headerTitle from "./assets/SCP_Archives.jpg"; // Import image
import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <img src={headerImage} alt="SCP Foundation" className="header-image" />
      <img src={headerTitle} alt="SCP Foundation Title" className="header-image" />
      <h1>Secure. Contain. Protect.</h1>
    </header>
  );
};

export default Header;