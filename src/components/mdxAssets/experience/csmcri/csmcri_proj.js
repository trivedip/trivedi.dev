import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
const CsmcriProj =()=>{
    return(
        <> 
        <div className="flex w-full  mt-10 md:mt-12  text-3xl uppercase tracking-widest">My Role</div>
          {/* <div className="flex w-full mt-0 md:mt-3 text-xl uppercase tracking-widest mb-3">TrackMyShuttle</div>    */}
          <span className="flex flex-col-reverse md:flex-row md:space-y-0 flex-wrap relative z-30 mb-10" >                    
            {/* <div className="justify-end" > */}
              <div className="justify-end" style={{flexBasis:'55%',flexShrink:'1'}} >
                <div className="flex flex-col md:mr-20 text-xl justify-end">
                  <div className="justify-end ">
                  My goal was to create a intranet application called job note system, "job note" were the project tasks which were assigned to on-going research project.
                  Previously this process was done using pen & paper and my task was to digitize this system. As job notes might contain sensitive information regarding ongoing research security and encryption was of utmost importance.
                  <br/><br/>
                  Initially I started the project by learning Asp.Net with C# and object-oriented paradigm and created basic web application, later I also implemented encryption module, and built-in messaging system with delivery notification for efficient communication withing the research teams.
                  
                  </div>              
                </div>
              </div>          
              <div className="self-center overflow-visible flex-shrink z-30 justify-center bg-tester" style={{flexBasis:'45%',flexShrink:'1'}}>
                <div className="img-container-right shadow-xl img-bg mb-1" >          
                    <StaticImage imgClassName="img shadow-xl z-30" placeholder="tracedSVG" src={'././csmcri_logo.jpg'}></StaticImage>                            
                </div> 
                <span className="text-sm flex w-full justify-center">CSMCRI Logo</span>
              </div>              
          </span>        
      </>
    );
};

export default CsmcriProj;