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
  const [wallet, setWallet] = useState(1000)




    useEffect(() => {
      fetch("http://localhost:3000/kicks")
      .then( r => r.json())
      .then( data => setKicks(data))
    }, [])

    


    function handleBuy(kick) {
        let updateWallet = wallet - kick.price
        if (wallet > kick.price) {
          setWallet(updateWallet)
        }
        else {
          alert("You ran out of funds!!")
        }
      }

    

  return (
    <div>

    <Header />

    

      <Switch>
        <Route path="/flipped" >
          <Flipped wallet={wallet}/>
        </Route>

        <Route path="/closet">
          <Closet wallet={wallet} setWallet={setWallet}/>
        </Route>

        <Route path="/">
          <Store kicks={kicks} onBuy={handleBuy} wallet={wallet} />
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
