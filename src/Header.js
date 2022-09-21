import React from "react"
import './App.css'

import NavBar from "./NavBar"

function Header() {
    return (
        <div>
            <h1 className="App-header"> Welcome to SwitchKicks! </h1>
            <NavBar />
        </div>
    )
}

export default Header;