import React from 'react';
import ExpList from './expList';

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
        major:"Information Technology (eq: Computer Science)",
        location:"Rajkot, India",
        year:"",
    }],
    current_programming_languages:"Python, C++, JavaScript, PHP",
    current_frameworks:"Pandas, Gatsby, React, TensorFlow",
    current_database:"PostgreSQL, GraphQL",
    past_programming_languages:"C#, MATLAB",
    past_frameworks:"Asp.NET 4.5, PyTorch",
    past_database:"MySQL, Oracle",

}


const AboutExpList = ()=>{
    return(
        <>
        <section className="flex flex-col mt-5 md:mt-10 z-30">
        <div className="uppercase tracking-widest text-2xl font-medium py-5 pl-5">Software Skills</div>   
        <span className="flex md:space-x-5 flex-col md:flex-row">
            <div className="rounded p-3 flex-1 flex flex-col justify-evenly bg-blue shadow-none md:shadow">
                <div className="uppercase tracking-widest text-sm underline pt-2 pl-5 ">Education</div>
                {about.degrees.map((edu)=>(
                    <>
                    <div className="py-2">
                        <div className="edu-title">{edu.level} in {edu.major}</div>
                        <div className="px-5">{edu.university}</div>
                    </div>
                    </>
                ))}
            </div>
            <div className="rounded p-3 flex-1 mt-5 md:mt-0 flex flex-col justify-evenly bg-blue shadow-none md:shadow" >
                <div className="uppercase tracking-widest text-sm underline py-2 pl-5">Current Programming Proficiency</div>   
                <div className="edu-title inline-block"><div className="inline-block">Current Programming Languages</div><div className="px-5">{about.current_programming_languages}</div></div>
                <div className="edu-title "><div className="inline-block">Current Frameworks</div><div className="px-5">{about.current_frameworks}</div></div>
                <div className="edu-title "><div className="inline-block">Current Databases</div><div className="px-5">{about.current_database}</div></div>
            </div>
        </span>
        <span className="flex md:space-x-5 mt-5 flex-col md:flex-row">
            <div className="rounded p-3 flex-1 mt-5 md:mt-0 flex flex-col justify-evenly bg-blue shadow-none md:shadow" >
                <div className="uppercase tracking-widest text-sm underline py-2 pl-5">Past Programming Proficiency</div>   
                <div className="edu-title inline-block"><div className="inline-block">Past Programming Languages</div><div className="px-5">{about.past_programming_languages}</div></div>
                <div className="edu-title "><div className="inline-block">Past Frameworks</div><div className="px-5">{about.past_frameworks}</div></div>
                <div className="edu-title "><div className="inline-block">Past Databases</div><div className="px-5">{about.past_database}</div></div>
            </div>
            <div className="rounded p-3 flex-1 mt-5 md:mt-0 flex flex-col justify-evenly shadow-none md:shadow-inner bg-blue opacity-70">
                <div className="uppercase tracking-widest text-sm underline py-2 pl-5">Past Programming Proficiency</div>   
                <div className="edu-title inline-block"><div className="inline-block">Past Programming Languages</div><div className="px-5">{about.past_programming_languages}</div></div>
                <div className="edu-title "><div className="inline-block">Past Frameworks</div><div className="px-5">{about.past_frameworks}</div></div>
                <div className="edu-title "><div className="inline-block">Past Databases</div><div className="px-5">{about.past_database}</div></div>
            </div>
        </span>
        <span className="mt-5 flex-col md:flex-row">
        <div className="uppercase tracking-widest text-2xl font-medium py-2 pl-5">Complete List of Experience</div>   
            <ExpList/>
        </span >

        </section>
        </>
    );
};

export default AboutExpList;