import React from 'react'
import {useState} from 'react'

export const NumberBuilder = () => {
    let[numberString, setNumberString] = useState('');
    let[counter, setCounter] = useState(0);

    const stringOfNumbers = () => {
        setCounter(++counter)
        setNumberString(numberString += `${counter.toString()} `)

    }

    const reset =() => {
      setNumberString('');
      setCounter(0)
    }

  return (
    <div>
        <button onClick= {() => stringOfNumbers()}>Add Number</button>
        <button onClick={() => reset()}>Reset</button>
        <br />
        Number: {numberString}
    </div>
  )
}
