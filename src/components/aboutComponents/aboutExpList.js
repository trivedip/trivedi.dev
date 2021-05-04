import React from 'react';
import ExpList from './expList';

const about  ={
    degrees: [{
        university:"Texas State University",
        level:"Master's",
        major:"Computer Science",
        location:"San Marcos, USA",
        year:"2016-2018",
    },{
        university:"Gujarat Technological University",
        level:"Bachelor's",
        major:"Information Technology (eq: Computer Science)",
        location:"Rajkot, India",
        year:"2010-2015",
    }],
    current_programming_languages:"Python, C++, JavaScript, PHP",
    current_frameworks:"Pandas, Gatsby, React, TensorFlow",
    current_database:"PostgreSQL, GraphQL",
    past_programming_languages:"C#, MATLAB",
    past_frameworks:"Asp.NET 4.5, PyTorch",
    past_database:"MySQL, Oracle",
    other_designing: "Illustrator, Photoshop, Blender",
    other_shell_scripting: "Bash, PowerShell",
    other_operating_systems: "Linux, Windows, MacOS"
}


const AboutExpList = ()=>{
    return(
        <>
        <section className="flex flex-col mt-5 md:mt-10 z-30">
            <hr/>
        <div className="">
        <div className="uppercase tracking-widest text-2xl font-medium py-5 pl-5 header">Education & Software Skills</div>   
        <span className="flex md:space-x-5 flex-col md:flex-row">
            <div className="rounded p-3 flex-1 flex flex-col justify-evenly bg-blue shadow-none md:shadow">
                <div className="uppercase tracking-widest text-sm underline pt-2 pl-5 font-bold ">Education</div>
                {about.degrees.map((edu)=>(
                    <>
                    <div className="py-2">
                        <div className="edu-title">{edu.level} in {edu.major}</div>
                        <div className="px-5">{edu.year}</div>
                        <div className="px-5">{edu.university}</div>
                    </div>
                    </>
                ))}
            </div>
            <div className="rounded p-3 flex-1 mt-5 md:mt-0 flex flex-col justify-evenly bg-blue shadow-none md:shadow" >
                <div className="uppercase tracking-widest text-sm underline py-2 pl-5 font-bold ">Current Programming Proficiency</div>   
                <div className="edu-title inline-block"><div className="inline-block">Current Programming Languages</div><div className="px-5">{about.current_programming_languages}</div></div>
                <div className="edu-title "><div className="inline-block">Current Frameworks</div><div className="px-5">{about.current_frameworks}</div></div>
                <div className="edu-title "><div className="inline-block">Current Databases</div><div className="px-5">{about.current_database}</div></div>
            </div>
        </span>
        <span className="flex md:space-x-5 mt-5 flex-col md:flex-row">
            <div className="rounded p-3 flex-1 mt-5 md:mt-0 flex flex-col justify-evenly bg-blue shadow-none md:shadow" >
                <div className="uppercase tracking-widest text-sm underline py-2 pl-5 font-bold ">Other Softwares (Working Knowledge)</div>   
                <div className="edu-title inline-block"><div className="inline-block">Designing</div><div className="px-5">{about.other_designing}</div></div>
                <div className="edu-title "><div className="inline-block">Shell Scripting</div><div className="px-5">{about.other_shell_scripting}</div></div>
                <div className="edu-title "><div className="inline-block">Operating Systems</div><div className="px-5">{about.other_operating_systems}</div></div>
            </div>
            <div className="rounded p-3 flex-1 mt-5 md:mt-0 flex flex-col justify-evenly shadow-none md:shadow-inner bg-blue opacity-90">
                <div className="uppercase tracking-widest text-sm underline py-2 pl-5 font-bold ">Past Programming Proficiency</div>   
                <div className="edu-title inline-block"><div className="inline-block">Past Programming Languages</div><div className="px-5">{about.past_programming_languages}</div></div>
                <div className="edu-title "><div className="inline-block">Past Frameworks</div><div className="px-5">{about.past_frameworks}</div></div>
                <div className="edu-title "><div className="inline-block">Past Databases</div><div className="px-5">{about.past_database}</div></div>
            </div>
        </span>
        </div>
        <span className="mt-5 flex-col md:flex-row">
            <hr/>
            <div className="">
                <div className="m-auto max-w-screen-xl">
                    <div className="uppercase tracking-widest text-2xl font-medium py-5 pl-5 header">Complete List of Experience</div>   
                    <ExpList/>
                </div>
            </div>
        </span >

        </section>
        </>
    );
};

export default AboutExpList;