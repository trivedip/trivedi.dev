import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
const GraBioSignal =()=>{
    return(
        <>  
        <div className="flex w-full  mt-10 md:mt-12  text-3xl uppercase tracking-widest">Major Projects</div>         
        <div className="flex w-full  mt-3 md:mt-3  text-xl uppercase tracking-widest">Biosignal Analysis</div>         
        <span className="flex flex-col md:flex-row space-y-10 md:space-y-0 flex-wrap relative z-30" >          
          <div className="self-center overflow-visible flex-shrink z-30 justify-center" style={{flexBasis:'45%',flexShrink:'1'}}>
            <div className=" img-container  bg-blue overflow-visible shadow-xl"  >
                <StaticImage imgClassName="img shadow-xl z-30" placeholder="tracedSVG" src={'././veteran.jpg'}></StaticImage>                            
            </div> 
            <span className="text-sm flex w-full justify-center">Data collection session from participant</span>
          </div>
          {/* <div className="justify-end" > */}
          <div className="justify-end" style={{flexBasis:'55%',flexShrink:'1'}} >
            <div className="flex flex-col md:ml-14 text-xl justify-end">
              <div className="justify-end mt-2">Bio-signal analysis project was part of larger project of developing VR environment for veteran who are suffering from PTST to help returning to their normal lives more natural.
              My role was to create a methodology to collect bio-signal data while participants are experiencing stressor’s and test machine learning methodologies to automatically analyze stress level.

              <br/>              
              <br/>              
              The project is successfully deployed and is able to reduce the contact tracing time by up to 60%. Major features of the project includ multi-device and screen reader support with the ability to auto-detect the spread of COVID cases.
              Bobcat Trace also has the ability to trace potential locations and people who might have been in touch with POI. 
              <br/>
              
              </div>              
            </div>
          </div>          
        </span>        
      </>
    );
};

export default GraBioSignal;