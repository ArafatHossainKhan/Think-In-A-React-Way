
const Name = ({addGreeting}) => {
    const name = "Arafat Hossain Khan"
  return (
    <div>
        {addGreeting ? addGreeting("Hey", name) : name}
    </div>
    
  )
}

export default Name