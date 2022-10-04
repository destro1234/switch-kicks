import React from 'react'
import KicksCard from './KicksCard'
import './Components.css'

function KicksContainer({kicks, onBuy, wallet}) {


    

   return (
    <div>
        {
            kicks.map( ( kick ) => (
                
                <KicksCard key={kick.id} kick={kick} name={kick.name} image={kick.image} color={kick.colorway} price={kick.price} condition={kick.condition} description={kick.description} onBuy={onBuy} wallet={wallet}/> ))
        }
        
    </div>
   ) 
}

export default KicksContainer;