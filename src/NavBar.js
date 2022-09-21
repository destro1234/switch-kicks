import React from "react";
import ReactDom from "react-dom";
import { BrowseRouter, NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <NavLink to={"/"} >Home</NavLink>
        </div>
    )
}

export default NavBar;