import React from 'react';
import Loop from './crec.mp4';
const SaCrec =()=>{
    return(
        <> 
          
          <div className="flex w-full mt-8 md:mt-10 text-xl uppercase tracking-widest mb-3">Campus Rec. dashboard</div>   
          <span className="flex flex-col-reverse md:flex-row md:space-y-0 flex-wrap relative z-30 mb-5" >                    
            {/* <div className="justify-end" > */}            
              <div className="justify-end " style={{flexBasis:'55%',flexShrink:'1'}} >
                <div className="flex flex-col md:mr-14 text-xl justify-end">
                  <div className="justify-end ">
                  Campus Recreation Dashboard was created to keep track of facility utilization of Texas State University’s recreation sites. 
                  The primary function of the project was to track the utilization of these facilities and provide trend analysis to students as well as for internal reporting.
                  <br/>
                  
                  </div>              
                </div>
              </div>  
              <div className="self-center overflow-visible flex-shrink z-30 justify-center" style={{flexBasis:'45%',flexShrink:'1'}}>
              <div className="img-container-right shadow-xl img-bg flex-shrink z-30" >          
                  {/* <StaticImage imgClassName="img-right shadow-xl z-30" placeholder="tracedSVG" src={'./crec.jpeg'}></StaticImage>                             */}
                  <video muted="true" loop="true" autoplay="true" className="img-right shadow-xl">
                        <source src={Loop}  type="video/mp4" />
                    </video>
              </div> 
              <span className="text-sm flex w-full justify-center mt-2">Screen Capture - CREC Dashboard</span>
              </div>        
          </span>        
      </>
    );
};

export default SaCrec;