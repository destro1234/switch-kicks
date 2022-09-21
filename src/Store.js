import React from 'react'
import Header from "./Header"
import KicksContainer from "./KicksContainer"

function Store({kicks}) {
    
        return (
            <div>
              <Header/>
              <KicksContainer kicks={kicks} />
            </div>
          )
    
}

export default Store;