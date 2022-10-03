import React, { useState, useEffect } from "react"
import ClosetCard from "./ClosetCard"


function Flipped({ wallet }) {

    const [flipped, setFlipped] = useState(true)
    const [flippedKicks, setFlippedKicks] = useState([])
    let totalProfit = 0

    useEffect( () => {
        fetch("http://localhost:3000/flippedkicks")
        .then( r => r.json())
        .then( data => setFlippedKicks(data))
        }, [ flippedKicks ])

        
       if (flippedKicks.length > 0 ) {
            totalProfit = flippedKicks.reduce(
            (previousValue, currentValue) => previousValue + currentValue.profit,
            totalProfit
          );
       }

    return (
        <div>
             <h1>This is the Flipped Kicks!</h1>

             <h2>Wallet: ${ wallet }</h2>

             <h2>Total Profit: ${ totalProfit  } </h2>
             {/* <h1 className="remaining">Wallet: ${wallet}</h1> */}
        {
            flippedKicks.map( ( kick ) => (
                // console.log(kick.profit),
                <ClosetCard key={kick.id} kick={kick} resell={`${kick.resellPrice}`} isFlipped={flipped} /> ))
                
        }
        

        </div>
    )
}

export default Flipped;