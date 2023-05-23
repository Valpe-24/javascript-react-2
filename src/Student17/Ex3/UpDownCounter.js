import React from 'react'
import { useState } from 'react';

export const UpDownCounter = () => {
    let [counter, setCounter] = useState(0); 

  return (
    <div>
        <button onClick ={() => setCounter(++counter)}>UP</button> {counter}
        <button onClick= {() => setCounter(--counter)}>DOWN</button>
        
    </div>
  )
}
