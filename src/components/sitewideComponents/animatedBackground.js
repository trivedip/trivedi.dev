import React from 'react';
import {useSpring, animated } from 'react-spring';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans4 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 100}px,${y / 75}px,0)`

const Background =()=>{
    
    const [loaded,setLoaded]=useState(false);
    const [prop, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 200, friction: 60 } }));
    
    // const props = useSpring({
    //     to:{opacity: 0.4, bottom:200, width:40, transform: 'rotateZ(40deg)'},
    //     from: {opacity: 0,bottom:100, width:20, transform: 'rotateZ(0deg)'},
    //     config:{ mass: 2,
    //         tension: 100,
    //         friction: 10}});
    
    const accssBdy = ()=>{
        ReactDOM.findDOMNode(document.body).addEventListener('mousemove',e=>{
            set({ xy: calc(e.offsetX, e.offsetY) })}
        );
    }
    useEffect(() =>setLoaded(true),[])
    return(<>
    
        {loaded?
        <div className="relative z-fix">
         <div className="page-background">
                {accssBdy()}
                {/* <div className="background-ele"></div> */}

                <span className="bg-blob-span">
                <svg id="Wobble" className="bg-blob" width="459" height="459" viewBox="0 0 459 459"><path d="M478,248.5c-1.22,75.56-54.86,151.77-80.47,174.54-23.84,21.19-92.15,55-149,55C194.27,478,137,476,98,429,54.69,376.81,19,321,19,248.5,19,198.55,37,145,62.06,114.65,107.48,59.62,171.7,19,248.5,19,311.63,19,384.3,31.74,418,85S478,184.88,478,248.5Z" transform="translate(-19 -19)" fill=""/></svg>
                </span>
                <div className="background-element-container">
                {/* <animated.div style={{transform: prop.xy.interpolate(trans4) }}  className="background-ele"></animated.div> */}
                <animated.svg id="plus" style={{transform: prop.xy.interpolate(trans4) }} width="413" height="413" className="background-plus" viewBox="0 0 413 413"><path d="M209.16,453.5a27.69,27.69,0,0,1-27.66-27.66V340A21.49,21.49,0,0,0,160,318.5H74.16A27.69,27.69,0,0,1,46.5,290.84V210.16A27.69,27.69,0,0,1,74.16,182.5H160A21.49,21.49,0,0,0,181.5,161V75.16A27.69,27.69,0,0,1,209.16,47.5h80.68A27.69,27.69,0,0,1,317.5,75.16V161A21.49,21.49,0,0,0,339,182.5h85.87a27.69,27.69,0,0,1,27.66,27.66v80.68a27.69,27.69,0,0,1-27.66,27.66H339A21.49,21.49,0,0,0,317.5,340v85.87a27.69,27.69,0,0,1-27.66,27.66Z" transform="translate(-43 -44)"/><path d="M289.84,51A24.19,24.19,0,0,1,314,75.16V161a25,25,0,0,0,25,25h85.87A24.19,24.19,0,0,1,449,210.16v80.68A24.19,24.19,0,0,1,424.84,315H339a25,25,0,0,0-25,25v85.87A24.19,24.19,0,0,1,289.84,450H209.16A24.19,24.19,0,0,1,185,425.84V340a25,25,0,0,0-25-25H74.16A24.19,24.19,0,0,1,50,290.84V210.16A24.19,24.19,0,0,1,74.16,186H160a25,25,0,0,0,25-25V75.16A24.19,24.19,0,0,1,209.16,51h80.68m0-7H209.16A31.16,31.16,0,0,0,178,75.16V161a18,18,0,0,1-18,18H74.16A31.16,31.16,0,0,0,43,210.16v80.68A31.16,31.16,0,0,0,74.16,322H160a18,18,0,0,1,18,18v85.87A31.16,31.16,0,0,0,209.16,457h80.68A31.16,31.16,0,0,0,321,425.84V340a18,18,0,0,1,18-18h85.87A31.16,31.16,0,0,0,456,290.84V210.16A31.16,31.16,0,0,0,424.84,179H339a18,18,0,0,1-18-18V75.16A31.16,31.16,0,0,0,289.84,44Z" transform="translate(-43 -44)"/></animated.svg>
                <animated.svg id="Layer_1" className="background-ele" style={{transform: prop.xy.interpolate(trans4) }} data-name="Layer 1" width="395.7" height="395.7" viewBox="0 0 395.7 395.7"><rect x="-2.01" y="215.21" width="504.87" height="69.2" rx="12.35" transform="translate(-155.87 204.25) rotate(-45)"/><circle cx="105.42" cy="44" r="44"/><circle cx="303.42" cy="364" r="44"/></animated.svg>
                {/* <animated.svg id="plus" style={{transform: prop.xy.interpolate(trans3) }} width="100" height="100" className="background-plus-1" viewBox="0 0 413 413"><path d="M209.16,453.5a27.69,27.69,0,0,1-27.66-27.66V340A21.49,21.49,0,0,0,160,318.5H74.16A27.69,27.69,0,0,1,46.5,290.84V210.16A27.69,27.69,0,0,1,74.16,182.5H160A21.49,21.49,0,0,0,181.5,161V75.16A27.69,27.69,0,0,1,209.16,47.5h80.68A27.69,27.69,0,0,1,317.5,75.16V161A21.49,21.49,0,0,0,339,182.5h85.87a27.69,27.69,0,0,1,27.66,27.66v80.68a27.69,27.69,0,0,1-27.66,27.66H339A21.49,21.49,0,0,0,317.5,340v85.87a27.69,27.69,0,0,1-27.66,27.66Z" transform="translate(-43 -44)"/><path d="M289.84,51A24.19,24.19,0,0,1,314,75.16V161a25,25,0,0,0,25,25h85.87A24.19,24.19,0,0,1,449,210.16v80.68A24.19,24.19,0,0,1,424.84,315H339a25,25,0,0,0-25,25v85.87A24.19,24.19,0,0,1,289.84,450H209.16A24.19,24.19,0,0,1,185,425.84V340a25,25,0,0,0-25-25H74.16A24.19,24.19,0,0,1,50,290.84V210.16A24.19,24.19,0,0,1,74.16,186H160a25,25,0,0,0,25-25V75.16A24.19,24.19,0,0,1,209.16,51h80.68m0-7H209.16A31.16,31.16,0,0,0,178,75.16V161a18,18,0,0,1-18,18H74.16A31.16,31.16,0,0,0,43,210.16v80.68A31.16,31.16,0,0,0,74.16,322H160a18,18,0,0,1,18,18v85.87A31.16,31.16,0,0,0,209.16,457h80.68A31.16,31.16,0,0,0,321,425.84V340a18,18,0,0,1,18-18h85.87A31.16,31.16,0,0,0,456,290.84V210.16A31.16,31.16,0,0,0,424.84,179H339a18,18,0,0,1-18-18V75.16A31.16,31.16,0,0,0,289.84,44Z" transform="translate(-43 -44)"/></animated.svg> */}
                {/* <animated.svg id="star" style={{transform: prop.xy.interpolate(trans3) }} width="408.38" height="408.38" viewBox="0 0 408.38 408.38" className="background-plus-1"><polygon points="190.09 218.3 37.92 204.19 190.09 190.09 204.19 37.92 218.3 190.09 370.46 204.19 218.3 218.3 204.19 370.46 190.09 218.3"/><path d="M250.5,122.15l10.35,111.67.54,5.79,5.79.54L378.85,250.5,267.18,260.85l-5.79.54-.54,5.79L250.5,378.85,240.15,267.18l-.54-5.79-5.79-.54L122.15,250.5l111.67-10.35,5.79-.54.54-5.79L250.5,122.15m0-75.84L233.18,233.18,46.31,250.5l186.87,17.32L250.5,454.69l17.32-186.87L454.69,250.5,267.82,233.18,250.5,46.31Z" transform="translate(-46.31 -46.31)"/></animated.svg> */}
                <animated.svg id="forward_slash" className="background-plus-1" style={{transform: prop.xy.interpolate(trans3) }} xmlns="http://www.w3.org/2000/svg" width="329.54" height="448.01" viewBox="0 0 329.54 448.01"><rect x="-1.44" y="215.4" width="504.87" height="69.2" rx="12.35" transform="translate(-196.21 349.61) rotate(-63.42)"/></animated.svg>
                </div>
        </div> 
        </div>
        :null}
    
    </>)
};

 export default Background;
