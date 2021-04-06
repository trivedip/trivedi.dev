import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import {GrFormNextLink} from 'react-icons/gr';
import {GrLinkDown} from 'react-icons/gr';
import { Link } from 'gatsby';
import { IconContext } from "react-icons";

const Hero =()=>{
    return(
    <>
     <IconContext.Provider value={{ color: 'red' }}>
        <div className="mt-12 sm:mt-2 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
            <div className="mt-12 sm:mt-2 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
                <div className="mt-12 lg:mt-0 max-w-4xl text-3xl sm:text-4xl text-primary font-semibold sm:text-left md:text-center lg:text-left">
                    <div>
                    Hi, I’m Priyank. I’m an experienced multifaceted developer with deep interest in modern, accessible application & web development.
                    </div>                    
                    <a className="my-3 p-1 text-lg" style={{border:'1px solid var(--color-gray700)'}}>Recent Work <GrLinkDown className="fill-current" style={{display:'inline-block',transform:'scaleX()',marginTop:'-4px'}}/></a>    
                    <Link to="/about/" className="my-3 md:mx-5 p-1 text-lg" style={{border:'1px solid var(--color-gray700)'}}>More About Me / Résumé <GrFormNextLink style={{display:'inline-block',transform:'scale(1.3)',marginTop:'-4px'}}/></Link>    
                </div>

                    <div className="relative">
                    <div className="h-40 w-40 md:h-45 md:w-45 lg:h-52 lg:w-52 rounded-full overflow-hidden">
                        <StaticImage src="../../pages/assets/image/prop-pic.jpeg" placeholder="blurred"></StaticImage>
                    </div>
                </div>
            </div>  
        </div>
     </IconContext.Provider>
    </>
    )
};

export default Hero;