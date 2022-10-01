import React, { useState } from "react"


function ClosetCard({ kick, name, image, price, resell, condition, wallet, setWallet, onDelete }) {

    const [updatedPrice, setUpdatedPrice] = useState(price)
    const [updatedCondition, setUpdatedCondition] = useState(condition)
    
    function handleWear() {
        price = `$${price.substring(1) * .5}`
        let wornCondition = 'pre-owned'
        setUpdatedPrice(price)
        setUpdatedCondition(wornCondition)
    }

    function handleSell() {
        let updateWallet = wallet + parseInt(updatedPrice.substring(1))
        setWallet(updateWallet)
        onDelete(kick)
      }

    return (
    
        <div>
        
            <h1>This is the { name } kick card</h1>
            <img src={ image }/>
            <h2>Purchase Price: { price }</h2>
            <h2>Resell Price: {resell} </h2>
            <h2>Condition: { updatedCondition }</h2>
            <button onClick={handleWear}>Wear Kicks!</button>
            <button onClick={handleSell}>Sell Kicks!</button>
        </div>
    )
}

export default ClosetCard;