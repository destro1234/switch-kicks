import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import { Route } from "react-router-dom"

import Header from "./Header"
import KicksContainer from './KicksContainer'
import Store from './Store'
import './App.css';

function App() {

  const [kicks, setKicks] = useState([])


    useEffect(() => {
      fetch("http://localhost:3000/kicks")
      .then( r => r.json())
      .then( data => setKicks(data))
    }, [])

  

  return (
    <Route path="/">
      <Store kicks={kicks} />
    </Route>
    
  );
}

export default App;
