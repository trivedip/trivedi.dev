import React from 'react';
import styled from 'styled-components';
import {BiAdjust} from 'react-icons/bi';
import { useState } from "react";
import {Link} from "gatsby";

const Toggle = styled.button`
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    &:focus {
        outline: none;
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Header(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };
    const icon = <BiAdjust size={20} /> 
// const Header =()=>{
    return(
        <div className="sticky-nav">
            <Link to="/" className="sticky-nav-button" activeClassName="active">Home</Link>
            <Link to="/about" className="sticky-nav-button" activeClassName="active">About</Link>
            <Link to="/blog" className="sticky-nav-button"activeClassName="active" >Blog</Link>      
            <Toggle onClick={changeTheme} className="tgl">{icon}</Toggle>
        </div>
    );
// }
};

// export default Header;
export default Header;