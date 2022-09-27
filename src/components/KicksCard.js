import React, { useState } from "react"


function KicksCard({ kick, name, image, color, price, description, condition, onBuy, wallet }) {

    const [purchase, setPurchased] = useState("")

    function handleBuy(event) {
        onBuy(kick)
        condition = "pre-owned"
        console.log(wallet)
        console.log(event)
    }

    return (
        
        <div>
        
            <h1>This is the { name } kick card</h1>
            <img src={ image }/>
            
            <h2>Color: { color }</h2>
            <h2>Price: { price }</h2>
            <h2>Condition: { condition }</h2>
            <p>{ description }</p>
            <button onClick={handleBuy}>Buy Kick!</button>
        </div>
    )
}

export default KicksCard;