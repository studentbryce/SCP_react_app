import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import data from "./data.json"; // Importing data directly
import "./App.css"; // Import global styles

const App = () => {
  // Instead of using useState to manage dataList, we'll just import the data directly
  const dataList = data; // Directly using the static data (from JSON file)

  return (
    <div className="container">
      <Router>
        <Header />
        <Navbar data={dataList} /> {/* Passing the static dataList */}
        <Routes>
          <Route path="/" element={<Homepage data={dataList} />} />
          <Route path="/scp/:id" element={<Card data={dataList} />} /> {/* Passing data to Card */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;