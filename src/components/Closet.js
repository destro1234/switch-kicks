import React from 'react'
import KicksCard from './KicksCard'

function Closet({kicks}) {
    return (
        <div>
             <h1>This is the Kicks Closet</h1>
        {
            kicks.map( ( kick ) => (
                
                <KicksCard key={kick.id} kick={kick} name={kick.name} image={kick.image} color={kick.colorway} price={kick.price} condition={kick.condition} description={kick.description} /> ))
        }
        </div>
    )
}

export default Closet;