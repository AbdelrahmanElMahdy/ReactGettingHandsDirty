import React from 'react';
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (  
            <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                    <NavLink to="/home" >Vidly</NavLink>
                    <NavLink to="/people" >people</NavLink>
                    <NavLink to="/movies" >Movies</NavLink>

                    
                    </div>
                </nav> 
            
    );
}
 
export default Navbar;