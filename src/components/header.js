import React from 'react';
// import {BiAdjust} from 'react-icons/bi';
import {Link} from "gatsby";
import DarkToggle from './DarkToggle';
import { useState } from "react";
import pages from './navigationPages';


function Header() {   
    // const icon = <BiAdjust size={20} /> 
    const [darkmode,setDarkMode] = useState(false);
    
    return(
        <>
        <div className="container m-auto px-5 sm:px-12 md:px-20 max-w-screen-xl h-32 overflow-hidden">
        <nav className="mt-auto h-full flex space-x-6 items-center justify-center md:justify-start text-sm">
        <span style={{width:'50px',float:'left',padding:'1rem 1rem 0 0'}}>
        {/* <svg id="Layer_1" data-name="Layer 1" className="h-12 sm:h-10 w-12 sm:w-10 fill-current hover:text-accent transition duration-150 float-left" data-name="Layer 1" width="45px" viewBox="0 0 500 500" preserveAspectRatio="none"><path d="M170.82,324.27a151.43,151.43,0,0,1-33.15-3.63l13.44-55.46c5.82,2.28,12.09,3.19,19.71,3.19a80,80,0,0,0,30.9-6.37,77.28,77.28,0,0,0,25.54-17.27,78.6,78.6,0,0,0,17-25.91A83.88,83.88,0,0,0,250.55,187a79.35,79.35,0,0,0-6.27-30.91,81.59,81.59,0,0,0-17-25.45,77.28,77.28,0,0,0-25.54-17.27,78.16,78.16,0,0,0-61.81,0,77.14,77.14,0,0,0-25.53,17.27,81.62,81.62,0,0,0-17,25.45A79.35,79.35,0,0,0,91.08,187V457L35.54,395.64V187a134.22,134.22,0,0,1,10.75-53.18C53.46,117,62.86,102.46,75,90.18a137.49,137.49,0,0,1,43-29.54,132.42,132.42,0,0,1,105.27,0,145.08,145.08,0,0,1,43.45,29.54,145.47,145.47,0,0,1,29.11,43.64,138.05,138.05,0,0,1,0,106.82,137.14,137.14,0,0,1-72.56,73.18A134.94,134.94,0,0,1,170.82,324.27Z" transform="translate(-6.5 -7.5)"/><path d="M434.2,260.64a77.34,77.34,0,0,1-25.53-17.27,78.55,78.55,0,0,1-17-25.91,83.37,83.37,0,0,1-6.27-31.37V106.55h78.84V49.28H329.39V188.82c.44,18.64,4,36.36,11.64,52.73s17.47,30.91,29.57,42.72c12.09,12.28,26.43,21.82,43,29.09a125.29,125.29,0,0,0,52,10.91V267C453.91,267,443.61,265.18,434.2,260.64Z" transform="translate(-6.5 -7.5)"/><ellipse cx="164.76" cy="179.5" rx="43.45" ry="44.09"/><rect x="3.5" y="3.5" width="480" height="480" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="7"/></svg> */}
        <svg id="Layer_1" className="h-12 sm:h-10 w-12 sm:w-10 fill-current hover:text-accent transition duration-150 float-left" data-name="Layer 1" width="45px" viewBox="0 0 500 500" preserveAspectRatio="none"><path d="M164.7,331.7a171.94,171.94,0,0,1-37.15-4l15.06-61.24C149.14,269,156.16,270,164.7,270a91,91,0,0,0,34.63-7A87.66,87.66,0,0,0,247,215.24a91.44,91.44,0,0,0,7-35.14A86.42,86.42,0,0,0,247,146,90,90,0,0,0,228,117.85a86.74,86.74,0,0,0-28.62-19.07,88.83,88.83,0,0,0-69.27,0,86.7,86.7,0,0,0-28.61,19.07A90,90,0,0,0,82.37,146a86.42,86.42,0,0,0-7,34.13V478.28L13.1,410.51V180.1a146.42,146.42,0,0,1,12-58.73c8-18.58,18.57-34.64,32.12-48.19a154.17,154.17,0,0,1,48.19-32.63,150.39,150.39,0,0,1,118,0,162.38,162.38,0,0,1,48.69,32.63,160.22,160.22,0,0,1,32.63,48.19,150.36,150.36,0,0,1,0,118,154.11,154.11,0,0,1-32.63,48.19,156.35,156.35,0,0,1-48.69,32.63A153.14,153.14,0,0,1,164.7,331.7Z" transform="translate(-13.1 -28)"/><path d="M459.86,261.42a87.66,87.66,0,0,1-47.69-47.69,91,91,0,0,1-7-34.63V91.25h88.34V28H342.4V182.11c.5,20.58,4.52,40.16,13.05,58.23s19.58,34.13,33.13,47.18c13.55,13.56,29.62,24.1,48.19,32.13A142.34,142.34,0,0,0,495,331.7V268.45C482,268.45,470.4,266.44,459.86,261.42Z" transform="translate(-13.1 -28)"/><circle cx="152.1" cy="152.1" r="48.69"/></svg>
        </span>
            <div className="hidden sm:flex flex-grow items-center space-x-6">
                {pages.map((page)=>(
                    <Link to={page.to} className="sticky-nav-button text-lg">{page.name}</Link>
                ))}
            </div>
            <DarkToggle/>        
        </nav>
        </div>
        </>
    );
// }
};

// export default Header;
export default Header;