import React, { useState } from "react"
import './Components.css'



function Form({ onSubmit }) {

    const [name, setName] = useState("Jordan 1")
    const [image, setImage] = useState("https://images.stockx.com/images/Air-Jordan-1-Retro-High-White-University-Blue-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1611777406")
    const [purchasePrice, setPurchasePrice] = useState(200)
    const [resellPrice, setResellPrice] = useState(400)
    const [condition, setCondition] = useState("Brand New/DS")

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleImageChange(event) {
        setImage(event.target.value)
    }

    function handlePriceChange(event) {
        setPurchasePrice(event.target.value)
    }

    function handleResellChange(event) {
        setResellPrice(event.target.value)
    }

    function handleConditionChange(event) {
        setCondition(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()

        const newSneaker = {
            name: name,
            image: image,
            resellPrice: resellPrice,
            price: purchasePrice,
            condition: condition,
        }

       onSubmit(newSneaker)
       
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <h3>Add a sneaker to your Closet!</h3>
                <div className="mb-3"><input type="text" onChange={handleNameChange} value={name} /></div>
                <div className="mb-3"><input type="text" onChange={handleImageChange} value={image} /></div>
                <div className="mb-3"><input type="text" onChange={handlePriceChange} value={purchasePrice} /></div>

                <div className="mb-3"><input type="text" onChange={handleResellChange} value={resellPrice} /></div>
                <div className="mb-3"><input type="text" onChange={handleConditionChange} value={condition} /></div>



            <button type="submit">Submit</button>
             </form>
        </div>
    )
}

export default Form;