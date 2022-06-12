import { useState } from 'react';

const FunctionWrapper = (props) => {
    const[count, setCount] = useState(0);
    const handler = () => {
        setCount(prev => prev + 1)
    }
  return (
    <div>{props.children(count, handler)}</div>
  )
}

export default FunctionWrapper