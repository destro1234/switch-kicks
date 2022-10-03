import React, { useState } from "react"


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
        // let allProfit = parseInt(totalProfit) + parseInt(profit) 
        // console.log(allProfit)
        // setTotalProfit(allProfit)
        
        let updateWallet = parseInt(wallet) + parseInt(price)
        setWallet(updateWallet)
        onDelete(kick)
        setFlipped(!flipped)
        console.log(!flipped)
        

       
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
                <div>
                <h1> { kick.name } </h1>
                <img src={ kick.image }/>
                <h2>Purchase Price: ${ kick.price }</h2>
                <h2>Resell Price: ${ price } </h2>
                {/* <h2>Condition: { updatedCondition }</h2> */}
                <button> Congratulations you made ${ profit }! </button>
                </div>

            )
           
        }
        else if (flipped === false) {
            return (
                <div>
                    <h1>This is the { kick.name } kick card</h1>
                    <img src={ kick.image }/>
                    <h2>Purchase Price: ${ kick.price }</h2>
                    <h2>Resell Price: ${ price } </h2>
                    <h2>Condition: { updatedCondition }</h2>
                    <button onClick={handleWear}>Wear Kicks!</button>
                    <button onClick={handleSell}>Sell Kicks!</button>
                </div>
                )
        }
    }


      

    
    return (
    
        <div>
        
           

            <Card />
            
        </div>
    )
}

export default ClosetCard;