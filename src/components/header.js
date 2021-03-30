import React from 'react';
// import {BiAdjust} from 'react-icons/bi';
import {Link} from "gatsby";
import DarkToggle from './DarkToggle';
import { useState } from "react";

function Header() {   
    // const icon = <BiAdjust size={20} /> 
    const [darkmode,setDarkMode] = useState(false);
    
    return(
        <>
        <div className="sticky-nav bg-primary max-w-screen-xl mx-auto">
        <Link to="/" className="sticky-nav-button" >Home</Link>
        <Link to="/about/" className="sticky-nav-button" activeClassName="" >About</Link>
        <Link to="/blog/" className="sticky-nav-button" activeClassName="">Blog</Link>      
        <DarkToggle/>
    
        </div>
        </>
    );
// }
};

// export default Header;
export default Header;