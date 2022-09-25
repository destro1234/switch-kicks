import React from 'react'
import Header from "./Header"
import KicksContainer from "./KicksContainer"

function Store({kicks, onBuy}) {
    
        return (
            <div>
              
              <KicksContainer kicks={kicks} onBuy={onBuy} />
            </div>
          )
    
}

export default Store;