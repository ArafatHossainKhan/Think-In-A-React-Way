import './App.css';
import Name from './components/Name';
import Text from "./components/Text";
function App() {
  return (
  <Text>
    {({addGreeting}) => <Name addGreeting={addGreeting}/>}
  </Text>
  );
}

export default App;
