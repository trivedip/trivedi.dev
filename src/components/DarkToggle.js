import React, {useState} from 'react';

import { ThemeContext } from './ThemeContext';
import {BiAdjust} from 'react-icons/bi';


const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const [isActive,setActive] = useState('dark');
  if (!colorMode) {
    return null;
  }
  
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
      <button className="hidden text-2xl sm:block hover:text-accent transition duration-150 rotate-0 transform hover:scale-125">
        <BiAdjust onClick={(ev)=>{toggleClass(ev);}} size="170px" className="w-6 text-lg h-6 md:w-5 md:h-5 fill-current transform scale-150"/>     
      </button>
  );
};

export default DarkToggle;