import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import {BsDownload} from 'react-icons/bs';
import {VscFilePdf} from 'react-icons/Vsc';
const SAHeader =()=>{
    return(
        <>        
        <span className="flex flex-col md:flex-row space-y-10 md:space-y-0 flex-wrap relative z-30" >          
          
          <div className="justify-start" style={{flexBasis:'75%',flexShrink:'1'}} >
            <div className="flex flex-col md:mr-20 text-xl justify-end">
              <h1 className="text-3xl mb-5 uppercase tracking-widest">Role at a glance</h1>
              <div className="justify-start leading-10">I joined as part of Vice Presedent's office and later joined newly formed technology division.
              <br/>
              <br/>
              Thank you for taking the time to get to know a little bit about me. If you have some ideas, to discuss I am always happy to chat in person over coffee. Feel free to contact me via email at:priyank_at_trivedip.com
              <br/>              
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