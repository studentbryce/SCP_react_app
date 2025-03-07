import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Homepage = ({ data }) => {
    const getImagePath = (imageName) => {
        return `/SCP_react_app/assets/${imageName}`;  // Correct path for GitHub Pages
    };

    return (
        <div className="homepage">
            {data.map((item, index) => (
                <div key={index} className="homepage-item">
                    <Link to={`/scp/${item.title}`}>
                        {item.image && (
                            <img
                                src={getImagePath(item.image.src)}  // Use the correct image path here
                                alt={item.image.alt}
                                className="homepage-image"
                            />
                        )}
                        <h2>{item.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};


export default Homepage;