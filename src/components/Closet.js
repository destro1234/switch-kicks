import React from 'react'
import ClosetCard from './ClosetCard'

function Closet({kicks, wallet}) {
    return (
        <div>
             <h1>This is the Kicks Closet</h1>
        {
            kicks.map( ( kick ) => (
                
                <ClosetCard key={kick.id} kick={kick} name={kick.name} image={kick.image} color={kick.colorway} price={kick.price} condition={kick.condition} description={kick.description} wallet={wallet} /> ))
        }
        </div>
    )
}

export default Closet;