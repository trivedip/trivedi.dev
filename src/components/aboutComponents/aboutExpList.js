import React from 'react';

const about  ={
    degrees: [{
        university:"Texas State University",
        level:"Master's",
        major:"Computer Science",
        location:"San Marcos, USA",
        year:"",
    },{
        university:"Gujarat Technological University",
        level:"Bachelor's",
        major:"Information Technology (eq: computer science)",
        location:"Rajkot, India",
        year:"",
    }],
    current_programming_languages:"Python, PHP, C++, JavaScript",
    current_frameworks:"Pandas, Gatsby, React, TensorFlow",
    past_experience_programming_languages:"C#, MATLAB",
    past_frameworks:"Asp.NET 4.5, PyTorch"
}


const AboutExpList = ()=>{
    return(
        <>
        <section className="flex flex-col mt-5 md:mt-10">
        <span className="flex md:space-x-8 flex-col md:flex-row">
            <div className="rounded p-3 flex-1" style={{backgroundColor:'var(--color-grn)'}}>
                <div className="uppercase tracking-widest text-sm underline pt-2 pl-5">Education</div>
                {about.degrees.map((edu)=>(
                    <>
                    <div className="py-2">
                        <div className="edu-title">{edu.level} in {edu.major}</div>
                        <div className="px-5">{edu.university}</div>
                    </div>
                    </>
                ))}
            </div>
            <div className="rounded p-3 flex-1 mt-5 md:mt-0" style={{backgroundColor:'var(--color-grn)'}}>
                <div className="uppercase tracking-widest text-sm underline py-2 pl-5">Current Programming Proficiency</div>   
                <span className="edu-title inline-block"><div className="inline-block">Current Programming Languages</div><div className="px-5">{about.current_programming_languages}</div>             </span>
                <span className="edu-title inline-block"><div className="inline-block">Current Frameworks</div><div className="px-5">{about.current_frameworks}</div>             </span>
            </div>
        </span>
        <span>
            Software Development Proficiency
        </span>
        <span>
            Generated List of Exp
        </span>

        </section>
        </>
    );
};

export default AboutExpList;