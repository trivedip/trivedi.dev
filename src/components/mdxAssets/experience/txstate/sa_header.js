import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import {BsDownload} from 'react-icons/bs';
import {VscFilePdf} from 'react-icons/Vsc';
const SAHeader =(props)=>{   
    return(
        <>        
        <span className="flex flex-col md:flex-row space-y-10 md:space-y-0 flex-wrap relative z-30" >          
          
          <div className="justify-start" style={{flexBasis:'75%',flexShrink:'1'}} >
            <div className="flex flex-col md:mr-20 text-xl justify-end">
              <h1 className="text-3xl my-3 uppercase tracking-widest">Role at a glance</h1>
              <div className="justify-start leading-8">I joined as part of Vice President’s office and later joined newly formed technology division. My work here was associated with planning, designing, developing & maintaining software and web applications.
              As my role here was dynamic, I was able to work on all stages of software life cycle, I was also part of technology migration team and software pipeline development process. I acted as lead developer on projects like in-house COVID-19 contact tracing application called Bobcat Trace which reduced the contact tracing times of up to 70%.

              <br/>
              <ul className="list-disc px-3 md:px-5">
                
                    {
                        Object.entries(props.bullets).map((key,index)=>{
                            return(
                            <>
                                <li className="py-1">{key[1]} </li>
                            </>
                            )
                            })
                    }
                    </ul>          
              </div>              
            </div>
          </div>          
          {/* <div className="self-center overflow-visible img-container-right shadow-xl bg-blue flex-shrink z-30" style={{flexBasis:'45%',flexShrink:'1'}} >
              <StaticImage imgClassName="img-right shadow-xl z-30" placeholder="blurred" src={'./vr_session.jpg'}></StaticImage> 
                           
          </div>  */}
        </span>        
      </>
    );
};

export default SAHeader;