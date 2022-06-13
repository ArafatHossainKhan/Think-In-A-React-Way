import { useState } from 'react';

const HoverWrapper = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(prev => prev + 1)
    }
  return (
    <div>
        {props.children(count, increment)}
    </div>
  )
}

export default HoverWrapper