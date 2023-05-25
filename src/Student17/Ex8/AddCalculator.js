import React, {useState} from 'react'

export const AddCalculator = () => {
    let[counter, setCounter] = useState(0)
    
    const addNumbers = (number) => {

        if(number === '1'){
            setCounter(counter = counter + 1)
        }else if(number === '2'){

            setCounter(counter = counter + 2)

        }else if(number === '3'){
            setCounter(counter = counter + 3)
        }

    }
  return (
    <div>
        <button onClick={() =>addNumbers('1')}>Add 1</button>
        <button onClick={() =>addNumbers('2')}>Add 2</button>
        <button onClick={() =>addNumbers('3')}>Add 3</button>
        <br/>
        Total = {counter}
    </div>
  )
}
