import withCounter from "./HOC/withCounter"
const ClickCounter =  ({count, setCount}) => {
return(
    <div>
        <button type="button" onClick={setCount}>Button Clicked {count} times</button>
    </div>
) 
}
export default withCounter(ClickCounter)