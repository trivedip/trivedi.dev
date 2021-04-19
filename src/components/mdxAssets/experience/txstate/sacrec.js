import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
const SaCrec =()=>{
    return(
        <> 
          <div className="flex w-full  mt-8 md:mt-10  text-3xl uppercase tracking-widest">Campus Rec. dashboard</div>   
        <span className="flex flex-col-reverse md:flex-row md:space-y-0 flex-wrap relative z-30" >                    
          {/* <div className="justify-end" > */}
          
          <div className="justify-end" style={{flexBasis:'55%',flexShrink:'1'}} >
            <div className="flex flex-col md:mr-20 text-xl justify-end">
              <div className="justify-end ">I’m a Texas State University Master of Computer Science Graduate. I’m a programmer, designer and a big-time foodie. I was born in the small town of India, where I pursued my bachelor’s degree. I currently dwell in beautiful city of San Marcos, Texas. I am curious and motivated to learn new skills and apply it to new projects. If anything, new gets caught up in my eye, I always unravel and try to come up with innovative and improved ideas. 
              <br/>
              <br/>
              Thank you for taking the time to get to know a little bit about me. If you have some ideas, to discuss I am always happy to chat in person over coffee.
              <br/>
              
              </div>              
            </div>
          </div>          
          <div className="self-center overflow-visible img-container-right shadow-xl bg-blue flex-shrink z-30" style={{flexBasis:'45%',flexShrink:'1'}} >          
              <StaticImage imgClassName="img-right shadow-xl z-30" placeholder="tracedSVG" src={'./crec.jpeg'}></StaticImage>                            
          </div> 
        </span>        
      </>
    );
};

export default SaCrec;