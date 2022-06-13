
import './App.css';
import FunctionButton from './components/FunctionButton';
import FunctionWrapper from './components/FunctionWrapper';
import HoverCounter from './components/HoverCounter';
import HoverWrapper from './components/HoverWrapper';

function App() {
  return (
    <div className="App">
     <FunctionWrapper>
      {(count, handler) => <FunctionButton count={count} handler={handler}/>}
     </FunctionWrapper>
     <HoverWrapper render={(count, increment) => <HoverCounter count={count} increment={increment}/>}>
     </HoverWrapper>
    </div>
  );
}

export default App;
