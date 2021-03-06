import React from 'react';

import { ThemeContext } from '../ThemeContext';
import {BiAdjust} from 'react-icons/bi';




const DarkToggle = (props) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const onKeyDownHandler = (ev) =>{
    console.log(ev);
    if (ev.keyCode === 13) {
      toggleClass(ev);
    }
  };  

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
      <button onKeyDown={(ev)=> onKeyDownHandler(ev)} className="sm:block hover:text-accent transition duration-150 rotate-0 transform hover:scale-125 lst">
        <div className="sr-only">Toggle dark mode</div>
        <BiAdjust onClick={(ev)=>{toggleClass(ev)}}  size="" className="w-6 text-lg h-6 md:w-5 md:h-5 fill-current transform scale-150 md:mr-2" tabIndex="0"/>     
      </button>
  );
};

export default DarkToggle;