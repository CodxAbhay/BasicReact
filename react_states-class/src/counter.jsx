import { useState } from "react"


export default function Counter(){
    // let [stateVariable, setStateVariable] = useState(0);
    let [count, setCount] = useState(0);

    function incCount(){
        setCount(count + 1);
    }

    return (
        <div>
            
            <button onClick={incCount}>Click me!</button>
            <p>{count}</p>
        </div>
    )
}