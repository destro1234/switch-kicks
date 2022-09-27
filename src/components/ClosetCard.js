import React, { useState } from "react"


function ClosetCard({ kick, name, image, color, price, description, condition, onBuy }) {

    const [purchase, setPurchased] = useState("")
    const [updatedPrice, setUpdatedPrice] = useState(price)
    
    function handleBuy(event) {
        price = `$${price.substring(1) * .5}`
        console.log("This is the closet")
        setUpdatedPrice(price)
        console.log(price)
        console.log(updatedPrice)
    }

    return (
        
        <div>
        
            <h1>This is the { name } kick card</h1>
            <img src={ image }/>
            
            <h2>Color: { color }</h2>
            <h2>Price: { updatedPrice }</h2>
            <h2>Condition: { condition }</h2>
            <p>{ description }</p>
            <button onClick={handleBuy}>Wear Kicks!</button>
        </div>
    )
}

export default ClosetCard;