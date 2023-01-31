import React from "react";
import "./styles.css";

<<<<<<< HEAD
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

//"На маленьком плоту"
//компонента футера c svg(from Loza), принимающая в
//себя надпись и он снизу потом я делаю пулреквест на лозу
=======
export const Header = ({ title }) => <div className="header">{title}</div>;
>>>>>>> 6819cd57d9ab60e199a26b346550886eaec4dd7f
