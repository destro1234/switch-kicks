import React from 'react'
import Header from "./Header"
import KicksContainer from "./KicksContainer"

function Store({ kicks, onBuy, wallet }) {
    
        return (
            <div>
              
              <KicksContainer kicks={kicks} onBuy={onBuy} wallet={wallet} />
            </div>
          )
    
}

export default Store;