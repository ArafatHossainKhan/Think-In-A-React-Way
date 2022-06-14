
const FunctionButton = ({count, handler, setTheme, theme}) => {

  const style = theme === "dark" ? setTheme ={backgroundColor: "#000000", color: "#ffffff"} : theme === "red" ? setTheme ={backgroundColor: "red", color: "#ffffff"} : null

//   const style = {
//     dark : {backgroundColor: "#000000", color: "#ffffff"},
//     red: {backgroundColor: "red", color: "white"} 
// }



  return (
    <button style={style} onClick={handler}>Button Clicked {count} times</button>
  )
}

export default FunctionButton