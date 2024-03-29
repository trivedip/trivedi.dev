import React from 'react';
import pages from './navigationPages';
import {Link} from 'gatsby';
import DarkToggle from './DarkToggle';
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr';
const Footer = ()=>{
    return(
        <div className="footer-outer-container footer">
            <section className="mt-10 m-auto px-3 pb-5 sm:px-12 md:px-20 max-w-screen-xl ">
                <div className="flex m-5 md:mt-10 justify-center ">
                    <div className="flex flex-col justify-center text-3xl sm:text-4xl m-5 md:m-20 space-y-6">
                        <div>
                        Let's build togather
                        </div>
                        <div className="flex flex-row justify-evenly">
                            <a target="_blank" rel="noreferrer" href="mailto:me@priyanktrivedi.com"><div className="sr-only">Email me</div><GrMail role="link"/></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/trivedip"><div className="sr-only">visit my github profile</div><FaGithub role="link" alt="github icon"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/trivedipriyank/"><div className="sr-only">connect with me on linked-in </div><FaLinkedin role="link"/></a>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex md:flex-row flex-col">
                    <div className="flex-1 pt-3 pb-1 mb-12 md:mb-0">
                    <svg id="Layer_1" className="h-8 sm:h-8 w-8 sm:w-8 fill-current hover:text-accent transition duration-150 float-left" data-name="Layer 1" width="45px" viewBox="0 0 500 500" preserveAspectRatio="none"><path d="M164.7,331.7a171.94,171.94,0,0,1-37.15-4l15.06-61.24C149.14,269,156.16,270,164.7,270a91,91,0,0,0,34.63-7A87.66,87.66,0,0,0,247,215.24a91.44,91.44,0,0,0,7-35.14A86.42,86.42,0,0,0,247,146,90,90,0,0,0,228,117.85a86.74,86.74,0,0,0-28.62-19.07,88.83,88.83,0,0,0-69.27,0,86.7,86.7,0,0,0-28.61,19.07A90,90,0,0,0,82.37,146a86.42,86.42,0,0,0-7,34.13V478.28L13.1,410.51V180.1a146.42,146.42,0,0,1,12-58.73c8-18.58,18.57-34.64,32.12-48.19a154.17,154.17,0,0,1,48.19-32.63,150.39,150.39,0,0,1,118,0,162.38,162.38,0,0,1,48.69,32.63,160.22,160.22,0,0,1,32.63,48.19,150.36,150.36,0,0,1,0,118,154.11,154.11,0,0,1-32.63,48.19,156.35,156.35,0,0,1-48.69,32.63A153.14,153.14,0,0,1,164.7,331.7Z" transform="translate(-13.1 -28)"/><path d="M459.86,261.42a87.66,87.66,0,0,1-47.69-47.69,91,91,0,0,1-7-34.63V91.25h88.34V28H342.4V182.11c.5,20.58,4.52,40.16,13.05,58.23s19.58,34.13,33.13,47.18c13.55,13.56,29.62,24.1,48.19,32.13A142.34,142.34,0,0,0,495,331.7V268.45C482,268.45,470.4,266.44,459.86,261.42Z" transform="translate(-13.1 -28)"/><circle cx="152.1" cy="152.1" r="48.69"/></svg>
                    <div className="ml-20">&#169; Designed & developed by Priyank Trivedi, All rights reserved. 2017-2021 </div>
                    </div>
                    <div className="flex-1 flex md:justify-end justify-evenly md:static fixed bottom-0 w-11/12 mobile-footer md:w-auto md:bg-transparent z-50">{pages.map((page)=>(
                        (page.active) ? <Link to={page.to} className="sticky-nav-button text-sm" aria-label={page.ariaLabel} activeClassName="active">{page.name}</Link> : ''
                    ))}
                    <div style={{transform:"scale(0.8)",marginTop:"10px"}}>
                    <DarkToggle/>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;