
import { useState } from 'react';
import './App.css';
import Section from './components/Contexts/Section';
import ThemeContext from './components/Contexts/ThemeContext';
function App() {
  const [theme, setTheme] = useState('red')
  const switchTheme = () => {
    if(theme === "red") return setTheme("dark")
    else return setTheme("red")
  }
  const providerValue = {
    theme,
    setTheme,
    switchTheme
  }
 
  return (
    <div className="App">
      <ThemeContext.Provider value={providerValue}>
      <Section/>
      </ThemeContext.Provider> 
    </div>
  );
}

export default App;
