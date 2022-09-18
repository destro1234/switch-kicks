import React from "react"

function KicksCard({ name, image, style, color, price, date, description }) {
    return (
        <div>
        
            <h1>This is the { name } kick card</h1>
            <img src={ image }/>
            <h2>Style: { style }</h2>
            <h2>Color: { color }</h2>
            <h2>Price: { price }</h2>
            <h2>Date: { date }</h2>
            <p>{ description }</p>
        </div>
    )
}

export default KicksCard;