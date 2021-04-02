import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

const Hero =()=>{
    return(
    <>
    <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
        <div className="mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl text-primary font-semibold sm:text-left md:text-center lg:text-left">Hi, I’m Priyank. I’m an experienced multifaceted developer with deep interest in modern, accessible application & web development.</div>
        <div className="hero-right relative">*IMAGE WILL BE HERE*</div>
        </div>
    </>
    )
};

export default Hero;