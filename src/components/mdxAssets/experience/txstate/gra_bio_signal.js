import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
const GraBioSignal =()=>{
    return(
        <>  
        <div className="flex w-full  mt-10 md:mt-12  text-3xl uppercase tracking-widest">Major Projects</div>         
        <div className="flex w-full  mt-3 md:mt-3  text-xl uppercase tracking-widest">Biosignal Analysis</div>         
        <span className="flex flex-col md:flex-row space-y-10 md:space-y-0 flex-wrap relative z-30 mt-3 md:mt8" >          
          <div className="self-center overflow-visible flex-shrink z-30 justify-center" style={{flexBasis:'45%',flexShrink:'1'}}>
            <div className=" img-container  bg-blue overflow-visible shadow-xl md:mb-2"  >
                <StaticImage imgClassName="img shadow-xl z-30" placeholder="tracedSVG" src={'././veteran.jpg'}></StaticImage>                            
            </div> 
            <span className="text-sm flex w-full justify-center">Data collection session from participant</span>
          </div>
          {/* <div className="justify-end" > */}
          <div className="justify-end" style={{flexBasis:'55%',flexShrink:'1'}} >
            <div className="flex flex-col md:ml-14 text-xl justify-end">
              <div className="justify-end mt-2">
              Bio-signal analysis project was part of larger project of developing VR environment for veteran who are suffering from PTST to help returning to their normal lives more gracefully. 
              <br/><br/>
              My role was to create a method to collect bio-signal data while participants are experiencing stressors (crowded environments in VR, questions which might cause stress in interview). I successfully collected bio-signals which included ECG, GSR, Pulse oximeter, Thermal Imaging, Respiratory rate from over 40 participants.  
              <br/><br/>
              After collecting and cleaning the data I also tried to apply different machine learning approaches to the data including traditional machine learning techniques with feature extraction and deep learning using TensorFlow. 
              <br/>
              
              </div>              
            </div>
          </div>          
        </span>        
      </>
    );
};

export default GraBioSignal;