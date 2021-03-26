import React from 'react';
// import styled from 'styled-components';
import {BiAdjust} from 'react-icons/bi';
// import { useState } from "react";
import {Link} from "gatsby";
import ThemeContext,{ ThemeProvider } from "./themeContext.js";
import PropTypes from 'prop-types'

// const Toggle = styled.button`
//     background-color: ${props => props.theme.pageBackground};
//     color: ${props => props.theme.titleColor};
//     &:focus {
//         outline: none;
//     }
// `;
// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

function Header(props, {children}) {
    // function changeTheme() {
    //     if (props.theme === "light") {
    //         props.setTheme("dark");
    //     } else {
    //         props.setTheme("light");
    //     }
    // };
    const { theme, setTheme } = React.useContext(ThemeContext)

    function isDark() {
        return theme === "dark"
    }
    const icon = <BiAdjust size={20} /> 
// const Header =()=>{
    return(
        <ThemeProvider>
        <div className="sticky-nav bg-primary">
        <Link to="/" className="sticky-nav-button bg-gray-800" activeClassName="active">Home</Link>
        <Link to="/about" className=" bg-primary text-primary" activeClassName="active">About</Link>
        <Link to="/blog" className="sticky-nav-button"activeClassName="active" >Blog</Link>      
        {/* <Toggle onClick={changeTheme} className="tgl">{icon}</Toggle>  */}
        </div>
        <label> <input type="checkbox" checked={isDark()} onChange={e => setTheme(e.target.checked ? "dark" : "light")}></input>Dark Mode</label>
        </ThemeProvider>
    );
// }
};

// export default Header;
export default Header;