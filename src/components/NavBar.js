import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <NavLink to={"/"} >Store</NavLink>
            <NavLink to={"/closet"}>Closet</NavLink>
        </div>
    )
}

export default NavBar;