
export const ClickCounter = ({count, incrementCount, theme, switchTheme}) => {
    const style = theme === "dark" ? {backgroundColor: "black", color : "white"} : theme ==="red" ? {backgroundColor: "red", color : "white"} : null
  return (
    <div style={style}>
        <h1>{count}</h1>
        <button onClick={incrementCount} type="button">Button Clicked {count} {count > 1 ? "Times" : 'Time'}</button>
        <button onClick={switchTheme}>Change Theme to {theme === "red" ? "dark" : "red"}</button>
    

    </div>
  )
}
