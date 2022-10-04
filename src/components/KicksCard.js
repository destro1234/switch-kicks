import React from "react"
import './Components.css'


function KicksCard({ kick, onBuy}) {



    function handleBuy() {
        alert(`Congrats you just bought a pair of  ${kick.name}!`)
        onBuy(kick)
        fetch("http://localhost:3000/closetkicks", {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: kick.name,
                image: kick.image,
                colorway: kick.color,
                resellPrice: kick.price + 100,
                price: kick.price,
                condition: kick.condition
        })
        })
        .then( r => r.json())
        .then( data => console.log(data))
    }

    return (
        
        <div className="store-card">
        
            <h2>{ kick.name } </h2>
            <img src={ kick.image }/>
            
            <h2>Color: { kick.colorway }</h2>
            <h2>Price: ${ kick.price }</h2>
            <h2>Condition: { kick.condition }</h2>
            <p>{ kick.description }</p>
            <button onClick={handleBuy}>Buy Kick!</button>
        </div>
    )
}

export default KicksCard;