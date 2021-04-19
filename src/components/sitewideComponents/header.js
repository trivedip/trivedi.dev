import React from 'react';
// import {BiAdjust} from 'react-icons/bi';
import {Link} from "gatsby";
import DarkToggle from './DarkToggle';
import { useState, useEffect } from "react";
import pages from './navigationPages';
import {BiMenu} from 'react-icons/bi';



function Header() {   
    const [menu,setOpen]= useState('false');
    const [loaded,setLoaded]=useState(false);

    const toggleMenu = () => {
        setOpen(!menu);
      };
    useEffect(() =>setLoaded(true),[])
    return(
        <>
                {loaded?
                <>
                <div className={menu ? "m-auto px-3 mt-8 sm:px-12 md:px-20 max-w-screen-xl z-30":"container md:px-20 m-auto max-w-screen-xl fixer z-30"}>
                    <nav className="flex space-x-6 items-center justify-center md:justify-start text-sm sm:flex flex-col md:flex-row z-30">
                        <div style={{dislay:'inline-block',width:'50px',float:'left',padding:'1rem 1rem 0 0'}}>                
                            <svg id="Layer_1" className="h-12 sm:h-10 w-12 sm:w-10 fill-current hover:text-accent transition duration-150 float-left" data-name="Layer 1" width="45px" viewBox="0 0 500 500" preserveAspectRatio="none"><path d="M164.7,331.7a171.94,171.94,0,0,1-37.15-4l15.06-61.24C149.14,269,156.16,270,164.7,270a91,91,0,0,0,34.63-7A87.66,87.66,0,0,0,247,215.24a91.44,91.44,0,0,0,7-35.14A86.42,86.42,0,0,0,247,146,90,90,0,0,0,228,117.85a86.74,86.74,0,0,0-28.62-19.07,88.83,88.83,0,0,0-69.27,0,86.7,86.7,0,0,0-28.61,19.07A90,90,0,0,0,82.37,146a86.42,86.42,0,0,0-7,34.13V478.28L13.1,410.51V180.1a146.42,146.42,0,0,1,12-58.73c8-18.58,18.57-34.64,32.12-48.19a154.17,154.17,0,0,1,48.19-32.63,150.39,150.39,0,0,1,118,0,162.38,162.38,0,0,1,48.69,32.63,160.22,160.22,0,0,1,32.63,48.19,150.36,150.36,0,0,1,0,118,154.11,154.11,0,0,1-32.63,48.19,156.35,156.35,0,0,1-48.69,32.63A153.14,153.14,0,0,1,164.7,331.7Z" transform="translate(-13.1 -28)"/><path d="M459.86,261.42a87.66,87.66,0,0,1-47.69-47.69,91,91,0,0,1-7-34.63V91.25h88.34V28H342.4V182.11c.5,20.58,4.52,40.16,13.05,58.23s19.58,34.13,33.13,47.18c13.55,13.56,29.62,24.1,48.19,32.13A142.34,142.34,0,0,0,495,331.7V268.45C482,268.45,470.4,266.44,459.86,261.42Z" transform="translate(-13.1 -28)"/><circle cx="152.1" cy="152.1" r="48.69"/></svg>
                        </div>
                        
                        
                        <div className={menu ? "hidden sm:flex flex-grow items-center space-x-6 z-30":"items-center menu-open sm:flex w-full z-30"}>
                            {pages.map((page)=>(
                                (page.active) ? <Link to={page.to} className="sticky-nav-button text-lg md:w-auto w-full" aria-label={page.ariaLabel} activeClassName="active">{page.name}</Link> : ''
                            ))}
                            <DarkToggle prop={menu}/> 
                        </div>
                        
                    </nav>
                </div>
                <div className="z-50">
                    <span className="sm:hidden absolute py-12 z-50 max-w-screen-xl focus:outline-none inline-block" style={{right:'20px',top:'-25px'}} onClick={toggleMenu}>
                        <BiMenu className="w-8 h-8 z-50" style={{transform:'scale(1.8)'}} />
                    </span>
                </div>
                </>
                :null}
        </>
    );
// }
};

// export default Header;
export default Header;