import React from "react";
import "./styles.css";

export const Header = ({ title, setIsPhotosMode}) => {
    return (
        <div className="header">
            <div className="header title">{title}</div>
            <button onClick={() => setIsPhotosMode(false)} className="header menuButton showPost">
                Posts
            </button>
            <button onClick={() => setIsPhotosMode(true)} className="header menuButton showPhotos">
                Photos
            </button>
        </div>
    );
};

