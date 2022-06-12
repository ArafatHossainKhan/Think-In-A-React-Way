
const FunctionButton = ({count, handler}) => {
  return (
    <button onClick={handler}>Button Clicked {count} times</button>
  )
}

export default FunctionButton