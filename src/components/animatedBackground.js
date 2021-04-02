import React from 'react';
import {useSpring, animated } from 'react-spring';
import { ThemeContext } from './ThemeContext';
const Background =()=>{
    const props = useSpring({
        to:{opacity: 1, bottom:100},
        from: {opacity: 0,bottom:0},
        config:{duration:600, mass: 1.75,
            tension: 261.25,
            friction: 15.1}});
    return(<>
         <div className="page-background">
                
                {/* <div className="background-ele"></div> */}
                <animated.div style={props} className="background-ele"></animated.div>
            </div> 
    </>)
};

export default Background;