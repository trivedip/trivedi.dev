import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import {BsArrowDown} from 'react-icons/bs';
import {GrDocumentPdf} from 'react-icons/gr';

const AboutHeader =()=>{
    return(
        <>
        <span className="flex flex-col md:flex-row">
          
        <div className="self-center overflow-visible img-container" style={{backgroundColor:'skyblue',flexShrink:'15'}}>
            <StaticImage imgClassName="img" placeholder="blurred" src="../../pages/assets/image/prof1.jpg"></StaticImage>              
        </div> 
          <div className="justify-end" style={{flexShrink:'20'}}>
            <div className="flex flex-col md:ml-32 text-xl justify-end">
              <h1 className="text-3xl mb-5 underline">About Me</h1>
              <div className="justify-end ">I’m a Texas State University Master of Computer Science Graduate. I’m a programmer, designer and a big-time foodie. I was born in the small town of India, where I pursued my bachelor’s degree. I currently dwell in beautiful city of San Marcos, Texas. I am curious and motivated to learn new skills and apply it to new projects. If anything, new gets caught up in my eye, I always unravel and try to come up with innovative and improved ideas. 
              <br/>
              <br/>
              Thank you for taking the time to get to know a little bit about me. If you have some ideas, to discuss I am always happy to chat in person over coffee. Feel free to contact me via email at:priyank_at_trivedip.com
              <br/>
              <a href="/pdf/Resume_PTrivedi.pdf" target="_blank" className="my-3 p-1 text-lg duration-150 transform hover:scale-105 inline-block" style={{border:'1px solid var(--color-gray700)'}}>
                <GrDocumentPdf style={{float:'left',marginTop:'5px',marginRight:'1rem'}}/>Recent Work
                 <BsArrowDown className="fill-current" style={{display:'inline-block',transform:'scale(1.3)',marginTop:'-4px'}}/></a>    
              </div>              
            </div>
          </div>          
        </span>
      </>
    );
};

export default AboutHeader;