import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"

import Closet from "./components/Closet"
import Header from "./components/Header"
import KicksContainer from './components/KicksContainer'
import Store from './components/Store'
import './App.css';

function App() {

  const [kicks, setKicks] = useState([])


    useEffect(() => {
      fetch("http://localhost:3000/kicks")
      .then( r => r.json())
      .then( data => setKicks(data))
    }, [])

  return (
    <div>
    <Header />
      <Switch>
   

        <Route path="/closet">
          <Closet />
        </Route>

        <Route path="/">
          <Store kicks={kicks} />
        </Route>
        
      </Switch>
    </div>
    
  );
}

export default App;
