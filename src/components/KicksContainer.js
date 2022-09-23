import React from 'react'
import KicksCard from './KicksCard'

function KicksContainer({kicks}) {
   return (
    <div>
        <h1>This is the Kicks Container</h1>
        {
            kicks.map( ( kick ) => (
                
                <KicksCard key={kick.id} name={kick.name} image={kick.image} color={kick.colorway} price={kick.price} condition={kick.condition} description={kick.description}/> ))
        }
        
    </div>
   ) 
}

export default KicksContainer;