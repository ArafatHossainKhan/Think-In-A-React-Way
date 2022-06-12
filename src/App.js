
import './App.css';
import FunctionButton from './components/FunctionButton';
import FunctionWrapper from './components/FunctionWrapper';

function App() {
  return (
    <div className="App">
     <FunctionWrapper>
      {(count, handler) => <FunctionButton count={count} handler={handler}/>}
     </FunctionWrapper>
    </div>
  );
}

export default App;
