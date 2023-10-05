import './Div.css'
import Paragraph from '../Paragraph/Paragraph';
import { useContext } from 'react';
import {ThemeContext} from '../../App'

function Div(){
    const {theme,setTheme} = useContext(ThemeContext) 
 
    return(
        <> 
            <h1>{theme}</h1>
            <Paragraph>{theme}</Paragraph>  
            <button onClick={()=>theme == 'light'?setTheme('dark'):setTheme('light') }>change</button>
        </>
    )
}
export default Div;