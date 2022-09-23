import React from "react"

function KicksCard({ name, image, color, price, description, condition }) {
    return (
        <div>
        
            <h1>This is the { name } kick card</h1>
            <img src={ image }/>
            
            <h2>Color: { color }</h2>
            <h2>Price: { price }</h2>
            <h2>Condition: { condition }</h2>
            <p>{ description }</p>
        </div>
    )
}

export default KicksCard;