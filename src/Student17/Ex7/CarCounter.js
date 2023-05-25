import React, {useState} from 'react'

export const CarCounter = () => {
    let[ford, setFord] = useState(0);
    let[toyota, setToyota] = useState(0);
    let[chevy, setChevy] = useState(0);
    let[total, setTotal] = useState(0);

    const cars = (carName) => {

        if(carName === 'ford'){
            setFord(++ford)
            setTotal(++total)
            
        }else if(carName === 'toyota'){
            setToyota(++toyota)
            setTotal(++total)
            
        }else if(carName === 'chevy'){
            setChevy(++chevy)
            setTotal(++total)
        }
    }
  return (
    <div>
        <button onClick={() =>cars('ford')}>Ford</button>
        <button onClick={() =>cars('toyota')}>Toyota</button>
        <button onClick={() =>cars('chevy')}>Chevy</button>
        <br/>
        Ford: {ford}
        <br/>
        Toyota:{toyota}
        <br/> 
        Chevy:{chevy}
        <br/>
        TOTAL: {total}
    </div>
  )
}
