import { useState } from "react";
import { ClickCounter } from "./ClickCounter";
import CountContext from "./CountContext";


const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount((prev) => prev + 1)
    }
const providerValue = {
    count,
    incrementCount
}
  return (
    <CountContext.Provider value={providerValue}>
        <ClickCounter/>
    </CountContext.Provider>
    
  )
}

export default Counter