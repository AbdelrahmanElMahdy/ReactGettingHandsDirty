import React from 'react';
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (  
            <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                    <NavLink className="nav-item nav-link" to="/home" >Vidly</NavLink>
                    <NavLink className="nav-item nav-link" to="/Customer" >people</NavLink>
                    <NavLink className="nav-item nav-link" to="/movies" >Movies</NavLink>
                    </div>
                </nav> 
            
    );
}
 
export default Navbar;