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
  const [ closetKicks, setClosetKicks ] = useState([])



    useEffect(() => {
      fetch("http://localhost:3000/kicks")
      .then( r => r.json())
      .then( data => setKicks(data))
    }, [])


    function handleBuy(kick) {
        setClosetKicks([...closetKicks, kick])
        console.log(closetKicks)
    }

  return (
    <div>
    <Header />
      <Switch>
   

        <Route path="/closet">
          <Closet kicks={closetKicks}/>
        </Route>

        <Route path="/">
          <Store kicks={kicks} onBuy={handleBuy} />
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
