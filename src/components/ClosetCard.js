import React, { useState } from "react"
import './Components.css'

function ClosetCard({ kick, resell, wallet, setWallet, onDelete, isFlipped }) {

    const [price, setPrice] = useState(resell)
    const [updatedCondition, setUpdatedCondition] = useState(kick.condition)
    const [flipped, setFlipped] = useState(isFlipped)
    const profit = (price - kick.price)


    function handleWear() {
        
        setPrice(kick.price * .5)
        let wornCondition = 'pre-owned'
        setUpdatedCondition(wornCondition)
    }

    function handleSell() {
        
        let updateWallet = parseInt(wallet) + parseInt(price)
        setWallet(updateWallet)
        onDelete(kick)
        setFlipped(!flipped)        

       
        fetch("http://localhost:3000/flippedkicks", {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: kick.name,
                image: kick.image,
                colorway: kick.color,
                resellPrice: price,
                price: kick.price,
                description: kick.description,
                condition: updatedCondition,
                profit: profit
        })
        })
    }

    function Card() {

        if (flipped === true ) {
            return (
                <div className="card">
                <h1> { kick.name } </h1>
                <img src={ kick.image }/>
                <h2>Purchase Price: ${ kick.price }</h2>
                <h2>Resell Price: ${ price } </h2>
                <button className="btn btn-primary"> You { profit > 0 ? `made $${ profit }`: `lost $${ profit }` }! </button>
                </div>

            )
           
        }
        else if (flipped === false) {
            return (
                
                <div>
                
                    <h1>{ kick.name } </h1>
                    <img src={ kick.image }/>
                    <h2>Purchase Price: ${ kick.price }</h2>
                    <h2>Resell Price: ${ price } </h2>
                    <h2>Condition: { updatedCondition }</h2>
                    
                    
                    <div class="d-grid gap-2">
                        <button className="btn btn-primary" type="button" onClick={handleWear}>Wear Kicks!</button>
                        <button className="btn btn-primary" type="button" onClick={handleSell}>Sell Kicks!</button>
                    
                    </div>
                </div>
                )
        }
    }


      

    
    return (
    
        
        
            
        <div >
        

            <Card />
            
            
        </div>
    )
}

export default ClosetCard;