import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import {BsDownload} from 'react-icons/bs';
import {VscFilePdf} from 'react-icons/Vsc';
const AboutHeader =()=>{
    return(
        <>        
        <span className="flex flex-col md:flex-row space-y-10 md:space-y-0 flex-wrap relative z-30" >          
          <div className="self-center overflow-visible img-container shadow-xl bg-blue flex-shrink z-30" style={{flexBasis:'33%',flexShrink:'1'}} >
          {/* <div className="self-center overflow-visible img-container shadow-xl bg-blue"> */}
              <StaticImage imgClassName="img shadow-xl z-30" placeholder="tracedSVG" src="../../pages/assets/image/prof1.jpg"></StaticImage>    
          </div> 
          {/* <div className="justify-end" > */}
          <div className="justify-end" style={{flexBasis:'66%',flexShrink:'1'}} >
            <div className="flex flex-col md:ml-20 text-xl justify-end">
              <h1 className="text-3xl mb-5 uppercase tracking-widest">About Me</h1>
              <div className="justify-end ">Hi I am Priyank, I’m a Master of Computer Science Graduate. I’m a programmer, designer and a big-time foodie. 
              I was born in the small town of India, where I pursued my bachelor’s degree. 
              I currently dwell in beautiful city of San Marcos, Texas. 
              I am curious and motivated to learn new skills and apply it to new projects. --- Add bio-informatics
              If anything,___WHAT____, I always unravel and try to come up with innovative and improved ideas. 
              <br/>
              <br/>
              Thank you for taking the time to get to know a little bit about me. If you have some ideas, to discuss I am always happy to chat in person over coffee. Feel free to contact me via email at:priyank_at_trivedip.com
              <br/>
              <a href="/pdf/Resume_PTrivedi.pdf" target="_blank" className="my-3 p-1 text-lg duration-150 transform hover:scale-105 inline-block" style={{border:'1px solid var(--color-gray700)'}}>
                <VscFilePdf className="fill-current pl-1 border-black" style={{float:'left',marginTop:'5px',marginRight:'1rem',transform:'scale(1.8)'}}/><div className="inline-block ">Download Résumé (PDF)</div>
                <BsDownload className="fill-current mx-2 ml-4" style={{display:'inline-block',transform:'scale(1.3)',marginTop:'-4px'}}/></a>    
              </div>              
            </div>
          </div>          
        </span>        
      </>
    );
};

export default AboutHeader;