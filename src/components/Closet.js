import React, { useState, useEffect } from 'react'
import ClosetCard from './ClosetCard'

function Closet({ wallet, setWallet}) {

    const [ closetKicks, setClosetKicks ] = useState([])
    const [flippedKicks, setFlippedKicks] = useState()


    useEffect( () => {
        fetch("http://localhost:3000/closetkicks")
        .then( r => r.json())
        .then( data => setClosetKicks(data))
        }, [ closetKicks ])

        
    function handleDelete(kick) {

        fetch(`http://localhost:3000/closetkicks/${kick.id}`, {
            method: "DELETE",
            headers : {
                "Content-Type": "application/json"
            }
        })
        
    }


    return (
        <div>
             <h1>This is the Kicks Closet</h1>
        {
            closetKicks.map( ( kick ) => (
                
                <ClosetCard key={kick.id} kick={kick} name={kick.name} image={kick.image} color={kick.color} price={kick.price} resell={`$${kick.resellPrice}`} condition={kick.condition} description={kick.description} wallet={wallet} setWallet={setWallet} onDelete={handleDelete} /> ))
        }
        </div>
    )
}

export default Closet;