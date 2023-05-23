import React from 'react'
import {useState} from 'react'

export const NumberBuilder = () => {
    let[numberString, setNumberString] = useState('');
    let[counter, setCounter] = useState(0);

    const stringOfNumbers = () => {
        setCounter(++counter)
        setNumberString(numberString += `${counter.toString()} `)

    }

  return (
    <div>
        <button onClick= {() => stringOfNumbers()}>Add Number</button>
        <button onClick={() => setNumberString('')}>Reset</button>
        <br />
        Number: {numberString}
    </div>
  )
}
