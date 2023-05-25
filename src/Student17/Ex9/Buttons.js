import React, {useState} from 'react'

export const Buttons = () => {
    let[button1, setButton1] = useState('Push');
    let[button2, setButton2] = useState('Push');

    const changeName = (buttonNumber) => {
      if(buttonNumber === 1){
        setButton1('Pushed');
      }else{
        setButton2('Pushed')
      }
    }

    const reset = () => {
        setButton1('Push');
        setButton2('Push')
    }

  return (
    <div>
        <button onClick={() => changeName(1)}>{button1}</button>
        <br />
        <button onClick={() => changeName(2)} >{button2}</button>
        <br />
        <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

