import withCounter from "./HOC/withCounter";

const HoverCounter = ({count, setCount}) => {
    return <div><h1 onMouseOver={setCount}>Hover {count} times</h1></div>
}

export default withCounter(HoverCounter)