
import { useState } from 'react';
import './App.css';

import Themecontext from './components/Contexts/themeContext';
import HoverCounter from './components/HoverCounter';
import HoverWrapper from './components/HoverWrapper';
import Section from './components/Section';

function App() {
  const [theme, setTheme] = useState("red")
  return (
    <div className="App">
      <Themecontext.Provider value={{theme: theme, setTheme: setTheme}}>
        <Section />
      </Themecontext.Provider>

      
    
     <HoverWrapper render={(count, increment) => <HoverCounter count={count} increment={increment}/>}>
     </HoverWrapper>
    </div>
  );
}

export default App;
