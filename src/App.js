import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import KicksContainer from './KicksContainer'
import './App.css';

function App() {

  const [kicks, setKicks] = useState([])


    useEffect(() => {
      fetch("http://localhost:3000/kicks")
      .then( r => r.json())
      .then( data => setKicks(data))
    }, [])

    console.log(kicks)

  return (
    <KicksContainer kicks={kicks} />
  );
}

export default App;
