import React from "react";
import {Link } from 'react-router-dom';


const NavBar =() =>{
    return (
    
        <div className="container">
            <div>
                <Link to="/" className=" btn">
                 Inicio
                </Link>
            </div>
            <div>
                <Link to="/breakFast" className=" btn">
                 Desayunos
                </Link>
            </div>
            <div>
                <Link to="/catalogue" className=" btn">
                 Catalogo 
                </Link>
            </div>
            <hr />
        </div>

        
    );
}

export default NavBar
