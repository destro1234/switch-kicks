import React from 'react'
import Header from "./Header"
import KicksCard from "./KicksCard"

function Store({ kicks, onBuy, wallet }) {
    
  return (
    <div>
      <h1>This is the Store!</h1>
      <h1 className="remaining">Wallet: ${wallet}</h1>

        {
            kicks.map( ( kick ) => (
                
                <KicksCard key={kick.id} kick={kick} name={kick.name} image={kick.image} color={kick.colorway} price={kick.price} condition={kick.condition} description={kick.description} onBuy={onBuy} wallet={wallet}/> ))
        }
        
    </div>
   ) 
    
}

export default Store;

