import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div className="nav nav-pills">
            
            <NavLink to={"/"} >Store</NavLink>
            <NavLink to={"/closet"}>Closet</NavLink>
            <NavLink to={"/flipped"}>Flipped</NavLink>

        </div>
    )
}

export default NavBar;