import React from "react"


function KicksCard({ kick, name, image, color, price, description, condition, onBuy}) {


    function handleBuy(event) {
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
                resellPrice: parseInt(kick.price.substring(1)) + 100,
                price: kick.price, 
                description: kick.description,
                condition: kick.condition
        })
        })
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