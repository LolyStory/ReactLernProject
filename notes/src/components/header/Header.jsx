import React from "react";
import "./styles.css";

export function Header ({title}) {
    return (
        <>
            <div className="header">
                {title}
            </div>
        </>
    )
};

//"На маленьком плоту" 
//компонента футера c svg(from Loza), принимающая в 
//себя надпись и он снизу потом я делаю пулреквест на лозу