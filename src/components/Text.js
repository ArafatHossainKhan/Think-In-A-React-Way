

const Text = (props) => {
const addGreeting = (greeting, name) => `${greeting} ${name}`
  return props.children({addGreeting})
}

export default Text