import React from 'react';
import Loop from "./loop.mp4";
const SkyProj =()=>{
    return(
        <> 
        <div className="flex w-full  mt-10 md:mt-12  text-3xl uppercase tracking-widest">My Role</div>
          {/* <div className="flex w-full mt-0 md:mt-3 text-xl uppercase tracking-widest mb-3">TrackMyShuttle</div>    */}
          <span className="flex flex-col-reverse md:flex-row md:space-y-0 flex-wrap relative z-30 mb-10" >                    
            {/* <div className="justify-end" > */}
              <div className="justify-end" style={{flexBasis:'55%',flexShrink:'1'}} >
                <div className="flex flex-col md:mr-20 text-xl justify-end">
                  <div className="justify-end ">
                  My role initially at TrackMyShuttle was mainly to develop Machine Learning algorithm for accurate ETA calculations and generate visualization tool for geo coordinate data as well as metadata.
                  I successfully developed a prototype for displaying real-time data from vehicles GPS and displaying it on PHP based portal with route information and ETA. 
                  <br/><br/>
                  As I have previously worked with the company's founder before, my role also grew into helping make business decisions regarding evaluation of third party software solutions which might be integrated into the current technology stack in future.
                  <br/><br/>
                  I will not list any screencaptures as my work here is bound by NDA.
                  
                  </div>              
                </div>
              </div>          
              <div className="self-center overflow-visible flex-shrink z-30 justify-center" style={{flexBasis:'45%',flexShrink:'1'}}>
                <div className="img-container-right img-bg shadow-xl mb-3" >          
                    <video muted="true" autoplay="true" className="img-right shadow-xl">
                        <source src={Loop}  type="video/mp4" />
                    </video>
                </div> 
                <span className="text-sm flex w-full justify-center">TrackMyShuttle landing animation</span>
              </div>              
          </span>        
      </>
    );
};

export default SkyProj;