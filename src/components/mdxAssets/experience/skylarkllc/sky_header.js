import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import {BsDownload} from 'react-icons/bs';
import {VscFilePdf} from 'react-icons/Vsc';
const SkyHeader =(props)=>{   
    return(
        <>        
        <span className="flex flex-col md:flex-row space-y-10 md:space-y-0 flex-wrap relative z-30" >          
          
          <div className="justify-start" style={{flexBasis:'75%',flexShrink:'1'}} >
            <div className="flex flex-col md:mr-20 text-xl justify-end">
              <h1 className="text-3xl my-3 uppercase tracking-widest">Role at a glance</h1>
              <div className="justify-start leading-8">I joined TrackMyShuttle team as summer intern. 
              As I have previously worked with the founder, my role here was very dynamic and included evaluation of companies initial software development as well as helping with business strategies.
              I was also part defining the technology stack and suite of third party which will be integrated into their business operations and products. 
              </div>              
            </div>
          </div>          
        </span>        
      </>
    );
};

export default SkyHeader;