import React from 'react';
const GraHeader =(props)=>{   
    return(
        <>        
        <span className="flex flex-col md:flex-row space-y-10 md:space-y-0 flex-wrap relative z-30" >          
          <div className="justify-start" style={{flexBasis:'75%',flexShrink:'1'}} >
            <div className="flex flex-col md:mr-20 text-xl justify-end">
              <h1 className="text-3xl my-3 uppercase tracking-widest">At a glance</h1>
              <div className="justify-start leading-8">The Intelligent Multimodal Computing and Sensing (IMICS) team is part of the Computer science department – Texas State University.
                <br/><br/>
                The research goals of the IMICS team are the development of theoretical and technological solutions in the area of Machine Learning, Data Mining and Computer Vision focus in applications of Smart Health and Well-being, Assisted Living and Bioinformatics.
              <br/>
              { /* <ul className="list-disc px-3 md:px-5">
                
                    {
                        Object.entries(props.bullets).map((key,index)=>{
                            return(
                            <>
                                <li className="py-1">{key[1]} </li>
                            </>
                            )
                            })
                    }
                    </ul> */ }
              </div>              
            </div>
          </div>          
        </span>        
      </>
    );
};

export default GraHeader;