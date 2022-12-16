import React from "react";
import "./styles.css";

export function Footer ({title}){
    return (
        <>
            <div className="footer">
                <div className="footer title">
                {title}
                </div>   
            <div className="footer svg"></div>
            </div>
        </>
    );
};

//"На маленьком плоту" 
//компонента футера c svg(from Loza), принимающая в 
//себя надпись и он снизу потом я делаю пулреквест на лозу