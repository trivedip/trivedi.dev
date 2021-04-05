import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

const Hero =()=>{
    return(
    <>
    <div className="mt-12 sm:mt-2 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
    <div className="mt-12 sm:mt-2 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
        <div className="mt-12 lg:mt-0 max-w-4xl text-3xl sm:text-4xl text-primary font-semibold sm:text-left md:text-center lg:text-left">Hi, I’m Priyank. I’m an experienced multifaceted developer with deep interest in modern, accessible application & web development.</div>
        <div className="relative">
            {/* <div className="absolute w-full h-full top-0 flex items-center justify-center"> */}
                <div className="h-40 w-40 md:h-45 md:w-45 lg:h-52 lg:w-52 rounded-full overflow-hidden">
            <StaticImage src="../../pages/assets/image/prop-pic.jpeg"></StaticImage>
            </div>
            {/* </div> */}
            </div>
        </div>
        </div>
    </>
    )
};

export default Hero;