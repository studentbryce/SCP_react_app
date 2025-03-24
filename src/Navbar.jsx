import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Navbar = ({ data }) => {
  return (
    <nav className="navbar">
      <ul>
        {/* Add Home link */}
        <li>
          <Link to="/" className="navbar-button">Home</Link>
        </li>

        {/* Dynamically render other links from data */}
        {data.map((item, index) => (
          <li key={index}>
            <Link to={`/scp/${item.title}`} className="navbar-button">{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
