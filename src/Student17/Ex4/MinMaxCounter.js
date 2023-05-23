import React from 'react'
import {useState} from 'react'

export const MinMaxCounter = () => {
    let [counter, setCounter] = useState(0); 
    let [max, setMax] = useState(0);
    let [min, setMin] = useState(0);

    const upDown = (upOrDown) => {

        if (upOrDown === 'up'){
            setCounter(++counter)
            if(counter > max){
                setMax(counter)
            }

        }else{
            setCounter(--counter)
            if(counter < min){
                setMin(counter)
            } 
        }

    }

    return (
      <div>
          <button onClick ={() => upDown('up')}>UP</button> {counter}
          <button onClick= {() => upDown('down')}>DOWN</button>
          <br />
          Min: {min}
          <br /> 
          Max: {max}
          
      </div>
    )
}
