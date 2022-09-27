import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"

import Closet from "./components/Closet"
import Header from "./components/Header"
import Store from './components/Store'
import Flipped from "./components/Flipped"
import './App.css';

function App() {

  const [kicks, setKicks] = useState([])
  const [ closetKicks, setClosetKicks ] = useState([])
  const [wallet, setWallet] = useState(1000)




    useEffect(() => {
      fetch("http://localhost:3000/kicks")
      .then( r => r.json())
      .then( data => setKicks(data))
    }, [])


    function handleBuy(kick) {
        setClosetKicks([...closetKicks, kick])
        let updateWallet = wallet - kick.price.substring(1)
        if (wallet > kick.price.substring(1)) {
          setWallet(updateWallet)
        }
        console.log(updateWallet)
        
    }

  return (
    <div>

    <Header />

    <h1 className="remaining">Wallet: ${wallet}</h1>

      <Switch>
        <Route path="/flipped" >
          <Flipped />
        </Route>

        <Route path="/closet">
          <Closet kicks={closetKicks} wallet={wallet} />
        </Route>

        <Route path="/">
          <Store kicks={kicks} onBuy={handleBuy} wallet={wallet} />
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
