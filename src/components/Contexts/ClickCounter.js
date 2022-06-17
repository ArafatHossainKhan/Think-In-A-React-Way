import { useContext } from "react";
import CountContext from "./CountContext";
import ThemeContext from "./ThemeContext";


export const ClickCounter = () => {
    const Context = useContext(ThemeContext);
    const CountCon = useContext(CountContext);

    const {theme, switchTheme} = Context;
    const style = theme === "dark" ? {backgroundColor: "black", color : "white"} : theme ==="red" ? {backgroundColor: "red", color : "white"} : null;
    const {count, incrementCount} = CountCon;
    
  return (
    
    <div style={style}>
        <h1>{count}</h1>
        <button onClick={incrementCount} type="button">Button Clicked {count} {count > 1 ? "Times" : 'Time'}</button>
        <button onClick={switchTheme}>Change Theme to {theme === "red" ? "dark" : "red"}</button>
    
        
    </div>
  )
}
