import React from 'react';

const CsmcriHeader =()=>{   
    return(
        <>        
        <span className="flex flex-col md:flex-row space-y-10 md:space-y-0 flex-wrap relative z-30" >                    
          <div className="justify-start" style={{flexBasis:'75%',flexShrink:'1'}} >
            <div className="flex flex-col md:mr-20 text-xl justify-end">
              <h1 className="text-3xl my-3 uppercase tracking-widest">At a glance</h1>
              <div className="justify-start leading-8">
              CSMCRI is constituent laboratory of CSIR (Council of Scientific and Industrial Research), largest research and development organisation in India. 
              The mission of CSMCRI is to work in partnership with visionary sponsors and collaborators to generate the knowledge and innovations required for efficient utilization of our coastal wasteland, sea water, marine algae, solar power and silicates. CSMCRI also does research on bio-sciences, process engineering, etc.
              <br/>
              I joined CSMCRI as part of educational internship where my task was to develop intranet application.
              </div>              
            </div>
          </div>          
        </span>        
      </>
    );
};

export default CsmcriHeader;