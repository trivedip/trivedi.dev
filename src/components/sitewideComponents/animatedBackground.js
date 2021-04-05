import React from 'react';
import {useSpring, animated } from 'react-spring';
import ReactDOM from 'react-dom';
import { ThemeContext } from '../ThemeContext';
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans4 = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`;

const Background =()=>{
    
    
    const [prop, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 200, friction: 40 } }))
    const props = useSpring({
        to:{opacity: 0.4, bottom:200, width:40, transform: 'rotateZ(40deg)'},
        from: {opacity: 0,bottom:100, width:20, transform: 'rotateZ(0deg)'},
        config:{ mass: 2,
            tension: 100,
            friction: 10}});

    const accssBdy = ()=>{
        ReactDOM.findDOMNode(document.body).addEventListener('mousemove',e=>{
            set({ xy: calc(e.offsetX, e.offsetY) })}
        );
    }
    return(<>
         <div className="page-background" style={{overflow:'hidden'}}>
                {accssBdy()}
                {/* <div className="background-ele"></div> */}
                <span className="bg-blob-span">
                <svg id="Wobble" className="bg-blob" width="459" height="459" viewBox="0 0 459 459"><path d="M478,248.5c-1.22,75.56-54.86,151.77-80.47,174.54-23.84,21.19-92.15,55-149,55C194.27,478,137,476,98,429,54.69,376.81,19,321,19,248.5,19,198.55,37,145,62.06,114.65,107.48,59.62,171.7,19,248.5,19,311.63,19,384.3,31.74,418,85S478,184.88,478,248.5Z" transform="translate(-19 -19)" fill=""/></svg>
                </span>
                <animated.div style={{transform: prop.xy.interpolate(trans4) }}  className="background-ele"></animated.div>
            </div> 
    </>)
};

 export default Background;
