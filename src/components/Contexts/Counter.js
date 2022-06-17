import { useState } from "react";
import { ClickCounter } from "./ClickCounter";
import ThemeContext from "./ThemeContext";

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount((prev) => prev + 1)
    }
  return (
    <ThemeContext.Consumer>
        {({theme, switchTheme}) => <ClickCounter switchTheme={switchTheme} theme={theme} count={count} incrementCount={incrementCount}/>}
    </ThemeContext.Consumer>
    
  )
}

export default Counter