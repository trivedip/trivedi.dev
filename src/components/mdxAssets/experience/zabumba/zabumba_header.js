import React from 'react';
const ZabumbaHeader =(props)=>{   
    return(
        <>        
        <span className="flex flex-col md:flex-row space-y-10 md:space-y-0 flex-wrap relative z-30" >          
          <div className="justify-start" style={{flexBasis:'75%',flexShrink:'1'}} >
            <div className="flex flex-col md:mr-20 text-xl justify-end">
              <h1 className="text-3xl my-3 uppercase tracking-widest">At a glance</h1>
              <div className="justify-start leading-8">
              Zabumba’s goal was to make finance management of small B2B business automated and accessible to smaller companies. 
              The initial concept was to provide online cash flow management system which can not only generate transaction records but can also supply tax related information, later we also planned to provide OCR support for receipts. 
              But the startup failed to capture enough momentum in the market and was discontinued.  
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

export default ZabumbaHeader;