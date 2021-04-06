import React from 'react';
import RecentExperience from './recentExperience';

const Experience = () =>{
    return(
        <>
        <section className="latest-blog-container mt-20">            
            <div className="px-5 mb-3 font-medium uppercase tracking-widest">Recent Experience</div>
            <RecentExperience/>  
        </section>
        </>
    );

};

export default Experience;