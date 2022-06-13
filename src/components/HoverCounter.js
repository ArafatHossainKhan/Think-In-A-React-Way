
const HoverCounter = ({count, increment}) => {
  return (
    <h2 onMouseOver={increment}>Hover {count} times</h2>
  )
}

export default HoverCounter