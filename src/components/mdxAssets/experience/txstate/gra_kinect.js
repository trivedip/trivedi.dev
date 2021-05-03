import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
const GraKinect =()=>{
    return(
        <> 
          
          <div className="flex w-full mt-8 md:mt-10 text-xl uppercase tracking-widest mb-3">Kinect data collection utility</div>   
          <span className="flex flex-col-reverse md:flex-row md:space-y-0 flex-wrap relative z-30 mb-5" >                    
            {/* <div className="justify-end" > */}            
              <div className="justify-end" style={{flexBasis:'55%',flexShrink:'1'}} >
                <div className="flex flex-col md:mr-14 text-xl justify-end">
                  <div className="justify-end ">
                    Kinect data recorder was initially made to do motion analysis of Kinect streams. I build the application for Kinect V2 and can and it can records Color, RGB & Skeleton data at about 28fps (depending on hardware configuration). 
                    <br/><br/>
                    Later the project was extended to do motion analysis using dynamic time warping algorithm as well as for movement classification. 
                  <br/>
                  
                  </div>              
                </div>
              </div>  
              <div className="self-center overflow-visible flex-shrink z-30 justify-center" style={{flexBasis:'45%',flexShrink:'1'}}>
              <div className="img-container-right shadow-xl img-bg flex-shrink z-30 mb-3" >          
                  <StaticImage imgClassName="img-right shadow-xl z-30" placeholder="tracedSVG" src={'./gra_kinect.jpg'}></StaticImage>                            
              </div> 
              <span className="text-sm flex w-full justify-center">Screenshot - Kinect Data Collection Utility</span>
              </div>        
          </span>        
      </>
    );
};

export default GraKinect;