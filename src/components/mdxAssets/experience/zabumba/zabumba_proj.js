import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import Loop from "./zabumba.mp4";
const ZabumbaProj =()=>{
    return(
        <> 
        <div className="flex w-full  mt-10 md:mt-12  text-3xl uppercase tracking-widest">My Role</div>
          {/* <div className="flex w-full mt-0 md:mt-3 text-xl uppercase tracking-widest mb-3">TrackMyShuttle</div>    */}
          <span className="flex flex-col-reverse md:flex-row md:space-y-0 flex-wrap relative z-30 mb-10" >                    
            {/* <div className="justify-end" > */}
              <div className="justify-end" style={{flexBasis:'55%',flexShrink:'1'}} >
                <div className="flex flex-col md:mr-20 text-xl justify-end">
                  <div className="justify-end ">
                  I joined Zabumba early on when the product was in early prototyping phase, the development team consisted of me and a senior developer. Due to limited number of developers available my role here extended from back-end development to front end UI/UX designing.
                  <br/><br/>
                  Majority of development was done in core PHP and vanilla JavaScript, I also utilized my knowledge of Adobe photoshop & Illustrator for designing and developing layouts.
 
                  </div>              
                </div>
              </div>          
              <div className="self-center overflow-visible flex-shrink z-30 justify-center" style={{flexBasis:'45%',flexShrink:'1'}}>
                <div className="img-container-right shadow-xl img-bg mb-3" >          
                    <video muted="true" loop="true" autoplay="true" className="img-right shadow-xl">
                        <source src={Loop}  type="video/mp4" />
                    </video>
                </div> 
                <span className="text-sm flex w-full justify-center">Zabumba landing page</span>
              </div>              
          </span>        
      </>
    );
};

export default ZabumbaProj;