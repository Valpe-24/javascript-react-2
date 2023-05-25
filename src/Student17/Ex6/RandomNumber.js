import React, {useState} from 'react'

export const RandomNumber = () => {
  let [randNum, setRandNum] = useState(0)

  const generateNumber = () => {
    setRandNum(Math.floor(Math.random() * 11))
  }
  return (
    <div>
      Random Number: {randNum}
      <br />
      <button onClick={() =>generateNumber()}>Generate</button>
      
    </div>
  )
}
