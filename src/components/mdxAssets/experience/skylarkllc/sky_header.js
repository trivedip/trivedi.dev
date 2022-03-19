import React from 'react';
// import { StaticImage } from "gatsby-plugin-image";
// import {BsDownload} from 'react-icons/bs';
// import {VscFilePdf} from 'react-icons/Vsc';
const SkyHeader =(props)=>{   
    return(
        <>        
        <span className="flex flex-col md:flex-row space-y-10 md:space-y-0 flex-wrap relative z-30" >                    
          <div className="justify-start" style={{flexBasis:'75%',flexShrink:'1'}} >
            <div className="flex flex-col md:mr-20 text-xl justify-end">
              <h1 className="text-3xl my-3 uppercase tracking-widest">At a glance</h1>
              <div className="justify-start leading-8">
              TrackMyShuttle streamlines shuttle operations with effortless automated tracking and simplified route planning, assuring trustworthy ETAs and smoother guest arrivals for hotels and airlines.
              <br/>
              I joined TrackMyShuttle as sumer intern while the compony was in startup phase.
              </div>              
            </div>
          </div>          
        </span>        
      </>
    );
};

export default SkyHeader;