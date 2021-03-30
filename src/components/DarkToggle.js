import React, {useState} from 'react';

import { ThemeContext } from './ThemeContext';
import {BiAdjust} from 'react-icons/bi';


const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const [isActive,setActive] = useState('dark');
  if (!colorMode) {
    return null;
  }
  const iconClass = (colorMode === "light") ? "cl-red" : "cl-white";
  
  const toggleClass =(ev)=>{
    if (colorMode==='light'){
      ev.target.classList.remove('light');
      ev.target.classList.add('dark');
      setColorMode("dark")
    }else{
      ev.target.classList.add('light');
      ev.target.classList.remove('dark');
      setColorMode("light")
    }
  };

  return (
    <label>
      {/* <input
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={ev => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />{' '}
      Dark */}
    <BiAdjust onClick={(ev)=>{toggleClass(ev);}} className="iconClass"/> 
    
    </label>
  );
};

export default DarkToggle;