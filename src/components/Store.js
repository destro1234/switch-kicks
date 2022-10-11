import React, { useState } from 'react'
import KicksCard from "./KicksCard"

function Store({ kicks, onBuy, wallet }) {
    

  


  return (
    <div>
      <h1>Welcome to  the Store!</h1>

      <div className="remaining">
      <h5>Wallet: ${wallet}</h5>

      
      </div>


        {
            kicks.map( ( kick ) => (
                
                <KicksCard key={kick.id} kick={kick} name={kick.name} image={kick.image} color={kick.colorway} price={kick.price} condition={kick.condition} description={kick.description} onBuy={onBuy} wallet={wallet}/> ))
        }
        
    </div>
   ) 
    
}

export default Store;

