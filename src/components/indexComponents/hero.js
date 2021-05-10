import React from 'react';
import {BsArrowDown} from 'react-icons/bs';
import {BsArrowRight} from 'react-icons/bs';
import { Link } from 'gatsby';

const Hero =()=>{
    return(
    <>
        <section className="mt-2 md:mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
            <div className="md:mt-12 mt-0 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
                <div className="md:mt-12 mt-0 lg:mt-0 max-w-4xl text-3xl sm:text-4xl text-primary font-semibold sm:text-left md:text-center lg:text-left">
                    <h1>
                    Hi, I’m Priyank. I’m an experienced multifaceted developer with deep interest in modern, accessible application & web development.
                    </h1>
                    <div className="flex flex-col md:flex-row md:flex-start">
                    <a href="#down" className="my-3 p-1 text-lg duration-150 transform hover:scale-105" style={{border:'1px solid var(--color-gray700)'}}>Recent Work <BsArrowDown className="fill-current" style={{display:'inline-block',transform:'scale(1.3)',marginTop:'-4px'}}/></a>    
                    <Link to="/about/#about"  className="my-3 not-sr-only md:mx-5 p-1 text-lg duration-150 transform hover:scale-105" style={{border:'1px solid var(--color-gray700)'}}>Learn More / Résumé <BsArrowRight className="fill-current" style={{display:'inline-block',transform:'scale(1.3)',marginTop:'-4px'}}/></Link>    
                    </div>                   
                </div>                    
            </div>  
        </section>
    </>
    )
};

export default Hero;