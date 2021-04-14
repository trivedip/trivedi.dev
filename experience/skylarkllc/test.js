import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

const Test =(props)=>{
    return(
        <>
               
        <span className="flex flex-col md:flex-row space-y-10 md:space-y-0 flex-wrap relative z-30" >          
          <div className="self-center overflow-visible img-container shadow-xl bg-blue flex-shrink z-30" style={{flexBasis:'33%',flexShrink:'1'}} >
          {/* <div className="self-center overflow-visible img-container shadow-xl bg-blue"> */}
              {/* <StaticImage imgClassName="img shadow-xl z-30" placeholder="blurred" src={'../../images/prof1.jpg'}></StaticImage>               */}
              <StaticImage imgClassName="img shadow-xl z-30" placeholder="blurred" src={'./img.jpg'}></StaticImage>              
          </div> 
          
          {/* <div className="justify-end" > */}
          <div className="justify-end" style={{flexBasis:'66%',flexShrink:'1'}} >
            <div className="flex flex-col md:ml-20 text-xl justify-end">
              <h1 className="text-3xl mb-5 uppercase tracking-widest">About Me</h1>
              <div className="justify-end ">I’m a Texas State University Master of Computer Science Graduate. I’m a programmer, designer and a big-time foodie. I was born in the small town of India, where I pursued my bachelor’s degree. I currently dwell in beautiful city of San Marcos, Texas. I am curious and motivated to learn new skills and apply it to new projects. If anything, new gets caught up in my eye, I always unravel and try to come up with innovative and improved ideas. 
              <br/>
              <br/>
              Thank you for taking the time to get to know a little bit about me. If you have some ideas, to discuss I am always happy to chat in person over coffee. Feel free to contact me via email at:priyank_at_trivedip.com
              <br/>
              
                
            </div></div>                

          </div>          
        </span>        
      
        </>
    )

}

export default Test;