import { useState } from 'react';

const HoverWrapper = ({render}) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(prev => prev + 1)
    }
  return (
    <div>
        {render(count, increment)}
    </div>
  )
}

export default HoverWrapper