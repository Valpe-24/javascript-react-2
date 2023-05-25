import React, {useState} from 'react'

export const Timer = () => {
    let[startTime, setStartTime] = useState('');
    let[endTime, setEndTime] = useState('');
    let[result, setResult] = useState('');
    let [text, setText] = useState('Stopped')

    const timePassed = () =>{

      if (startTime === ''){
        setStartTime(new Date())
        setText('Started...')

      }else{
        setEndTime(new Date())
        setText('Stopped')
        let time = (endTime.getTime() - startTime.getTime())/1000;
        setResult(`${time} seconds`)
        

      }
      
    }

  return (
    <div>
        <button onClick={()=> timePassed()}>{text}</button>
        <br/>
        Elasped Time: {result}
    </div>
  )
}
