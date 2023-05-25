import React, {useState} from "react";

// input: none
// output: render a button and a counter - counter resets after it reaches 10
// approach: create a react component, render the button, text and the count.
// state: counter - tracks the # of times button has been clicked
// functions: a function to handle clicking of button - updates counter (increases by 1)
// a function to handle reseting of counter to 0 (when counter reaches 10)

export const ResetCounter = () => {
    let [counter, setCounter] = useState(0);

    const handleClick = () => setCounter(counter += 1);
    const handleReset = () => setCounter(0);

    return(
        <div>
            <button onClick={() => {
                    handleClick();
                    if (counter >= 10) handleReset();
                }}
            >Push Me!
            </button>

            Counter: {counter}
            
        </div>
    )
}