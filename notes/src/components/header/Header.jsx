import React from "react";
import "./styles.css";


export const Header = ({ title, setPosts, setPhotos}) => {
    return (
        <div className="header">
            <div className="header title">{title}</div>
            <button onClick={setPosts} className="header menuButton showPost">
                Posts
            </button>
            <button onClick={setPhotos} className="header menuButton showPhotos">
                Photos
            </button>
        </div>
    );
};

