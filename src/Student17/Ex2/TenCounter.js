import React from 'react'
import {useState} from 'react'

export const TenCounter = () => {
    let [counter, setCounter] = useState(0);
    
    const count10 = () => {
        setCounter(++counter); 

        if (counter === 11){
            setCounter(0); 
        }
    }

  return (
    <div>
        <button onClick={() => count10()}> Push </button>
          Counter: {counter}
    </div>
  )
}
