import React, { useState, useEffect } from 'react'
import ClosetCard from './ClosetCard'
import Form from './Form'
import "./Components.css"

function Closet({ wallet, setWallet, totalProfit}) {

    const [ closetKicks, setClosetKicks ] = useState([])
    const [ flipped, setFlipped ] = useState(false)


    useEffect( () => {
        fetch("http://localhost:3000/closetkicks")
        .then( r => r.json())
        .then( data => setClosetKicks(data))
        }, [ ])

        
    function handleDelete(kick) {

        fetch(`http://localhost:3000/closetkicks/${kick.id}`, {
            method: "DELETE",
            headers : {
                "Content-Type": "application/json"
            }
        })
        
    }

    

    function handleSubmit(newSneaker) {
        console.log(newSneaker)

        fetch("http://localhost:3000/closetkicks", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newSneaker)
        })
        .then(r => r.json())
        .then(data => setClosetKicks([...closetKicks, data]))

      }

      


    return (
        <div>
        <h1>Your Kicks Closet!</h1>
        <div className="remaining">
        <h5>Wallet: ${wallet}</h5>

        <h5>Total Profit: ${ totalProfit  } </h5>
        </div>
        
        
        <Form onSubmit={handleSubmit}/>


        <div className="row row-cols-1 row-cols-md-4 g-4">
        
        {
            closetKicks.map( ( kick ) => (
                <ClosetCard key={kick.id} kick={kick} resell={`${kick.resellPrice}`} wallet={wallet} setWallet={setWallet} onDelete={handleDelete} isFlipped={flipped} /> ))
        }

        </div>
        
        
        </div>
            )
        }
export default Closet;
                
                
