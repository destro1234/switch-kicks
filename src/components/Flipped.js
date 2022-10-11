import React, { useState, useEffect } from "react"
import ClosetCard from "./ClosetCard"


function Flipped({ wallet }) {

    const [flipped, setFlipped] = useState(true)
    const [flippedKicks, setFlippedKicks] = useState([])
    // const [totalProfit, setTotalProfit] = useState(0)
    let totalProfit = 0

    useEffect( () => {
        fetch("http://localhost:3000/flippedkicks")
        .then( r => r.json())
        .then( data => setFlippedKicks(data))
        }, [ ])

        
        if (flippedKicks.length > 0 ) {
            totalProfit = flippedKicks.reduce(
            (previousValue, currentValue) => previousValue + currentValue.profit,
            totalProfit
          );
       }

    return (
        <div>
             <h1>Flipped Kicks!</h1>

            <div className="remaining">
             <h5>Wallet: ${ wallet }</h5>
             <h5>Total Profit: ${ totalProfit  } </h5>
             </div>

             <div className="row row-cols-1 row-cols-md-4 g-4">

        {
            flippedKicks.map( ( kick ) => (
                // console.log(kick.profit),
            
                    <ClosetCard key={kick.id} kick={kick} resell={`${kick.resellPrice}`} isFlipped={flipped} /> 

                
            ))
                
        }
        
        
        </div>
        </div>
    )
}

export default Flipped;