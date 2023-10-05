import { useState,createContext } from 'react';
import Div from './Components/Div/Div';
import './App.css';

const ThemeContext = createContext('light');
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <>
    <ThemeContext.Provider value = {{theme,setTheme}}>
      <Div></Div>
    </ThemeContext.Provider>
    </>
  );
}

export {ThemeContext};
export default App;
